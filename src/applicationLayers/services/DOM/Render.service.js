/* eslint-disable max-len */
// service-layout
import {VDOMFilter} from '@services/virtualDOM/vdom-filter.service.js';
import {VDOMCollector} from '@services/virtualDOM/vdom-collector-vnode.service.js';
import {VDOMRender} from '@services/virtualDOM/vdom-render.service.js';

export class Render {
  constructor(object, rules = true) {
    this.$elementAffected = object.$elementAffected;
    this.elementAffectedUID = object.elementAffectedUID;
    this.newElement = object.newElement;
    this.oldNode = null;
    this.newNode = null;
    this.rules = rules;
  }
  start() {
    // Создай экземпляр класаа VDOMFilter
    const filter = new VDOMFilter(this.elementAffectedUID);
    // Создай экземпляр класса VDOMCollector
    const collector = new VDOMCollector();
    // Создай экземпляр класса VDOMRender
    const renderVDOM = new VDOMRender(this.$elementAffected);
    // Отфильтруй нужную vnode в vdom
    filter.start();
    // Запиши отфильтрованную vnode  в переменную this.oldNode
    this.oldNode = filter.result();
    // Отменяем рендер ChildrenNodes
    if (!this.rules) {
      this.oldNode.children = [];
    }
    // Сформируй родительский элемент новой vnode
    this.newNode = collector.factoryNodeParent(
        this.newElement.parent.tag,
        this.newElement.parent.props,
        this.newElement.parent.children,
    );
    // Сформируй дочерние элементы новой vnode
    if (this.newElement.children) {
      this.newElement.children.forEach((element) => {
        collector.factoryNodeChildren(
            element.tag,
            element.props,
            element.children
        );
      });
    }
    // Дай команду на рендеринг изменений
    renderVDOM.updateElement(
        this.$elementAffected,
        this.newNode,
        this.oldNode
    );
    return {};
  }
}
