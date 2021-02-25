/* eslint-disable max-len */
import {Header} from '@views/components/Header.component.js';
import {HeaderController} from '@controllers/Header.controller.js';
import {Schedule} from '@views/components/Schedule.component.js';
// import {ScheduleController} from '@controllers/Schedule.controller.js';
import {ScheduleFacade} from '@controllers/Schedule.facade.js';
import {Programm} from '@views/components/Programm.component.js';
import {ProgrammController} from '@controllers/Programm.controller.js';
import {Report} from '@views/components/Report.component.js';
// import {ReportController} from '@controllers/Report.controller.js';
import {ReportFacade} from '@controllers/Report.facade.js';
import {Manual} from '@views/components/Manual.component.js';
import {ManualController} from '@controllers/Manual.controller.js';

class DefauleUpdate {
  constructor() {
    // Мне не нужно трогать сам компонент
    // Перезагружаю контроллеры компонентов
    // Контроллеры компонентов по сути являются "процедурой" - набором функций,
    // которые исполняются в различных конфигурациях, меняя состояние приложения
    // в два этапа
    // Клик -> активация функции в контроллере названных по имени элемента массива - рендеринг текущего состояния
    //      -> отправка отета о проделанной работе на сервер
    this.components = {
      headerComponent: new Header(),
      headerController: new HeaderController(),
      scheduleComponent: new Schedule(),
      scheduleController: new ScheduleFacade(),
      programmComponent: new Programm(),
      programmController: new ProgrammController(),
      reportComponent: new Report(),
      reportController: new ReportFacade(),
      manualComponent: new Manual(),
      manualController: new ManualController(),
    };
    this.addListener = (arrayIdElementEffect) => {
      const ARRAY_ID = arrayIdElementEffect;
      // Идет инициализация необходимых элементов
      // за счет поиска элемента по ID
      // id выбирается из массива arrayIdElementEffect  - аргумент функции arrayIdElementEffect = [];
      console.log(ARRAY_ID);
      // arrayButton
      this.components.headerComponent.arrayButton
          .forEach((button) => {
            if (ARRAY_ID.includes(button.idElementEffected)) {
              console.log('headerComponent');
              const listener = this.components.programmController[`${ARRAY_ID[ARRAY_ID.indexOf(button.idElementEffected)]}`];
              console.log(listener);
              document.getElementById(button.idElementEffected).addEventListener(
                  'click',
                  listener,
              );
              return;
            }
          });
      // arrayButton
      this.components.programmComponent.arrayButton
          .forEach((button) => {
            if (ARRAY_ID.includes(button.idElementEffected)) {
              console.log('programmComponent-arrayButton');
              console.log(button.idElementEffected);
              console.log(ARRAY_ID);
              const listener = this.components.programmController[`${ARRAY_ID[ARRAY_ID.indexOf(button.idElementEffected)]}`];
              console.log(listener);
              console.log(document.getElementById(button.idElementEffected).onclick());
              document.getElementById(button.idElementEffected).addEventListener(
                  'click',
                  listener,
              );
              return;
            }
          });
      // innerComponents
      this.components.programmComponent.innerComponents
          .forEach((button) => {
            if (ARRAY_ID.includes(button.idElementEffected)) {
              console.log('programmComponent-innerComponents');
              document.getElementById(button.idElementEffected).addEventListener(
                  'click',
                  this.components.programmController[`${ARRAY_ID[ARRAY_ID.indexOf(button.idElementEffected)]}`],
              );
              return;
            }
          });
      // arrayButton
      this.components.reportComponent.arrayButton
          .forEach((button) => {
            if (ARRAY_ID.includes(button.idElementEffected)) {
              document.getElementById(button.idElementEffected).addEventListener(
                  'click',
                  this.components.reportController[`${ARRAY_ID[ARRAY_ID.indexOf(button.idElementEffected)]}`],
              );
              return;
            }
          });
      // arrayButton
      this.components.manualComponent.arrayButton
          .forEach((button) => {
            if (ARRAY_ID.includes(button.idElementEffected)) {
              document.getElementById(button.idElementEffected).addEventListener(
                  'click',
                  this.components.manualController[`${ARRAY_ID[ARRAY_ID.indexOf(button.idElementEffected)]}`],
              );
              return;
            }
          });
      // arrayInput
      this.components.manualComponent.arrayInput
          .forEach((button) => {
            if (ARRAY_ID.includes(button.idElementEffected)) {
              document.getElementById(button.idElementEffected).addEventListener(
                  'input',
                  this.components.manualController[`${ARRAY_ID[ARRAY_ID.indexOf(button.idElementEffected)]}`],
              );
              return;
            }
          });
    };
  }
}

let DefaultUpdate = {};

setTimeout(() => {
  DefaultUpdate = new DefauleUpdate();
}, 1000);

export class UpdateListenerModel {
  constructor() {
    this.addListener = (arrayIdElementEffect) => {
      return DefaultUpdate.addListener(arrayIdElementEffect);
    };
  }
}
