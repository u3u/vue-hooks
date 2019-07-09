import { mapMutations } from 'vuex';
import createVuexHelper, { Helper } from './util/helpers';

export default createVuexHelper<typeof mapMutations>(Helper.Mutations);
