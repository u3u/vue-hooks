import { VueConstructor } from 'vue';
import Vuex, { Module } from 'vuex';

export interface CounterState {
  count: number;
}

export default function createStore(localVue: VueConstructor) {
  localVue.use(Vuex);
  return new Vuex.Store<CounterState>({
    state: {
      count: 0,
    },

    actions: {
      incrementAsync(context, delay = 1000) {
        setTimeout(() => {
          context.commit('increment');
        }, delay);
      },
    },

    mutations: {
      increment(state) {
        Object.assign(state, { count: state.count + 1 });
      },
    },

    getters: {
      plusOne: (state) => state.count + 1,
    },

    modules: {
      test: {
        namespaced: true,

        state: {
          count: 0,
        },

        actions: {
          decrementAsync(context, delay = 1000) {
            setTimeout(() => {
              context.commit('decrement');
            }, delay);
          },
        },

        mutations: {
          decrement(state) {
            Object.assign(state, { count: state.count - 1 });
          },
        },

        getters: {
          minusOne: (state) => state.count - 1,
        },
      } as Module<CounterState, CounterState>,
    },
  });
}
