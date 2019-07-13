import { useState } from 'vuex';
import createVuexHelper, { Helper } from './helpers/vuex';

export default createVuexHelper<typeof useState>(Helper.State);
