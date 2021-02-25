/* eslint-disable max-len */
import {Button} from '@views/parentClass/Button.js';
import {ReportController} from '@controllers/Report.controller.js';
import {ApplicationError} from '@views/parentClass/MyErrorClass.js';

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

class VirtualButtonInitialization extends ButtonInitialization {
  constructor(
      idElementEffected = null,
      elementAffectedClass = null,
      indexClass = 0,
  ) {
    super(idElementEffected, elementAffectedClass, indexClass);
  }
  addEvent(foo) {
    foo();
  }
}

export class Report {
  constructor() {
    this.data = () => {
      this.init();
      return;
    };
    this.innerComponents = [
      {
        idElementEffected: 'initReport',
        elementAffected: 'site__report-progress',
      },
    ];
  }
  init() {
    // Контроллер является объектом класса HeaderFacade (паттерн Facade)
    const controllerFacade = new ReportController();
    const stepTwo = (
        elementTwo,
        controller,
        ClsInitialization,
        idElementEffected = null
    ) => {
      if (!idElementEffected) idElementEffected = elementTwo.idElementEffected;
      if (typeof elementTwo !== 'string') elementTwo = elementTwo.elementAffected;
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
        console.log(error);
        if (error.message && error.name === 'Ошибка разработчика') throw error;
        throw new ApplicationError(
            'Ошибка разработчика',
            'Проверьте создана ли в Programm.controller.js функция, которую вызывает метод'
        );
      }
    };
    const stepOne = (array, controller, ClsInitialization) => {
      for (let index = 0; index < array.length; index++) {
        stepTwo(array[index], controller, ClsInitialization);
      }
    };
    stepOne(this.innerComponents, controllerFacade, VirtualButtonInitialization);
    // stepOne(this.arrayButton, controllerFacade, ButtonInitialization);
    return;
  }
}
