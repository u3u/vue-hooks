import { ref, onMounted, onUnmounted } from '@vue/composition-api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function useDate(
  d: dayjs.ConfigType = Date.now(),
  timeout: number = 0,
) {
  const date = ref(dayjs(d));

  if (timeout) {
    let timerId: number;

    onMounted(() => {
      timerId = window.setInterval(() => {
        date.value = dayjs(Date.now());
      }, timeout);
    });

    onUnmounted(() => {
      window.clearInterval(timerId);
    });
  }

  return date;
}

export { dayjs };
