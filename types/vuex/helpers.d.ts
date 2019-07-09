import * as Vuex from 'vuex';
import { Wrapper } from 'vue-function-api';

declare module 'vuex/types/helpers' {
  type ComputedWrapper = Wrapper<any>;

  interface MapperForState {
    <S>(
      map: Dictionary<(this: CustomVue, state: S, getters: any) => any>,
    ): Dictionary<ComputedWrapper>;
  }

  interface MapperForStateWithNamespace {
    <S>(
      namespace: string,
      map: Dictionary<(this: CustomVue, state: S, getters: any) => any>,
    ): Dictionary<ComputedWrapper>;
  }

  export const useState: Mapper<ComputedWrapper> &
    MapperWithNamespace<ComputedWrapper> &
    MapperForState &
    MapperForStateWithNamespace;

  export const useGetters: Mapper<ComputedWrapper> &
    MapperWithNamespace<ComputedWrapper>;
}
