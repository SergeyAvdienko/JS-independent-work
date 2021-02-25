/* eslint-disable max-len */
import {VDOMReload} from '@services/virtualDOM/vdom-reload.service.js';

export class UniqueIDModel {
  constructor(elementAffected, updateVDOM) {
    this.elementAffectedUID = this.uID(elementAffected, updateVDOM);
  }

  uID(elementAffected, updateVDOM) {
    console.log(`Команда на обновление VDOM = ${updateVDOM}`);
    if (updateVDOM) {
      return new Promise((resolve, reject) => {
        new VDOMReload().init();
        resolve(elementAffected.getAttribute('data-uniqID'));
      });
    } else {
      return elementAffected.getAttribute('data-uniqID');
    }
  }
}
