import {VDOMFilter} from '@services/virtualDOM/vdom-filter.service.js';
// eslint-disable-next-line max-len
import {VDOMCollector} from '@services/virtualDOM/vdom-collector-vnode.service.js';
import {VDOMRender} from '@services/virtualDOM/vdom-render.service.js';
import {StorageApp} from '@data/Storage.app.js';


class Render {
  constructor(object) {
    this.$elementAffected = object.$elementAffected;
    this.elementAffectedUID = object.elementAffectedUID;
    this.newElement = object.newElement;
    this.oldNode = null;
    this.newNode = null;
  }
}

export const ProxyRender = new Proxy(Render, {
  construct(Target, args) {
    // Создай экземпляр класса Render
    const render = new Target(...args);
    // Создай экземпляр класаа VDOMFilter
    const filter = new VDOMFilter();
    // Создай экземпляр класса VDOMCollector
    const collector = new VDOMCollector();
    // Создай экземпляр класса VDOMRender
    const renderVDOM = new VDOMRender(render.$elementAffected);

    // Отфильтруй нужную vnode в vdom
    filter.start(render.elementAffectedUID);
    // Запиши отфильтрованную vnode  в переменную this.oldNode
    render.oldNode = filter.result();
    // Сформируй родительский элемент новой vnode
    render.newNode = collector.factoryNodeParent(
        render.newElement.parent.tag,
        render.newElement.parent.props,
        render.newElement.parent.children,
    );
    // Сформируй дочерние элементы новой vnode
    render.newElement.children.forEach((element) => {
      collector.factoryNodeChildren(
          element.tag,
          element.props,
          element.children
      );
    });
    // Дай команду на рендеринг изменений
    renderVDOM.updateElement(
        render.$elementAffected,
        render.newNode,
        render.oldNode
    );
    // Дай команду на перезагрузку состояния vdome
    StorageApp.reloadVirtualDOM();
    return {};
  },
});
