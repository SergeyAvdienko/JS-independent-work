/* eslint-disable max-len */
import {Button} from '@views/parentClass/Button.js';
import {HeaderController} from '@controllers/Header.controller.js';

class ButtonInitialization extends Button {
  constructor(
      idElementEffected = null,
      elementAffectedClass = null,
      indexClass = 0,
  ) {
    super(idElementEffected);
    this.$elementAffected = document.getElementsByClassName(
        elementAffectedClass
    )[indexClass];
    this.elementAffectedUID = 0;
  }
}

export class Header {
  constructor() {
    this.data = () => {
      this.init();
      return;
    };
    this.arrayButton = [
      // --- buttonLogin
      {
        idElementEffected: 'buttonLogin',
        elementAffected: 'right__column-default',
      },
      // --- buttonLogotype
      {
        idElementEffected: 'buttonLogotype',
        elementAffected: 'left__title-h1-container',
      },
    ];
  }
  init() {
    // Контроллер является объектом класса HeaderFacade (паттерн Facade)
    const controllerFacade = new HeaderController();
    const stepTwo = (
        elementTwo,
        controller,
        ClsInitialization,
        idElementEffected = null
    ) => {
      if (!idElementEffected) idElementEffected = elementTwo.idElementEffected;
      if (typeof elementTwo !== 'string') {
        elementTwo = elementTwo.elementAffected;
      }
      const elementInitialization = new ClsInitialization(
          idElementEffected,
          elementTwo
      );
      // В контроллер HeaderFacade наследуется контекст
      // класса ClsInitialization
      try {
        elementInitialization.addEvent(
            controller[`${elementInitialization.idElementEffected}`]
                .bind(elementInitialization)
        );
      } catch (error) {
        throw Error('Проверьте создана ли в Programm.controller.js функция, которую вызывает метод');
      }
    };
    const stepOne = (array, controller, ClsInitialization) => {
      for (let index = 0; index < array.length; index++) {
        const elementOne = array[index];
        stepTwo(elementOne, controller, ClsInitialization);
      }
    };
    stepOne(this.arrayButton, controllerFacade, ButtonInitialization);
    return;
  }
}
