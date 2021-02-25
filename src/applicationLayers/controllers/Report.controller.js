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

export class ReportController {
  // Вызвана с bind(контекст класса ButtonReadyTask)
  buttonReadyTask() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    console.log('buttonReadyTask');
    return;
  }
  initReport() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'initReport';
    function _initReport0(element) {
      changeState(element, {});
    }
    function _initReport1(element) {
      element.idElementEffected = 'initReport_1';
      changeState(element, {});
    }
    _initReport0(Object.assign({}, this));
    _initReport1(Object.assign({}, this));
  }
}
