/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class DefaultClass extends Component {
  constructor(id = '', number = 0) {
    super('div', {class: 'content__block-visual-display-container-item'}, []);
    this.id = id;
    this.nodeSuccess = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-visual-display-container-item-first'}, children: [
          {tag: 'div', props: {class: 'content__block-visual-display-container-item-second success', id: this.id}, children: [
            {tag: 'div', props: {class: 'content__block-visual-display-container-item-icon'}, children: [
              {tag: 'span', props: {class: 'number'}, children: [`${number}`]},
            ]},
          ]},
        ]},
      ],
    };
    this.nodeError = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-visual-display-container-item-first'}, children: [
          {tag: 'div', props: {class: 'content__block-visual-display-container-item-second error', id: this.id}, children: [
            {tag: 'div', props: {class: 'content__block-visual-display-container-item-icon'}, children: [
              {tag: 'span', props: {class: 'number'}, children: [`${number}`]},
            ]},
          ]},
        ]},
      ],
    };
    this.nodeWarning = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-visual-display-container-item-first'}, children: [
          {tag: 'div', props: {class: 'content__block-visual-display-container-item-second warning', id: this.id}, children: [
            {tag: 'div', props: {class: 'content__block-visual-display-container-item-icon'}, children: [
              {tag: 'span', props: {class: 'number'}, children: [`${number}`]},
            ]},
          ]},
        ]},
      ],
    };
    this.nodeDefault = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'content__block-visual-display-container-item-first circle'}, children: [
          {tag: 'div', props: {class: 'content__block-visual-display-container-item-second', id: this.id}, children: [
            {tag: 'div', props: {class: 'content__block-visual-display-container-item-icon'}, children: [
              {tag: 'span', props: {class: 'number'}, children: [`${number}`]},
            ]},
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
  toWarning() {
    this.nodeWarning.parent.children = this.nodeWarning.children;
    return this.nodeWarning.parent;
  }
  toDefault() {
    this.nodeDefault.parent.children = this.nodeDefault.children;
    return this.nodeDefault.parent;
  }
}
