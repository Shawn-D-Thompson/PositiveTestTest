import { $ } from '@wdio/globals'
import myPages from './sauceDemoMain.js';

class sauceAssurance extends myPages {

    get rootAlert () {
        return $('#root');
    }
}

export default new sauceAssurance();
