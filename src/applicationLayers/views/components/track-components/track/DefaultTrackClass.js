/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class DefaultClass extends Component {
  constructor(options) {
    super('div', {class: options.class}, []);
    this.title = options.title;
    this.ul = options.ul;
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'line__progress'}, children: [
          {tag: 'label', props: {class: 'line__label'}, children: [`${this.title}`]},
          {tag: 'ul', props: {class: 'line__ul'}, children: [
            {tag: 'li', props: {class: `line__li line__${this.ul[0]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[1]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[2]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[3]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[4]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[5]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[6]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[7]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[8]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[9]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[10]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[11]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[12]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[13]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[14]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[15]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[16]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[17]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[18]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[19]}`}, children: []},
            {tag: 'li', props: {class: `line__li line__${this.ul[20]}`}, children: []},
          ]},
        ]},
        {tag: 'div', props: {class: 'site__report-button'}, children: [
          {tag: 'button', props: {class: 'button', id: 'buttonReadyTask'}, children: ['Выполненно']},
        ]},
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
}
