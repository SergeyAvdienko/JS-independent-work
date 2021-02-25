import {StorageApp} from '@data/Storage.app.js';

export class VDOMFilter {
  constructor(uniqID) {
    this.DOM = StorageApp.virtualDOM;
    this.ID = uniqID;
    this.vnode = undefined;
  }
  _filter(arrayChidren) {
    for (let index = 0; index < arrayChidren.length; index++) {
      const node = arrayChidren[index];
      if (Number(node.id) === Number(this.ID)) {
        this.vnode = node;
      } else {
        if (typeof node.children !== 'string') this._filter(node.children);
      }
    }
  }
  start() {
    if (Number(this.ID) === Number(this.DOM.id)) return this.DOM;
    this._filter(this.DOM.children);
  }
  result() {
    return Object.assign({}, this.vnode);
  }
}
