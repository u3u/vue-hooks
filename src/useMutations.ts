import { mapMutations } from 'vuex';
import createVuexHelper, { Helper } from './helpers/vuex';

export default createVuexHelper<typeof mapMutations>(Helper.Mutations);
