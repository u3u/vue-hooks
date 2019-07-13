import Vue from 'vue';
import { Dispatch, Commit } from 'vuex';
import { Wrapper } from 'vue-function-api';

type Dictionary<T> = { [key: string]: T };
type Computed = Wrapper<any>;
type MutationMethod = (...args: any[]) => void;
type ActionMethod = (...args: any[]) => Promise<any>;
type CustomVue = Vue & Dictionary<any>;

interface Mapper<R> {
  (map: string[]): Dictionary<R>;
  (map: Dictionary<string>): Dictionary<R>;
}

interface MapperWithNamespace<R> {
  (namespace: string, map: string[]): Dictionary<R>;
  (namespace: string, map: Dictionary<string>): Dictionary<R>;
}

interface FunctionMapper<F, R> {
  (
    map: Dictionary<(this: CustomVue, fn: F, ...args: any[]) => any>,
  ): Dictionary<R>;
}

interface FunctionMapperWithNamespace<F, R> {
  (
    namespace: string,
    map: Dictionary<(this: CustomVue, fn: F, ...args: any[]) => any>,
  ): Dictionary<R>;
}

interface MapperForState {
  <S>(
    map: Dictionary<(this: CustomVue, state: S, getters: any) => any>,
  ): Dictionary<Computed>;
}

interface MapperForStateWithNamespace {
  <S>(
    namespace: string,
    map: Dictionary<(this: CustomVue, state: S, getters: any) => any>,
  ): Dictionary<Computed>;
}

export type useState = Mapper<Computed> &
  MapperWithNamespace<Computed> &
  MapperForState &
  MapperForStateWithNamespace;

export type useGetters = Mapper<Computed> & MapperWithNamespace<Computed>;

export type useMutations = Mapper<MutationMethod> &
  MapperWithNamespace<MutationMethod> &
  FunctionMapper<Commit, MutationMethod> &
  FunctionMapperWithNamespace<Commit, MutationMethod>;

export type useActions = Mapper<ActionMethod> &
  MapperWithNamespace<ActionMethod> &
  FunctionMapper<Dispatch, ActionMethod> &
  FunctionMapperWithNamespace<Dispatch, ActionMethod>;
