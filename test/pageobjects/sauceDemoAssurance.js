import { $ } from '@wdio/globals'
import myPages from './sauceDemoMain.js';

class sauceAssurance extends myPages {

    get rootAlert () {
        return $('#root');
    }
    get errorAlert () {
        return $('.error-message-container.error');
    }
}

export default new sauceAssurance();
