/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {ApplicationError} from '@views/parentClass/MyErrorClass.js';
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

const clockArray = ['08clock', '09clock', '10clock', '11clock', '12clock', '13clock', '14clock', '15clock', '16clock', '17clock'];
async function clockArrayFoo(element) {
  for (let index = 0; index < clockArray.length; index++) {
    element.idElementEffected = 'buttonClockAnimation';
    const cls = `${clockArray[index]}`;
    element.$elementAffected = document.getElementsByClassName(cls)[0],
    element.elementAffectedUID = await assignUID(element.$elementAffected, true);
    changeState(
        changeElement(
            element,
            element.$elementAffected,
        ),
        {},
    );
  }
}

export class ScheduleController {
  // Вызвана с bind(контекст класса inputSelectedDate)
  inputSelectedDate(event) {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'inputSelectedDate';
    // site__main-list
    function _inputSelectedDate0(element, event) {
      changeState(element, {data: `${new Date(event.target.value).toLocaleDateString()}`});
    }
    function _inputSelectedDate2(element) {
      clockArrayFoo(element);
    }
    try {
      _inputSelectedDate0(Object.assign({}, this), event);
      _inputSelectedDate2(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  button08clock() {
    function _button08clock0(element) {
      clockArrayFoo(element);
    }
    function _button08clock1(element) {
      element.idElementEffected = 'inputSelectedDate';
      element.$elementAffected = document.querySelector('.site__main-list');
      element.elementAffectedUID = assignUID(element.$elementAffected);
      changeState(element, {});
    }
    try {
      _button08clock0(Object.assign({}, this));
      _button08clock1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  button09clock() {
    function _button09clock0(element) {
      clockArrayFoo(element);
    }
    function _button09clock1(element) {
      element.idElementEffected = 'inputSelectedDate';
      element.$elementAffected = document.querySelector('.site__main-list');
      element.elementAffectedUID = assignUID(element.$elementAffected);
      changeState(element, {});
    }
    try {
      _button09clock0(Object.assign({}, this));
      _button09clock1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  button10clock() {
    function _button10clock0(element) {
      clockArrayFoo(element);
    }
    function _button10clock1(element) {
      element.idElementEffected = 'inputSelectedDate';
      element.$elementAffected = document.querySelector('.site__main-list');
      element.elementAffectedUID = assignUID(element.$elementAffected);
      changeState(element, {});
    }
    try {
      _button10clock0(Object.assign({}, this));
      _button10clock1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  button11clock() {
    function _button11clock0(element) {
      clockArrayFoo(element);
    }
    function _button11clock1(element) {
      element.idElementEffected = 'inputSelectedDate';
      element.$elementAffected = document.querySelector('.site__main-list');
      element.elementAffectedUID = assignUID(element.$elementAffected);
      changeState(element, {});
    }
    try {
      _button11clock0(Object.assign({}, this));
      _button11clock1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  button12clock() {
    function _button12clock0(element) {
      clockArrayFoo(element);
    }
    function _button12clock1(element) {
      element.idElementEffected = 'inputSelectedDate';
      element.$elementAffected = document.querySelector('.site__main-list');
      element.elementAffectedUID = assignUID(element.$elementAffected);
      changeState(element, {});
    }
    try {
      _button12clock0(Object.assign({}, this));
      _button12clock1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  button13clock() {
    function _button13clock0(element) {
      clockArrayFoo(element);
    }
    function _button13clock1(element) {
      element.idElementEffected = 'inputSelectedDate';
      element.$elementAffected = document.querySelector('.site__main-list');
      element.elementAffectedUID = assignUID(element.$elementAffected);
      changeState(element, {});
    }
    try {
      _button13clock0(Object.assign({}, this));
      _button13clock1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  button14clock() {
    function _button14clock0(element) {
      clockArrayFoo(element);
    }
    function _button14clock1(element) {
      element.idElementEffected = 'inputSelectedDate';
      element.$elementAffected = document.querySelector('.site__main-list');
      element.elementAffectedUID = assignUID(element.$elementAffected);
      changeState(element, {});
    }
    try {
      _button14clock0(Object.assign({}, this));
      _button14clock1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  button15clock() {
    function _button15clock0(element) {
      clockArrayFoo(element);
    }
    function _button15clock1(element) {
      element.idElementEffected = 'inputSelectedDate';
      element.$elementAffected = document.querySelector('.site__main-list');
      element.elementAffectedUID = assignUID(element.$elementAffected);
      changeState(element, {});
    }
    try {
      _button15clock0(Object.assign({}, this));
      _button15clock1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  button16clock() {
    function _button16clock0(element) {
      clockArrayFoo(element);
    }
    function _button16clock1(element) {
      element.idElementEffected = 'inputSelectedDate';
      element.$elementAffected = document.querySelector('.site__main-list');
      element.elementAffectedUID = assignUID(element.$elementAffected);
      changeState(element, {});
    }
    try {
      _button16clock0(Object.assign({}, this));
      _button16clock1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  button17clock() {
    function _button17clock0(element) {
      clockArrayFoo(element);
    }
    function _button17clock1(element) {
      element.idElementEffected = 'inputSelectedDate';
      element.$elementAffected = document.querySelector('.site__main-list');
      element.elementAffectedUID = assignUID(element.$elementAffected);
      changeState(element, {});
    }
    try {
      _button17clock0(Object.assign({}, this));
      _button17clock1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  initSchedule() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'initSchedule';
    function _initSchedule0(element) {
      changeState(element, {});
    }
    function _initSchedule1(element) {
      element.idElementEffected = 'initSchedule_1';
      changeState(element, {});
    }
    try {
      _initSchedule0(Object.assign({}, this));
      _initSchedule1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
}
