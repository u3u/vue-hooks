import 'vue-clipboard2';
import { getRuntimeVM } from './util/runtime';

export default function useClipboard(): {
  $copyText: Function;
} {
  const vm = getRuntimeVM();
  const { $copyText } = vm;

  return {
    $copyText,
  };
}
