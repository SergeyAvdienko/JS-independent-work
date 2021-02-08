/* eslint-disable max-len */
import {UniqueIDModel} from '@models/UniqueID.model.js';
import {ProxyRender} from '@models/Render.model.proxy.js';

class Facade {
  constructor(model, requestArray) {
    this.Model = model;
    this.requestArray = requestArray;
  }
  reply() {
    // Результат работы выбранной модели
  }
  addRequest() {
    return this.reply(this.requestArray);
  }
}

class UID extends Facade {
  reply() {
    const uID = new this.Model(this.requestArray[1]);
    return uID.elementAffectedUID;
  }
}

class AnimationButton extends Facade {
  reply() {
    return new this.Model(this.requestArray[1]);
  }
}

function registryCommand(requestArray = []) {
  switch (requestArray[0]) {
    case 'Присвой UID для $elementAffected, на который я буду воздействовать':
      return new UID(UniqueIDModel, requestArray).addRequest();
    case 'Покажи пользователю анимацию обработки данных':
      return new AnimationButton(ProxyRender, requestArray).addRequest();
    default:
      console.log('Нет запрашиваемого Фасада');
      break;
  }
}

export class HeaderFacade {
  buttonLoginEvent() {
    this.elementAffectedUID = registryCommand(
        [
          'Присвой UID для $elementAffected, на который я буду воздействовать',
          this.$elementAffected,
        ]
    );
    registryCommand(
        [
          'Покажи пользователю анимацию обработки данных',
          {
            $elementAffected: this.$elementAffected,
            elementAffectedUID: this.elementAffectedUID,
            newElement: {
              parent: {tag: 'div', props: [{class: 'spinner'}], children: []},
              children: [
                {tag: 'div', props: [{class: 'bounce1'}], children: []},
                {tag: 'div', props: [{class: 'bounce2'}], children: []},
                {tag: 'div', props: [{class: 'bounce3'}], children: []},
              ],
            },
          },
        ]
    );
    return;
  }
  buttonLogotypeEvent() {
    const flag = true;
    this.elementAffectedUID = registryCommand(
        [
          'Присвой UID для $elementAffected, на который я буду воздействовать',
          this.$elementAffected,
        ]
    );
    const ArrayLetters = {
      home: ['Y', 'o', 'u', 'r', 'H', 'a', 'b', 'i', 't', '.', 'r', 'u'],
      question: ['Y', 'o', 'u', 'r', 'Q', 'u', 'e', 's', 't', 'i', 'o', 'n'],
    };
    function toggleArrayLetters() {
      if (flag) {
        return ArrayLetters.home;
      } else {
        return ArrayLetters.question;
      }
    }
    registryCommand(
        ['Покажи пользователю анимацию обработки данных',
          {
            $elementAffected: this.$elementAffected,
            elementAffectedUID: this.elementAffectedUID,
            newElement: {
              parent: {tag: 'ul', props: [{class: 'left__h1 title-h1 title-animation'}], children: []},
              children: [
                {tag: 'li', props: [{class: 'left__h1-1'}], children: [toggleArrayLetters()[0]]},
                {tag: 'li', props: [{class: 'left__h1-2'}], children: [toggleArrayLetters()[1]]},
                {tag: 'li', props: [{class: 'left__h1-3'}], children: [toggleArrayLetters()[2]]},
                {tag: 'li', props: [{class: 'left__h1-4'}], children: [toggleArrayLetters()[3]]},
                {tag: 'li', props: [{class: 'left__h1-5'}], children: [toggleArrayLetters()[4]]},
                {tag: 'li', props: [{class: 'left__h1-6'}], children: [toggleArrayLetters()[5]]},
                {tag: 'li', props: [{class: 'left__h1-7'}], children: [toggleArrayLetters()[6]]},
                {tag: 'li', props: [{class: 'left__h1-8'}], children: [toggleArrayLetters()[7]]},
                {tag: 'li', props: [{class: 'left__h1-9'}], children: [toggleArrayLetters()[8]]},
                {tag: 'li', props: [{class: 'left__h1-10'}], children: [toggleArrayLetters()[9]]},
                {tag: 'li', props: [{class: 'left__h1-11'}], children: [toggleArrayLetters()[10]]},
                {tag: 'li', props: [{class: 'left__h1-12'}], children: [toggleArrayLetters()[11]]},
              ],
            },
          },
        ]
    );
  }
}
