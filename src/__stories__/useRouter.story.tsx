/* eslint spaced-comment: off, import/no-extraneous-dependencies: off */
/// <reference path="../../node_modules/vue-tsx-support/options/enable-vue-router.d.ts" />
import 'vue-tsx-support/enable-check';
import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';
import { storiesOf } from '@storybook/vue';
import {
  createComponent,
  value,
  watch,
  onMounted,
  onUnmounted,
} from 'vue-function-api';
import { useRouter } from '..';
import { ShowDocs } from './components';

type Inject = {
  time: number;
  route: Route;
  router: VueRouter;
};

const Docs = () => <ShowDocs md={require('../../docs/useRouter.md')} />;

const Home: any = () => (
  <a key="home" href="https://github.com/u3u" target="_blank">
    <img
      src="https://avatars2.githubusercontent.com/u/20062482?v=4"
      width={100}
      height={100}
    />
  </a>
);

const About: any = () => (
  <img
    key="about"
    src="https://avatars2.githubusercontent.com/u/29977599?v=4"
    width={100}
    height={100}
  ></img>
);

const NotFound: any = () => (
  <a key="404" href="https://github.com/egoist" target="_blank">
    <img
      src="https://avatars2.githubusercontent.com/u/8784712?v=4"
      width={100}
      height={100}
    />
  </a>
);

const Demo = createComponent({
  router: new VueRouter({
    routes: [
      {
        path: '/',
        name: 'index',
        meta: { title: 'Home Page', next: '/about' },
        component: Home,
      },
      {
        path: '/about',
        name: 'about',
        meta: { title: 'About Page', next: '/github' },
        component: About,
      },
      {
        path: '*',
        name: '404',
        meta: { title: '404 - Not Found', next: '/' },
        component: NotFound,
      },
    ],
  }),

  setup() {
    const { route, router } = useRouter();
    const time = value(5);
    let timerId;

    watch(route, () => {
      time.value = 5;
    });

    watch(time, () => {
      if (time.value <= 0) {
        router.replace(route.value.meta.next);
      }
    });

    onMounted(() => {
      // eslint-disable-next-line no-plusplus
      timerId = window.setInterval(() => time.value--, 1e3);
    });

    onUnmounted(() => {
      window.clearInterval(timerId);
    });

    return { time, route, router };
  },

  render(this: Vue & Inject) {
    const { time, route } = this;

    return (
      <div>
        <nav>
          <router-link to="/" exact>
            Home
          </router-link>
          <router-link to="/about" style={{ margin: '0 10px' }}>
            About
          </router-link>
          <router-link to="/github">GitHub</router-link>
        </nav>
        <main style={{ margin: '8px 0' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>
            {route.meta.title} <small>({time}s)</small>
          </h3>
          <keep-alive>
            <transition name="fade" mode="out-in" appear>
              <router-view />
            </transition>
          </keep-alive>
        </main>
        <details>
          <summary style={{ cursor: 'pointer' }}>Route Details</summary>
          <ul>
            {Object.keys(route).map((key) => (
              <li key={key}>
                {key}: <pre>{JSON.stringify(route[key], null, 2)}</pre>
              </li>
            ))}
          </ul>
        </details>
      </div>
    );
  },
});

storiesOf('useRouter', module)
  // @ts-ignore
  .add('docs', () => Docs)
  .add('demo', () => Demo);
