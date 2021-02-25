/* eslint-disable max-len */
import {Header} from '@views/components/Header.component.js';
import {Schedule} from '@views/components/Schedule.component.js';
import {Programm} from '@views/components/Programm.component.js';
import {Report} from '@views/components/Report.component.js';
import {Manual} from '@views/components/Manual.component.js';

export class HomePage {
  constructor() {
    this.components = [Header, Schedule, Programm, Report, Manual];
    this.data = () => {
      this.components
          .forEach((Component) => {
            new Component().data();
          });
      return;
    };
  }
}
