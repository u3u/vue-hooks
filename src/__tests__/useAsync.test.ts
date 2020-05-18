import { useAsync } from '..';
import renderHook from '../util/renderHook';

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

  it('should be executed while initialization', (done) => {
    setTimeout(done, 3 * timer);
    renderHook<unknown>(async () => {
      const { loading, resp } = useAsync(asyncFunction, {
        params: [timer, result],
      });

      expect(loading.value).toBeTruthy();
      expect(resp.value).toEqual({});

      await sleep(timer);

      expect(loading.value).toBeFalsy();
      expect(resp.value).toBe(result);
    });
  });

  it('should be executed after 1000ms', (done) => {
    setTimeout(done, 3 * timer);
    renderHook<unknown>(async () => {
      const { loading, run } = useAsync(asyncFunction, {
        params: [timer, result],
        manual: true,
      });

      expect(loading.value).toBeFalsy();

      await sleep(timer);

      run();
      expect(loading.value).toBeTruthy();

      await sleep(timer);
      expect(loading.value).toBeFalsy();
    });
  });

  // it('should not be executed with `run` while not manual', () => {
  //   let count = 0;
  //   const runCounter = (waiting, resolveValue, shouldError) => {
  //     count += 1;
  //     return asyncFunction(waiting, resolveValue, shouldError);
  //   };

  //   expect(count).toBe(0);

  //   const { run } = useAsync(runCounter, {
  //     params: [timer, result],
  //   });

  //   expect(count).toBe(1);

  //   run();

  //   expect(count).toBe(1);
  // });

  // it('should be error', () => {
  //   renderHook<unknown>(async () => {
  //     const { error } = useAsync(asyncFunction, {
  //       params: [timer, result, true],
  //     });

  //     expect(error.value).toBeFalsy();

  //     console.log(1);

  //     await sleep(timer);

  //     console.log(2);

  //     expect(error.value).toBeTruthy();
  //   });
  // });

  // it('should merge params while execute `run`', (done) => {
  //   renderHook<unknown>(() => {
  //     const { error, run } = useAsync(asyncFunction, {
  //       params: [timer, result],
  //       manual: true,
  //     });

  //     expect(error.value).toBeFalsy();

  //     run(2 * timer, result, true);

  //     setTimeout(() => {
  //       expect(error.value).toBeFalsy();
  //       done();
  //     }, 2 * timer);
  //   });
  // });
});
