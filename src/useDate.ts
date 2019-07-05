import { value, onMounted, onUnmounted } from 'vue-function-api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function useDate(
  d: dayjs.ConfigType = Date.now(),
  timeout: number = 0,
) {
  const date = value(dayjs(d));

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
