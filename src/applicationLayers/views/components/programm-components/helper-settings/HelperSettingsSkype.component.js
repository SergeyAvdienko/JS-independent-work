/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/helper-settings/DefaultHelperSettingsClass.js';

const options = {
  class: 'content__block-helper-settings-skype',
  titleS: 'Ваш логин в Skype',
  titleE: 'Вы не указали логин своего аккаунта в Skype',
  titleD: 'Идет запрос информации',
  id: 'buttonLinkSetUserSkype',
  icon: 'headset_mic',
};

class HelperSettingsSkype extends DefaultClass {
  constructor() {
    super(options);
  }
}

export class HelperSettingsSkypeFactory {
  constructor() {
    this.list = {
      success: new HelperSettingsSkype().toSuccess(),
      error: new HelperSettingsSkype().toError(),
      default: new HelperSettingsSkype().toDefault(),
    };
  }
  toReady(type = 'error') {
    const HelperClass = this.list[type];
    return HelperClass;
  }
  toHTML() {
    return `
      <div class="content__block-helper-settings-skype">
        <div class="content__block-helper-settings error">
          <p>Вы не указали логин своего аккаунта в Skype</p>
          <div class="content__block-helper-settings-right-column">
            <span class="error" id="buttonLinkSetUserSkype">Указать</span>
            <i class="material-icons error">headset_mic</i>
          </div>
        </div>
      </div>`;
  }
}
