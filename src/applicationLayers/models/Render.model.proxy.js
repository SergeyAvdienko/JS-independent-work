// service-layout
import {VDOMFilter} from '@services/virtualDOM/vdom-filter.service.js';
// eslint-disable-next-line max-len
import {VDOMCollector} from '@services/virtualDOM/vdom-collector-vnode.service.js';
import {VDOMRender} from '@services/virtualDOM/vdom-render.service.js';
import {VDOMReload} from '@services/virtualDOM/vdom-reload.service.js';


class Render {
  constructor(object, rules = 'childrenOn') {
    this.$elementAffected = object.$elementAffected;
    this.elementAffectedUID = object.elementAffectedUID;
    this.newElement = object.newElement;
    this.oldNode = null;
    this.newNode = null;
    this.rules = rules;
  }
}

export const ProxyRenderModel = new Proxy(Render, {
  construct(Target, args) {
    // Создай экземпляр класса Render
    const render = new Target(...args);
    // Создай экземпляр класаа VDOMFilter
    const filter = new VDOMFilter(render.elementAffectedUID);
    // Создай экземпляр класса VDOMCollector
    const collector = new VDOMCollector();
    // Создай экземпляр класса VDOMRender
    const renderVDOM = new VDOMRender(render.$elementAffected);
    // Создай экземпляр класса ReloadVirtualDOM
    const reloader = new VDOMReload();
    // Отфильтруй нужную vnode в vdom
    filter.start();
    // Запиши отфильтрованную vnode  в переменную this.oldNode
    render.oldNode = filter.result();
    // Отменяем рендер ChildrenNodes
    if (render.rules === 'childrenOff') {
      render.oldNode.children = [];
    }
    // Сформируй родительский элемент новой vnode
    render.newNode = collector.factoryNodeParent(
        render.newElement.parent.tag,
        render.newElement.parent.props,
        render.newElement.parent.children,
    );
    // Сформируй дочерние элементы новой vnode
    if (render.newElement.children) {
      render.newElement.children.forEach((element) => {
        collector.factoryNodeChildren(
            element.tag,
            element.props,
            element.children
        );
      });
    }
    // Дай команду на рендеринг изменений
    renderVDOM.updateElement(
        render.$elementAffected,
        render.newNode,
        render.oldNode
    );
    // Дай команду на обновлене vdom
    reloader.init();
    return {};
  },
});
