import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; // Per Ant Design's docs
import { VueEmotion } from '@egoist/vue-emotion';
import {
  ReactiveBase,
  DataSearch,
  ReactiveList,
} from '@appbaseio/reactivesearch-vue';

Vue.use(ReactiveBase);
Vue.use(DataSearch);
Vue.use(ReactiveList);

Vue.use(Antd);
Vue.use(VueEmotion);
