import {mutationVirtualDOMProxy} from '@data/Storage.app.js';

export class VDOMReload {
  constructor() {}
  init() {
    console.log('Обновляем состояние Storage - локального хранилища');
    mutationVirtualDOMProxy();
  }
}
