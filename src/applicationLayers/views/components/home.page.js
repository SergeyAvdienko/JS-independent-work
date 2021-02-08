/* eslint-disable max-len */
import {HeaderHTML} from '@views/components/header.component';

export class HomePage {
  constructor() {
    this.data = () => {
      console.log('home.page.js init');
      new HeaderHTML().data();
      return;
    };
  }
}
