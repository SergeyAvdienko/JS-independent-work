/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {Input} from '@views/parentClass/Input.js';
import {Button} from '@views/parentClass/Button.js';
import {ScheduleController} from '@controllers/Schedule.controller.js';
import {ApplicationError} from '@views/parentClass/MyErrorClass.js';

class InputInitialization extends Input {
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

export class Schedule {
  constructor() {
    this.data = () => {
      this.init();
      return;
    };
    this.arrayButton = [
      {
        idElementEffected: 'button08clock',
        elementAffected: '08clock',
      },
      {
        idElementEffected: 'button09clock',
        elementAffected: '08clock',
      },
      {
        idElementEffected: 'button10clock',
        elementAffected: '08clock',
      },
      {
        idElementEffected: 'button11clock',
        elementAffected: '08clock',
      },
      {
        idElementEffected: 'button12clock',
        elementAffected: '08clock',
      },
      {
        idElementEffected: 'button13clock',
        elementAffected: '08clock',
      },
      {
        idElementEffected: 'button14clock',
        elementAffected: '08clock',
      },
      {
        idElementEffected: 'button15clock',
        elementAffected: '08clock',
      },
      {
        idElementEffected: 'button16clock',
        elementAffected: '08clock',
      },
      {
        idElementEffected: 'button17clock',
        elementAffected: '08clock',
      },
    ];
    this.arrayInput = [
      {
        idElementEffected: 'inputSelectedDate',
        elementAffected: 'site__main-list',
      },
    ];
    this.innerComponents = [
      {
        idElementEffected: 'initSchedule',
        elementAffected: 'list__ul-container',
      },
    ];
  }
  init() {
    // Контроллер является объектом класса HeaderFacade (паттерн Facade)
    const controllerFacade = new ScheduleController();
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
    stepOne(this.arrayInput, controllerFacade, InputInitialization);
    stepOne(this.arrayButton, controllerFacade, ButtonInitialization);
    return;
  }
}
