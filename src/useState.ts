import { useState } from 'vuex';
import createVuexHelper, { Helper } from './util/helpers';

export default createVuexHelper<typeof useState>(Helper.State);
