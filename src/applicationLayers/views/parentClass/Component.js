export class Component {
  constructor(tag = '', props = {}, children = []) {
    this.el = {tag, props, children};
  }
}
