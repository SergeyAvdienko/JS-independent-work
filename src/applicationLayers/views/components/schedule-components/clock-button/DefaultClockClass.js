/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class DefaultClass extends Component {
  constructor(options) {
    super('li', {class: 'list__li'}, []);
    this.title = options.title;
    this.class = options.class;
    this.nodeConfirm = {
      parent: this.el,
      children: [
        {tag: 'p', props: {class: 'list__p'}, children: [`${this.title}`]},
        {tag: 'div', props: {class: 'list__block-confirm'}, children: [
          {tag: 'div', props: {class: `${this.class}`}, children: [
            {tag: 'button', props: {class: 'list__confirm', id: `button${options.class}`}, children: ['Записаться']},
          ]},
        ]},
      ],
    };
    this.nodeClosed = {
      parent: this.el,
      children: [
        {tag: 'p', props: {class: 'list__p'}, children: [`${this.title}`]},
        {tag: 'div', props: {class: 'list__block-closed'}, children: [
          {tag: 'div', props: {class: `${this.class}`}, children: [
            {tag: 'button', props: {class: 'list__closed', id: `button${options.class}`}, children: ['Отменить']},
          ]},
        ]},
      ],
    };
    this.nodeDisabled = {
      parent: this.el,
      children: [
        {tag: 'p', props: {class: 'list__p'}, children: [`${this.title}`]},
        {tag: 'div', props: {class: 'list__block-disabled'}, children: [
          {tag: 'div', props: {class: `${this.class}`}, children: [
            {tag: 'button', props: {class: 'list__disabled', id: `button${options.class}`}, children: ['Занято']},
          ]},
        ]},
      ],
    };
  }
  toSuccess() {
    this.nodeConfirm.parent.children = this.nodeConfirm.children;
    return this.nodeConfirm.parent;
  }
  toWarning() {
    this.nodeClosed.parent.children = this.nodeClosed.children;
    return this.nodeClosed.parent;
  }
  toError() {
    this.nodeDisabled.parent.children = this.nodeDisabled.children;
    return this.nodeDisabled.parent;
  }
}
