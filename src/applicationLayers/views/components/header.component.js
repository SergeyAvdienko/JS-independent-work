import {Button} from '@views/parentClass/Button.js';
import {HeaderFacade} from '@controllers/header.facade';

class ButtonLogin extends Button {
  constructor(
      idElementEffected = null,
      elementAffectedClass = null,
      indexClass = 0,
  ) {
    super(idElementEffected);
    this.$elementAffected = document.getElementsByClassName(
        elementAffectedClass
    )[indexClass];
    this.$elementAffectedUID = 0;
  }
}

class ButtonLogotype extends Button {
  constructor(
      idElementEffected = null,
      elementAffectedClass = null,
      indexClass = 0,
  ) {
    super(idElementEffected);
    this.$elementAffected = document.getElementsByClassName(
        elementAffectedClass
    )[indexClass];
    this.$elementAffectedUID = 0;
  }
}

export class HeaderHTML {
  constructor() {
    this.data = () => {
      console.log('header.component.js init');
      initButtonLogin();
      initButtonLogotype();
      return;
    };
  }
}

function initButtonLogin() {
  // Контроллер является объектом класса HeaderFacade (паттерн Facade)
  const controllerButtonLogin = new HeaderFacade();
  const buttonLogin = new ButtonLogin(
      'buttonLogin',
      'right__column-default'
  );
  // В контроллер HeaderFacade наследуется контекст класса ButtonLogin
  buttonLogin.addEvent(controllerButtonLogin.buttonLoginEvent
      .bind(buttonLogin)
  );
  return;
}

function initButtonLogotype() {
  // Контроллер является объектом класса HeaderFacade (паттерн Facade)
  const controllerButtonLogotype = new HeaderFacade();
  const buttonLogotype = new ButtonLogotype(
      'buttonLogotype',
      'left__title-h1-container'
  );
  console.log(buttonLogotype);
  // В контроллер HeaderFacade наследуется контекст класса ButtonLogotype
  buttonLogotype.addEvent(controllerButtonLogotype.buttonLogotypeEvent
      .bind(buttonLogotype)
  );
  return;
}

