import { ref, Ref, onMounted } from '@vue/composition-api';

export interface ReturnValue<Result = any> {
  loading: Ref<boolean>;
  error: Ref<Error>;
  resp: Ref<Result>;
  run: (...args: any[]) => void | Promise<Result>;
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
          return resp;
        }
        return initialData;
      })
      .then((returns: Result) => {
        if (typeof onSuccess === 'function') {
          onSuccess(returns, params);
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

  function start(...args: any[]): Promise<Result | any> {
    if (manual) {
      return run(...args);
    }
    return Promise.resolve(initialData);
  }

  onMounted(() => {
    if (!manual) {
      run(...params);
    }
  });

  return {
    loading,
    error,
    resp: data,
    run: start,
  };
}

export default useAsync;
