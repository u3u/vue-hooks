import { ref, Ref } from '@vue/composition-api';

export interface ReturnValue<Result = any> {
  loading: Ref<boolean>;
  error: Ref<Error>;
  resp: Ref<Result>;
  run: (...args: any[]) => void;
}

export interface Options<Result = any> {
  manual?: boolean;
  initialData?: Result;
  onSuccess?: (data: Result, params?: any[]) => void;
  onError?: (e: Error, params?: any[]) => void;
  params?: any[];
}

function useAsync<Result = any>(
  fn: (...args: any[]) => Promise<Result>,
  options?: Options<Result>,
): ReturnValue<Result> {
  // initial state
  const defaultOptions = options || ({} as Options<Result>);
  const { manual, onError, onSuccess, params = [] } = defaultOptions;
  const initialData = defaultOptions.initialData || ({} as Result);

  const loading = ref<boolean>(!manual);
  const error = ref<Error | any>(null);
  const data = ref<Result | any>(initialData);

  // execute async function
  function run(...args: any[]) {
    loading.value = true;
    return fn(...args)
      .then((resp: Result) => {
        if (resp) {
          data.value = resp;
          if (typeof onSuccess === 'function') {
            onSuccess(resp, params);
          }
        } else {
          Promise.reject(
            new Error('Request success but no response data back'),
          );
        }
      })
      .catch((err: Error) => {
        error.value = err;
        if (typeof onError === 'function') {
          onError(err, params);
        }
      })
      .finally(() => {
        loading.value = false;
      });
  }

  function start(...args: any[]) {
    // 只有 manual 为 true 时才执行
    if (manual) {
      const mergedParams = new Set([...params, ...args]);
      return run(...Array.from(mergedParams));
    }
    return Promise.reject(
      new Error('Use manual options to call function manually'),
    );
  }

  if (!manual) {
    run(...params);
  }

  return {
    loading,
    error,
    resp: data,
    run: start,
  };
}

export default useAsync;
