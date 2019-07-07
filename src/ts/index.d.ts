import {
  Mapper,
  MapperWithNamespace,
  MapperForState,
  MapperForStateWithNamespace,
  FunctionMapper,
  FunctionMapperWithNamespace,
  Computed,
  MutationMethod,
  Commit,
  Dictionary,
  ActionMethod,
  Dispatch,
} from 'vuex';

interface MapperRestParameters<R> {
  (...args: any[]): Dictionary<R>;
}

export type MapperState = Mapper<Computed> &
  MapperWithNamespace<Computed> &
  MapperForState &
  MapperForStateWithNamespace &
  MapperRestParameters<Computed>;

export type MapperMutations = Mapper<MutationMethod> &
  MapperWithNamespace<MutationMethod> &
  FunctionMapper<Commit, MutationMethod> &
  FunctionMapperWithNamespace<Commit, MutationMethod> &
  MapperRestParameters<ActionMethod>;

export type MapperGetters = Mapper<Computed> &
  MapperWithNamespace<Computed> &
  MapperRestParameters<Computed>;

export type MapperActions = Mapper<ActionMethod> &
  MapperWithNamespace<ActionMethod> &
  FunctionMapper<Dispatch, ActionMethod> &
  FunctionMapperWithNamespace<Dispatch, ActionMethod> &
  MapperRestParameters<ActionMethod>;
