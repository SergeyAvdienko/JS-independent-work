import {StorageApp} from '@data/Storage.app.js';

export class VDOMFilter {
  constructor(uniqID) {
    this.DOM = StorageApp.virtualDOM;
    this.ID = uniqID;
    this.vnode = undefined;
  }
  // Принимаю объект и проверяю его uniqID
  start() {
    if (Number(this.ID) === Number(this.DOM.id)) return this.DOM;
    this.filter(this.DOM.children);
  }
  filter(arrayChidren) {
    for (let index = 0; index < arrayChidren.length; index++) {
      const node = arrayChidren[index];
      if (Number(node.id) === Number(this.ID)) {
        this.vnode = node;
      } else {
        if (typeof node.children !== 'string') this.filter(node.children);
      }
    }
  }
  result() {
    return Object.assign({}, this.vnode);
  }
}
