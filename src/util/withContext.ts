import Vue from 'vue';
import { Context } from 'vue-function-api/dist/types/vue';

export default function withContext(hook: (vue: Vue) => any) {
  return (context: Context) => {
    const test = process.env.NODE_ENV === 'test';
    const vue = test ? context.parent.$children[0] : context.root;
    return hook(vue);
  };
}
