import { useGetters } from 'vuex';
import createVuexHelper, { Helper } from './util/helpers';

export default createVuexHelper<typeof useGetters>(Helper.Getters);
