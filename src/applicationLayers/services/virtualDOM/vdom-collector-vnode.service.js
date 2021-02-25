
// Setup VDOMCollector
const initKeyValue = {
  tag: 'li',
  prors: [{class: ''}, {id: ''}],
  children: 'Test',
  tagInit(tag = '') {
    if (typeof tag === 'string') return tag;
    throw Error('Тип тега String');
  },
  propsInit(container = []) {
    if (!Array.isArray(container)) {
      // console.log('Свойство props было принудительно обернуто в []');
      container = [container];
    }
    return Object.assign({}, ...container);
  },
  childrenInit(container = 'Пустой элемент передайте массив') {
    if (typeof container === 'string') return container;
    if (Array.isArray(container)) return container;
    throw Error(
        'Если ваш Chidren элемента VDOM/DOM не имеет дочерних элементов []' +
        ', то должен быть текстом'
    );
  },
  test() {
    return Object.assign(
        {},
        {tag: this.tagInit(this.tag)},
        {props: this.propsInit(this.props)},
        {children: this.childrenInit(this.children)}
    );
  },
  create(tag, props, children = this.children) {
    this.tag = tag;
    this.props = props;
    this.children = children;
    return this.test();
  },
};

// Сначала объявляем родительский элемент виртуальной ноды
// const readyVirtualNode = factoryNodeParent('ul', [{class: 'menu__ul'}], []);
// Затем последовательно дочерние элементы
// factoryNodeChildren('li', [{class: 'menu__li'}], 'Программа');
// factoryNodeChildren('li', [{class: 'menu__li menu__active'}], 'Занятие');
// При одинаковых значениях можно указать количество копий и созать разом
// factoryNodeChildren('li', [{class: 'menu__li'}], 'Занятие', 3);

export class VDOMCollector {
  constructor() {
    this.nodeParent = Object.create(initKeyValue);
    this.nodeChildren = Object.create(initKeyValue);
    this.testArray = [];
  }
  factoryNodeChildren(tag, props, children, copy = 0) {
    if (!copy) {
      this.nodeParent.children.push(
          this.nodeChildren.create(tag, props, children)
      );
    } else {
      while (copy > 0) {
        this.nodeParent.children.push(
            this.nodeChildren.create(tag, props, children)
        );
        -- copy;
      }
    }
  }
  factoryNodeParent(tag, props, children) {
    return this.nodeParent.create(tag, props, children);
  }
  testArrayRandElement() {
    if (!this.testArray.length) throw Error('Массив(testArray) пуст');
    return Math.floor(Math.random() * this.testArray.length);
  }
}
