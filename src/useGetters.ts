import { useGetters } from 'vuex';
import createVuexHelper, { Helper } from './helpers/vuex';

export default createVuexHelper<typeof useGetters>(Helper.Getters);
