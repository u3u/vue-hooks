import { mapActions } from 'vuex';
import createVuexHelper, { Helper } from './helpers/vuex';

export default createVuexHelper<typeof mapActions>(Helper.Actions);
