let uniqID = 1;

// eslint-disable-next-line no-unused-vars
export class VDOMCreate {
  constructor($app = 'app') {
    // Корневой элемент
    this.$app = document.getElementById($app);
  }
  // Присваивает data-атрибут data-uniqID элементу
  // Такой же, какой присваивается новому узлу virtualDOM и связывает их
  dataUniqID($el, id) {
    if (!$el.getAttribute('data-uniqID')) {
      return $el.setAttribute('data-uniqID', id);
    }
  }
  // Создает новый узел virtualDOM
  vnode(el, tag, props, children) {
    const id = uniqID++;
    this.dataUniqID(el, id);
    return {tag, props, children, id};
  }
  // строит virtualDOM
  createVDom(element = this.$root) {
    // Возращает textContent элемента
    const textChildren = (element) => {
      return element.textContent;
    };
    // Рекурсивно запускает функцию createVDom для каждого элемента
    const recursiveCreateVDom = (elementChildren) => {
      const arrayChidren = [];
      for (let index = 0; index < elementChildren.length; index++) {
        const el = elementChildren[index];
        arrayChidren.push(this.createVDom(el));
      }
      return arrayChidren;
    };
    // Проверяет является ли свойство children элемента заполненным массивом
    const controlChildren = (elementChildren) => {
      // Если нет, то возвращает textContent элемента
      if (!elementChildren.length) return textChildren(element);
      // Если да, то рекурсивно запускает функцию createVDom
      return recursiveCreateVDom(elementChildren);
    };
    // Запишем сформированный vnode в переменную
    return this.vnode(
        element,
        element.localName,
        {
          id: element.id,
          class: element.className,
          dataset: element.dataset,
        },
        controlChildren(element.children)
    );
  }
  // Call/Вызвать this.createVDom(this.$app)
}
