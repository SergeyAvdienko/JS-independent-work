export class VDOMRender {
  constructor($root) {
    // Корневой элемент в котором будут происходить изменения
    this.$root = $root;
  }
  setProps(node, $parent) {
    Object.keys(node.props).forEach((prop) => {
      $parent.setAttribute(`${prop}`, node.props[`${prop}`]);
    });
  }
  searchIndex($parent, index) {
    for (let ind = 0; ind < $parent.childNodes.length; ind++) {
      const element = $parent.childNodes[ind];
      if (element.nodeType !== 3) {
        if (!index) return ind;
        index = index - 1;
      }
    }
  }
  changed(newNode, oldNode) {
    return typeof newNode !== typeof oldNode ||
           typeof newNode === 'string' && newNode !== oldNode ||
           newNode.tag !== oldNode.tag;
  }
  updateElement($parent, newNode, oldNode, index = 0) {
    if (!oldNode) {
      this.$root.appendChild(
          createElement(newNode)
      );
      this.$root.appendChild(
          createElement(' ')
      );
    } else if (!newNode) {
      this.$root.removeChild(
          this.$root.childNodes[this.searchIndex($parent, index)]
      );
    } else if (this.changed(oldNode, newNode)) {
      const searchIndex = (index, $parent) => {
        if ($parent.childNodes[index].nodeType === 3) {
          index++;
        }
        return index;
      };
      this.$root.replaceChild(
          createElement(newNode),
          this.$root.childNodes[searchIndex(index, this.$root)]
      );
    } else if (newNode.tag) {
      this.setProps(newNode, $parent);
      const newLength = newNode.children.length;
      const oldLength = oldNode.children.length;
      for (let i = 0; i < newLength || i < oldLength; i++) {
        this.updateElement(
            $parent.childNodes[this.searchIndex($parent, index)],
            newNode.children[i],
            oldNode.children[i],
            i
        );
      }
    }
  }
}

// С функцией нужно поработать
function createElement(node) {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }
  const $el = document.createElement(node.tag);
  if (node.props) {
    Object.keys(node.props).forEach((prop) => {
      $el.setAttribute(`${prop}`, node.props[`${prop}`]);
    });
  }
  node.children
      .map(createElement)
      .forEach($el.appendChild.bind($el));
  return $el;
}
