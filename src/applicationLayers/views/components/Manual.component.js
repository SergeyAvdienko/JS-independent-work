/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {Component} from '@views/parentClass/Component.js';
import {Button} from '@views/parentClass/Button.js';
import {Input} from '@views/parentClass/Input.js';
import {ManualController} from '@controllers/Manual.controller.js';

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
  addEvent(foo) {
    this.$elementEffected?.addEventListener( 'input', foo );
  }
}

export class ManualGenerator extends Component {
  constructor(components = []) {
    super('div', {class: 'site__manual-columns'}, []);
    this.components = components || [];
    this.node = {
      parent: this.el,
      children: [...this.components],
    };
  }
  generatorComponent() {
    this.node.parent.children = this.node.children;
    return this.node.parent;
  }
}

export class Manual {
  constructor() {
    this.data = () => {
      this.init();
      return;
    };
    this.arrayButton = [
      // --- buttonClickBackHomePage
      {
        idElementEffected: 'buttonClickBackHomePage',
        elementAffected: 'left__title-h1-container',
      },
      // --- buttonClickMenuOn
      {
        idElementEffected: 'buttonClickMenuOn',
        elementAffected: 'site__manual-column-left',
      },
      // --- menuIntro
      {
        idElementEffected: 'menuIntro',
        elementAffected: 'site__manual',
      },
      // --- contentIntro ---> buttonLinkLessonBlock
      {
        idElementEffected: 'buttonLinkLessonBlock',
        elementAffected: 'site__manual',
      },
      // --- contentIntro ---> buttonLinkDocs
      {
        idElementEffected: 'buttonLinkDocs',
        elementAffected: 'site__manual',
      },
      // --- contentIntro ---> buttonLinkDefaultSettings
      {
        idElementEffected: 'buttonLinkDefaultSettings',
        elementAffected: 'site__manual',
      },
      // --- contentIntro ---> buttonLinkResume
      {
        idElementEffected: 'buttonLinkResume',
        elementAffected: 'link to go to another site...',
      },
      // --- menuDefaultSettings
      {
        idElementEffected: 'menuDefaultSettings',
        elementAffected: 'site__manual',
      },
      // --- contentDefaultSettings ---> buttonLinkCreateGoogleAccount
      {
        idElementEffected: 'buttonLinkCreateGoogleAccount',
        elementAffected: 'link to go to another site...',
      },
      // --- contentDefaultSettings ---> buttonSetSkypeLogin
      {
        idElementEffected: 'buttonSetSkypeLogin',
        elementAffected: 'form-container-skype',
      },
      // --- contentDefaultSettings ---> buttonLinkSkypeSettings
      {
        idElementEffected: 'buttonLinkSkypeSettings',
        elementAffected: 'link to go to another site...',
      },
      // --- contentDefaultSettings ---> buttonSetPathGoogleField
      {
        idElementEffected: 'buttonSetPathGoogleField',
        elementAffected: 'form-container-google-field',
      },
      // --- contentDefaultSettings ---> buttonLinkCreateFolderInGoogleDesk
      {
        idElementEffected: 'buttonLinkCreateFolderInGoogleDesk',
        elementAffected: 'link to go to another site...',
      },
      // --- contendDefaultSettings ---> buttonLinkGetFolderInGoogleDesk
      {
        idElementEffected: 'buttonLinkGetFolderInGoogleDesk',
        elementAffected: 'link to go to another site...',
      },
      // --- menuDemoLesson
      {
        idElementEffected: 'menuDemoLesson',
        elementAffected: 'site__manual',
      },
      // --- contentDemoLesson ---> buttonLinkCreateLearningStatus
      {
        idElementEffected: 'buttonLinkCreateLearningStatus',
        elementAffected: 'finish soon',
      },
      // --- menuOneLesson
      {
        idElementEffected: 'menuOneLesson',
        elementAffected: 'site__manual',
      },
      // --- menuTwoLesson
      {
        idElementEffected: 'menuTwoLesson',
        elementAffected: 'site__manual',
      },
      // --- menuThreeLesson
      {
        idElementEffected: 'menuThreeLesson',
        elementAffected: 'site__manual',
      },
      // --- menuFourLesson
      {
        idElementEffected: 'menuFourLesson',
        elementAffected: 'site__manual',
      },
      // --- menuFiveLesson
      {
        idElementEffected: 'menuFiveLesson',
        elementAffected: 'site__manual',
      },
      // --- menuSixLesson
      {
        idElementEffected: 'menuSixLesson',
        elementAffected: 'site__manual',
      },
      // --- menuSevenLesson
      {
        idElementEffected: 'menuSevenLesson',
        elementAffected: 'site__manual',
      },
      // --- menuEightLesson
      {
        idElementEffected: 'menuEightLesson',
        elementAffected: 'site__manual',
      },
    ];
    this.arrayInput = [
      {
        idElementEffected: 'inputSkypeLogin',
        elementAffected: 'skype',
      },
      {
        idElementEffected: 'inputPathGoogleField',
        elementAffected: 'google-field',
      },
    ];
  }
  init() {
    // Контроллер является объектом класса HeaderFacade (паттерн Facade)
    const controllerFacade = new ManualController();
    const stepTwo = (
        elementTwo,
        controller,
        ClsInitialization,
        idElementEffected = null
    ) => {
      if (!idElementEffected) idElementEffected = elementTwo.idElementEffected;
      if (typeof elementTwo !== 'string') elementTwo = elementTwo.elementAffected;
      const elementInitialization = new ClsInitialization(idElementEffected, elementTwo);
      // В контроллер HeaderFacade наследуется контекст
      // класса ClsInitialization
      try {
        elementInitialization.addEvent(
            controller[`${elementInitialization.idElementEffected}`]
                .bind(elementInitialization)
        );
      } catch (error) {
        throw Error('Проверьте создана ли в Manual.controller.js функция, которую вызывает метод');
      }
    };
    const stepOne = (array, controller, ClsInitialization) => {
      for (let index = 0; index < array.length; index++) {
        stepTwo(array[index], controller, ClsInitialization);
      }
    };
    stepOne(this.arrayButton, controllerFacade, ButtonInitialization);
    stepOne(this.arrayInput, controllerFacade, InputInitialization);
    return;
  }
}
