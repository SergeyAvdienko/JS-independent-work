/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';

export class ChainEventsComponent extends Component {
  constructor() {
    super('section', {id: 'one-lesson__section-2'}, []);
    this.title = 'Навык составления цепочек событий';
    this.text = [
      `Освоив этот навык вы всегда будете знать, какое обязательство передать клиенту. У вас не будет
        бесцельных встреч. И клиенту будет намного проще, ведь он будет точно знать зачем ему то, что вы
        предлагаете. Что вы хотите от него сейчас и что вам будет нужно потом.`,
    ];
    this.node = {
      parent: this.el,
      children: [
        {tag: 'div', props: {class: 'site__manual-column-right-subtitle'}, children: [
          {tag: 'h3', props: {class: 'title-h3'}, children: [this.title]},
        ]},
        {tag: 'p', props: {class: 'site__manual-column-right-string'}, children: [this.text[0]]},
      ],
    };
  }
  toReady() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
  toHTML() {
    return `
      <section class="lesson-1__section-2">
        <div class="site__manual-column-right-subtitle">
          <h3 class="title-h3">
            <span>
              Навык составления цепочек событий
            </span>          
          </h3>
        </div>
        <p class="site__manual-column-right-string">
          <span>
            Освоив этот навык вы всегда будете знать, какое обязательство передать клиенту. У вас не будет
            бесцельных встреч. И клиенту будет намного проще, ведь он будет точно знать зачем ему то, что вы
            предлагаете. Что вы хотите от него сейчас и что вам будет нужно потом.
          </span>
        </p>
      </section>
    `;
  }
}
