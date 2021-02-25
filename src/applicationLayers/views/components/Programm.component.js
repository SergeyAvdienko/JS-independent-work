/* eslint-disable max-len */
import {Button} from '@views/parentClass/Button.js';
import {ApplicationError} from '@views/parentClass/MyErrorClass.js';
import {ProgrammController} from '@controllers/Programm.controller.js';

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

export class Programm {
  constructor() {
    this.data = () => {
      this.init();
      return;
    };
    this.arrayButton = [
      // --- buttonFileDownload
      {
        idElementEffected: 'buttonFileDownload',
        elementAffected: 'site__main-download-default',
      },
      // --- buttonAllProgramm
      {
        idElementEffected: 'buttonAllProgramm',
        elementAffected: 'site__main-menu',
      },
      // --- buttonManual
      {
        idElementEffected: 'buttonManual',
        elementAffected: 'site__main-menu',
      },
      // --- buttonDocs
      {
        idElementEffected: 'buttonDocs',
        elementAffected: 'site__main-menu',
      },
      // --- buttonOpenSchedule
      {
        idElementEffected: 'buttonOpenSchedule',
        elementAffected: 'site__main-schedule',
      },
      // --- visualDisplayComponent ---> displayOneLesson
      {
        idElementEffected: 'displayOneLesson',
        elementAffected: 'content__block-visual-display',
      },
      // --- visualDisplayComponent ---> displayTwoLesson
      {
        idElementEffected: 'displayTwoLesson',
        elementAffected: 'content__block-visual-display',
      },
      // --- visualDisplayComponent ---> displayThreeLesson
      {
        idElementEffected: 'displayThreeLesson',
        elementAffected: 'content__block-visual-display',
      },
      // --- visualDisplayComponent ---> displayFourLesson
      {
        idElementEffected: 'displayFourLesson',
        elementAffected: 'content__block-visual-display',
      },
      // --- visualDisplayComponent ---> displayFiveLesson
      {
        idElementEffected: 'displayFiveLesson',
        elementAffected: 'content__block-visual-display',
      },
      // --- visualDisplayComponent ---> displaySixLesson
      {
        idElementEffected: 'displaySixLesson',
        elementAffected: 'content__block-visual-display',
      },
      // --- visualDisplayComponent ---> displaySevenLesson
      {
        idElementEffected: 'displaySevenLesson',
        elementAffected: 'content__block-visual-display',
      },
      // --- visualDisplayComponent ---> displayEightLesson
      {
        idElementEffected: 'displayEightLesson',
        elementAffected: 'content__block-visual-display',
      },
      // visualDisplayComponent ---> buttonLinkSetUserSkype
      {
        idElementEffected: 'buttonLinkSetUserSkype',
        elementAffected: 'site__main-menu',
      },
      // visualDisplayComponent ---> buttonLinkSetUserPathFolder
      {
        idElementEffected: 'buttonLinkSetUserPathFolder',
        elementAffected: 'site__main-menu',
      },
      // --- lessonDescription ---> buttonScrollToUp
      {
        idElementEffected: 'buttonLoginDouble',
        elementAffected: 'content__block-lesson',
      },
      // --- lessonDescription ---> buttonCloseLessonContainer
      {
        idElementEffected: 'buttonCloseLessonContainer',
        elementAffected: 'content__block-lesson',
      },
      // --- lessonDescription ---> buttonNextLessonContainer
      {
        idElementEffected: 'buttonNextLessonContainer',
        elementAffected: 'content__block-lesson',
      },
    ];
    this.innerComponents = [
      {
        idElementEffected: 'initVisualDisplay',
        elementAffected: 'content__block-visual-display',
      },
      {
        idElementEffected: 'initHelperSettings',
        elementAffected: 'content__block-helper-setting',
      },
    ];
  }
  init() {
    // Контроллер является объектом класса ProgrammFacade (паттерн Facade)
    const controllerFacade = new ProgrammController();
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
    stepOne(this.arrayButton, controllerFacade, ButtonInitialization);
    stepOne(this.innerComponents, controllerFacade, VirtualButtonInitialization);
    return;
  }
}
