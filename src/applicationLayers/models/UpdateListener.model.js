import {Header} from '@views/components/Header.component.js';
import {Schedule} from '@views/components/Schedule.component.js';
import {Programm} from '@views/components/Programm.component.js';
import {Report} from '@views/components/Report.component.js';
import {Manual} from '@views/components/Manual.component.js';

export class UpdateListenerModel {
  constructor() {
    this.addListener = (arrayIdElementEffect) => {
      const programmComponent = new Programm();
      const scheduleComponent = new Schedule();
      const headerComponent = new Header();
      const reportComponent = new Report();
      const manualComponent = new Manual();
      programmComponent.arrayButton = programmComponent.arrayButton
          .filter((button) => {
            if (arrayIdElementEffect
                .includes(button.idElementEffected)) {
              return button;
            }
          });
      scheduleComponent.arrayButton = scheduleComponent.arrayButton
          .filter((button) => {
            if (arrayIdElementEffect
                .includes(button.idElementEffected)) {
              return button;
            }
          });
      scheduleComponent.arrayInput = scheduleComponent.arrayInput
          .filter((input) => {
            if (arrayIdElementEffect
                .includes(input.idElementEffected)) {
              return input;
            }
          });
      headerComponent.arrayButton = scheduleComponent.arrayButton
          .filter((button) => {
            if (arrayIdElementEffect
                .includes(button.idElementEffected)) {
              return button;
            }
          });
      reportComponent.arrayButton = reportComponent.arrayButton
          .filter((button) => {
            if (arrayIdElementEffect
                .includes(button.idElementEffected)) {
              return button;
            }
          });
      manualComponent.arrayButton = manualComponent.arrayButton
          .filter((button) => {
            if (arrayIdElementEffect
                .includes(button.idElementEffected)) {
              return button;
            }
          });
      if (programmComponent.arrayButton.length) programmComponent.data();
      if (scheduleComponent.arrayButton.length||
                scheduleComponent.arrayInput.length) scheduleComponent.data();
      if (headerComponent.arrayButton.length) headerComponent.data();
      if (reportComponent.arrayButton.length) reportComponent.data();
      if (manualComponent.arrayButton.length ||
                manualComponent.arrayInput.length) manualComponent.data();
      return;
    };
  }
}
