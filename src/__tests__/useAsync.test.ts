import { onMounted, ref } from '@vue/composition-api';
import { useAsync } from '..';
import renderHook from '../util/renderHook';
import { ReturnValue } from '../useAsync';

const asyncFunction = (
  waiting: number,
  resolveValue?: any,
  shouldError?: boolean,
) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldError) {
        reject(new Error('execute error'));
      }
      resolve(resolveValue);
    }, waiting);
  });

const sleep = (timer = 1) =>
  new Promise((resolve) => setTimeout(resolve, timer));

const timer = 10;
const result = 'success';

describe('useAsync', () => {
  it('should be defined', () => {
    expect(useAsync).toBeDefined();
  });

  it('should be executed while initialization', async () => {
    const { vm } = renderHook<ReturnValue>(() => {
      const { loading, resp } = useAsync(asyncFunction, {
        params: [timer, result],
      });
      expect(loading.value).toBeTruthy();
      expect(resp.value).toEqual({});
      return { loading, resp };
    });

    await sleep(timer * 2);

    expect(vm.loading).toBeFalsy();
    expect(vm.resp).toEqual('success');
  });

  it('should be executed after 1000ms', async () => {
    const { vm } = renderHook<ReturnValue>(() => {
      const { loading, run } = useAsync(asyncFunction, {
        manual: true,
      });

      expect(loading.value).toBeFalsy();

      return { loading, run };
    });

    vm.run(timer, result);

    expect(vm.loading).toBeTruthy();

    await sleep(timer * 2);

    expect(vm.loading).toBeFalsy();
  });

  it('should not work executed with `run` while not manual', async () => {
    const { vm } = renderHook<ReturnValue>(() => {
      const { loading, run } = useAsync(asyncFunction, {
        manual: false,
      });

      expect(loading.value).toBeTruthy();

      return { loading, run };
    });

    await sleep(timer * 2);

    expect(vm.loading).toBeFalsy();

    vm.run();

    expect(vm.loading).toBeFalsy();
  });

  it('should be error', async () => {
    const { vm } = renderHook<ReturnValue>(() => {
      const { error } = useAsync(asyncFunction, {
        params: [timer, result, true],
      });

      expect(error.value).toBeFalsy();
      return {
        error,
      };
    });

    await sleep(timer * 2);

    expect(vm.error).toBeTruthy();
  });

  it('should initialData work', async () => {
    const initialData = {
      payload: [],
      code: 0,
      msg: 'ok',
    };

    const { vm } = renderHook<ReturnValue>(() => {
      const { resp } = useAsync(asyncFunction, {
        initialData,
        params: [timer, result],
      });
      expect(resp.value).toEqual(initialData);
      return { resp };
    });

    await sleep(timer * 2);

    expect(vm.resp).toEqual('success');
  });

  it('should execute onSuccess', async () => {
    const params = [timer, result];
    const onSuccess = (resp, _params) => {
      expect(resp).toEqual('success');
      expect(_params).toEqual(params);
    };

    renderHook<ReturnValue>(() => {
      const { resp } = useAsync(asyncFunction, {
        onSuccess,
        params,
      });
      expect(resp.value).toEqual({});
      return { resp };
    });

    await sleep(timer * 2);

    expect.assertions(3);
  });

  it('should execute onError', async () => {
    const params = [timer, result, true];
    const onError = (error, _params) => {
      expect(error).toBeTruthy();
      expect(_params).toEqual(params);
    };

    renderHook<ReturnValue>(() => {
      const { resp } = useAsync(asyncFunction, {
        onError,
        params,
      });
      expect(resp.value).toEqual({});
      return { resp };
    });

    await sleep(timer * 2);

    expect.assertions(3);
  });
});
