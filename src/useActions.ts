import { mapActions } from 'vuex';
import createVuexHelper, { Helper } from './util/helpers';

export default createVuexHelper<typeof mapActions>(Helper.Actions);
