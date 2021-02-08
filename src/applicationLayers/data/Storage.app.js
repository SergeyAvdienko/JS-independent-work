/* eslint-disable no-unused-vars */
import {VDOMCreate} from '@services/virtualDOM/vdom-create.service.js';

class Storage {
  constructor() {
    this.state = {
      virtualDOM: new VDOMCreate().createVDom(document.getElementById('app')),
    };
  }
  _reloadVirtualDOM() {
    this.state.virtualDOM = new VDOMCreate()
        .createVDom(document.getElementById('app'));
  }
}

console.log('Storage init...');

const virtualDOM = new Storage();
virtualDOM.state.virtualDOM;

export const StorageApp = {
  virtualDOM: virtualDOM.state.virtualDOM,
  reloadVirtualDOM() {
    virtualDOM._reloadVirtualDOM();
  },
};
