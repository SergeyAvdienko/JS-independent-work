/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/helper-settings/DefaultHelperSettingsClass.js';

const options = {
  class: 'content__block-helper-settings-container-path-folder',
  titleS: 'Ссылка на вашу папку',
  titleE: 'Вы не указали ссылку на папку своего Google диска',
  titleD: 'Идет запрос информации',
  id: 'buttonLinkSetUserPathFolder',
  icon: 'folder_shared',
};

class HelperSettingsPathFolder extends DefaultClass {
  constructor() {
    super(options);
  }
}

export class HelperSettingsPathFolderFactory {
  constructor() {
    this.list = {
      success: new HelperSettingsPathFolder().toSuccess(),
      error: new HelperSettingsPathFolder().toError(),
      default: new HelperSettingsPathFolder().toDefault(),
    };
  }
  toReady(type = 'error') {
    const HelperClass = this.list[type];
    return HelperClass;
  }
  toHTML() {
    return `
      <div class="content__block-helper-settings-container-path-folder">
        <div class="content__block-helper-settings error">
          <p>Вы не указали ссылку на папку своего Google диска</p>
          <div class="content__block-helper-settings-right-column">
            <span class="error" id="buttonLinkSetUserPathFolder">Указать</span>
            <i class="material-icons error">folder_shared</i>
          </div>
        </div>
      </div>
    `;
  }
}
