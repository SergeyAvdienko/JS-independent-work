/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class DefaultClass extends Component {
  constructor(options) {
    super('div', {class: options.class}, []);
    this.titleS = options.titleS;
    this.titleE = options.titleE;
    this.titleD = options.titleD;
    this.id = options.id;
    this.icon = options.icon;
    this.nodeSuccess = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-helper-settings success'}, children: [
          {tag: 'p', props: {}, children: [this.titleS]},
          {tag: 'div', props: {class: 'content__block-helper-settings-right-column'}, children: [
            {tag: 'span', props: {class: 'success', id: this.id}, children: ['Изменить']},
            {tag: 'i', props: {class: 'material-icons success'}, children: [this.icon]},
          ]},
        ]},
      ],
    };
    this.nodeError = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-helper-settings error'}, children: [
          {tag: 'p', props: {}, children: [this.titleE]},
          {tag: 'div', props: {class: 'content__block-helper-settings-right-column'}, children: [
            {tag: 'span', props: {class: 'error', id: this.id}, children: ['Указать']},
            {tag: 'i', props: {class: 'material-icons error'}, children: [this.icon]},
          ]},
        ]},
      ],
    };
    this.nodeDefault = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-helper-settings default'}, children: [
          {tag: 'p', props: {}, children: [this.titleD]},
          {tag: 'div', props: {class: 'content__block-helper-settings-right-column'}, children: [
            {tag: 'span', props: {class: 'default'}, children: ['......']},
            {tag: 'i', props: {class: 'material-icons default'}, children: [this.icon]},
          ]},
        ]},
      ],
    };
  }
  toSuccess() {
    this.nodeSuccess.parent.children = this.nodeSuccess.children;
    return this.nodeSuccess.parent;
  }
  toError() {
    this.nodeError.parent.children = this.nodeError.children;
    return this.nodeError.parent;
  }
  toDefault() {
    this.nodeDefault.parent.children = this.nodeDefault.children;
    return this.nodeDefault.parent;
  }
}
