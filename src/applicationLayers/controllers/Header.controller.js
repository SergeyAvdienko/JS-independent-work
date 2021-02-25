/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {
  assignUID,
  changeState,
  addListener,
} from '@controllers/core/Facade.js';

function changeElement(element, $elementAffected) {
  element.$elementAffected = $elementAffected;
  element.elementAffectedUID = assignUID(element.$elementAffected);
  return element;
}

const menu = ['buttonAllProgramm', 'buttonManual', 'buttonDocs'];
const visualDispalay = ['displayOneLesson', 'displayTwoLesson', 'displayThreeLesson', 'displayFourLesson', 'displayFiveLesson',
  'displaySixLesson', 'displaySevenLesson', 'displayEightLesson'];

export class HeaderController {
  // Вызвана с bind(контекст класса buttonLogin)
  buttonLogin() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonLogin';
    function _buttonLogin0(element) {
      changeState(element, {});
      return;
    }
    function _buttonLogin1(element) {
      element.idElementEffected = 'buttonLogin_1';
      changeState(
          changeElement(
              element,
              document.querySelector('.content__block-visual-display'),
          )
      );
      return;
    }
    function _buttonLogin2(element) {
      element.idElementEffected = 'buttonLogin_2';
      changeState(
          changeElement(
              element,
              document.querySelector('.content__block-visual-display'),
          ),
          {
            one: 'default',
            two: 'default',
            three: 'default',
            four: 'default',
            five: 'default',
            six: 'default',
            seven: 'default',
            eight: 'default',
          },
      );
      return;
    }
    function _buttonLogin3(element) {
      element.idElementEffected = 'buttonLogin_3';
      changeState(
          changeElement(
              element,
              document.querySelector('.content__block-helper-setting'),
          )
      );
      return;
    }
    function _buttonLogin4(element) {
      element.idElementEffected = 'buttonLogin_4';
      changeState(
          changeElement(
              element,
              document.querySelector('.content__block-helper-setting'),
          ),
          {
            skype: 'default',
            field: 'default',
          },
      );
      return;
    }
    _buttonLogin0(Object.assign({}, this));
    _buttonLogin1(Object.assign({}, this));
    _buttonLogin2(Object.assign({}, this));
    _buttonLogin3(Object.assign({}, this));
    _buttonLogin4(Object.assign({}, this));
    return;
  }
  buttonLogotype() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonLogotype';
    // buttonLogotype ---> left__title-h1-container
    function _buttonLogotype0(element) {
      changeState(element, {string: 'YourHabit.ru'});
    }
    // buttonLogotype_1 ---> site__main-menu
    function _buttonLogotype1(element) {
      element.idElementEffected = 'buttonLogotype_1';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__main-menu'),
          ),
          {
            programm: 'menu__li menu__active',
            manual: 'menu__li',
            docs: 'menu__li',
          }
      );
      addListener([...menu, ...visualDispalay]);
    }
    // buttonLogotype_2 ---> site__report
    function _buttonLogotype2(element) {
      element.idElementEffected = 'buttonLogotype_2';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__report')
          ),
          {class: 'site__report'}
      );
    }
    // buttonLogotype_3 ---> site__main
    function _buttonLogotype3(element) {
      element.idElementEffected = 'buttonLogotype_3';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__main')
          ),
          {class: 'site__main'}
      );
    }
    // buttonLogotype_4 ---> site__manual
    function _buttonLogotype4(element) {
      element.idElementEffected = 'buttonLogotype_4';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__manual')
          ),
          {class: 'site__manual invisibile'}
      );
    }
    // buttonLogotype_5 ---> site__docs
    function _buttonLogotype5(element) {
      element.idElementEffected = 'buttonLogotype_5';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__docs')
          ),
          {class: 'site__docs invisibile'}
      );
    }
    _buttonLogotype0(Object.assign({}, this));
    _buttonLogotype1(Object.assign({}, this));
    _buttonLogotype2(Object.assign({}, this));
    _buttonLogotype3(Object.assign({}, this));
    _buttonLogotype4(Object.assign({}, this));
    _buttonLogotype5(Object.assign({}, this));
  }
}
