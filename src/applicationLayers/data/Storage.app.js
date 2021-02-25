/* eslint-disable max-len */
// service-layout
import {VDOMCreate} from '@services/virtualDOM/vdom-create.service.js';
import {Render} from '@services/DOM/Render.service.js';

class Storage {
  constructor() {
    this.state = {
      user: {
        email: null,
        skype: null,
        field: null,
        today: `${new Date().toLocaleDateString()}`,
        progress: {
          one: 'error',
          two: 'error',
          three: 'error',
          four: 'error',
          five: 'error',
          six: 'error',
          seven: 'error',
          eight: 'error',
        },
        helper: {
          skype: 'error',
          field: 'error',
        },
        description: {
          lesson: 'one',
          lessonClass: 'error',
          type: 'errorLogin',
        },
        lookingNow: {
          progress: true,
          helper: true,
          description: false,
        },
        schedule: {
          clock08: 'error',
          clock09: 'error',
          clock10: 'error',
          clock11: 'error',
          clock12: 'error',
          clock13: 'error',
          clock14: 'error',
          clock15: 'error',
          clock16: 'error',
          clock17: 'error',
        },
        trackers: [
          {
            title: 'Работа с CRM-системой',
            ul: [
              'success',
              'danger',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
            ],
          },
          {
            title: 'Работа с сайтом',
            ul: [
              'success',
              'success',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
              'default',
            ],
          },
        ],
      },
      // Help state for animation user actions
      virtualDOM: new VDOMCreate().createVDom(document.getElementById('app')),
      // header component
      buttonLogin: null,
      logotypeTitle: null,
      // programm component
      buttonFileDownload: null,
      menu: null,
      initVisualDisplay: null,
      initHelperSettings: null,
      initLessonDescription: null,
      // home page shows or hides sections
      section: null,
      sectionSiteReport: null,
      sectionSiteMain: null,
      sectionSiteManual: null,
      sectionSiteDocs: null,
      buttonOpenSchedule: null,
      // manual component ---> default settings content
      buttonClickMenuOn: null,
      inputSkypeLogin: null,
      buttonSkypeLogin: null,
      inputPathGoogleField: null,
      buttonSetPathGoogleField: null,
      // schedule component ---> inputSelectedDate
      inputSelectedDate: null,
      initSchedule: null,
      // report component ---> initReport
      initReport: null,
    };
  }
  _userEmail(email) {
    this.state.user.email = email;
  }
  _userSkype(skype) {
    this.state.user.skype = skype;
  }
  _userField(field) {
    this.state.user.field = field;
  }
  _userProgress(progress) {
    this.state.progress = progress;
  }
  _userHelper(helper) {
    this.state.user.helper = helper;
  }
  _userDescription(description) {
    this.state.user.description = description;
  }
  _userLookingNow(lookingNow) {
    this.state.user.lookingNow = lookingNow;
  }
  _userTrackers(trackers) {
    this.state.user.trackers = trackers;
  }
  _reloadVirtualDOM() {
    this.state.virtualDOM = new VDOMCreate().createVDom(document.getElementById('app'));
  }
  _buttonLogin(element) {
    this.state.buttonLogin = element;
  }
  _logotypeTitle(element) {
    this.state.logotypeTitle = element;
  }
  _buttonFileDownload(element) {
    this.state.buttonFileDownload = element;
  }
  _menu(element) {
    this.state.menu = element;
  }
  _section(element) {
    this.state.section = element;
  }
  _sectionSiteReport(element) {
    this.state.sectionSiteReport = element;
  }
  _sectionSiteMain(element) {
    this.state.sectionSiteMain = element;
  }
  _sectionSiteManual(element) {
    this.state.sectionSiteManual = element;
  }
  _sectionSiteDocs(element) {
    this.state.sectionSiteDocs = element;
  }
  _buttonOpenSchedule(element) {
    this.state.buttonOpenSchedule = element;
  }
  _inputSkypeLogin(element) {
    this.state.inputSkypeLogin = element;
  }
  _buttonSkypeLogin(element) {
    this.state.buttonSkypeLogin = element;
  }
  _inputPathGoogleField(element) {
    this.state.inputPathGoogleField = element;
  }
  _buttonSetPathGoogleField(element) {
    this.state.buttonSetPathGoogleField = element;
  }
  _buttonClickMenuOn(element) {
    this.state.buttonClickMenuOn = element;
  }
  _initVisualDisplay(element) {
    this.state.initVisualDisplay = element;
  }
  _initHelperSettings(element) {
    this.state.initHelperSettings = element;
  }
  _initLessonDescription(element) {
    this.state.initLessonDescription = element;
  }
  _inputSelectedDate(element) {
    this.state.inputSelectedDate = element;
  }
  _initSchedule(element) {
    this.state.initSchedule = element;
  }
  _initReport(element) {
    this.state.initReport = element;
  }
}

const storage = new Storage();

export const StorageApp = {
  virtualDOM: storage.state.virtualDOM,
  user: storage.state.user,
};

// _reloadVirtualDOM
const mutationVirtualDOM = () => {
  storage._reloadVirtualDOM();
};
export const mutationVirtualDOMProxy = new Proxy(mutationVirtualDOM, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    StorageApp.virtualDOM = storage.state.virtualDOM;
    return;
  },
});

// _buttonLogin
const mutationButtonLogin = (element) => {
  storage._buttonLogin(element);
};
export const mutationButtonLoginProxy = new Proxy(mutationButtonLogin, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    new Render(storage.state.buttonLogin, true).start();
    return;
  },
});

// _logotypeTitle
const mutationLogotypeTitle = (element) => {
  storage._logotypeTitle(element);
};
export const mutationLogotypeTitleProxy = new Proxy(mutationLogotypeTitle, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    new Render(storage.state.logotypeTitle, true).start();
    return;
  },
});

// _buttonFileDownload
// Параметр childrenRender отвечает за настройку правла в Render.service.js
const mutationButtonFileDownload = (element) => {
  storage._buttonFileDownload(element);
};
export const mutationButtonFileDownloadProxy = new Proxy(mutationButtonFileDownload, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    let childrenRender = args[1];
    if (args[1] === undefined) childrenRender = true;
    new Render(storage.state.buttonFileDownload, childrenRender).start();
    return;
  },
});

// _menu
const mutationMenu = (element) => {
  storage._menu(element);
};
export const mutationMenuProxy = new Proxy(mutationMenu, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    new Render(storage.state.menu, true).start();
    return;
  },
});

// _section
const mutationSection = (element) => {
  storage._section(element);
};
export const mutationSectionProxy = new Proxy(mutationSection, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    let childrenRender = args[1];
    if (args[1] === undefined) childrenRender = true;
    new Render(storage.state.section, childrenRender).start();
    return;
  },
});

// _initVisualDisplay
const mutationInitVisualDisplay = (element) => {
  storage._initVisualDisplay(element);
};
export const mutationInitVisualDisplayProxy = new Proxy(mutationInitVisualDisplay, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    if (args[1] && args[1].one && StorageApp.user.lookingNow.progress) StorageApp.user.progress = args[1];
    new Render(storage.state.initVisualDisplay, true).start();
    return;
  },
});

// _initHelperSettings
const mutationInitHelperSettings = (element) => {
  storage._initHelperSettings(element);
};
export const mutationInitHelperSettingsProxy = new Proxy(mutationInitHelperSettings, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    if (args[1] && args[1].skype && StorageApp.user.lookingNow.helper) StorageApp.user.helper = args[1];
    new Render(storage.state.initHelperSettings, true).start();
    return;
  },
});

// _initLessonDescription
const mutationInitLessonDescription = (element) => {
  storage._initLessonDescription(element);
};
export const mutationInitLessonDescriptionProxy = new Proxy(mutationInitLessonDescription, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    StorageApp.user.lookingNow.helper = false;
    StorageApp.user.lookingNow.progress = false;
    StorageApp.user.lookingNow.description = true;
    if (args[1] && args[1].lesson && StorageApp.user.lookingNow.description) {
      StorageApp.user.description = args[1];
    }
    new Render(storage.state.initLessonDescription, true).start();
    return;
  },
});

// _sectionSiteReport
const mutationSectionSiteReport = (element) => {
  storage._sectionSiteReport(element);
};
export const mutationSectionSiteReportProxy = new Proxy(mutationSectionSiteReport, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    let childrenRender = args[1];
    if (args[1] === undefined) childrenRender = true;
    new Render(storage.state.sectionSiteReport, childrenRender).start();
    return;
  },
});

// _sectionSiteMain
const mutationSectionSiteMain = (element) => {
  storage._sectionSiteMain(element);
};
export const mutationSectionSiteMainProxy = new Proxy(mutationSectionSiteMain, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    let childrenRender = args[1];
    if (args[1] === undefined) childrenRender = true;
    new Render(storage.state.sectionSiteMain, childrenRender).start();
    return;
  },
});

// _sectionSiteManual
const mutationSectionSiteManual = (element) => {
  storage._sectionSiteManual(element);
};
export const mutationSectionSiteManualProxy = new Proxy(mutationSectionSiteManual, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    let childrenRender = args[1];
    if (args[1] === undefined) childrenRender = true;
    new Render(storage.state.sectionSiteManual, childrenRender).start();
    return;
  },
});

// _sectionSiteDocs
const mutationSectionSiteDocs = (element) => {
  storage._sectionSiteDocs(element);
};
export const mutationSectionSiteDocsProxy = new Proxy(mutationSectionSiteDocs, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    let childrenRender = args[1];
    if (args[1] === undefined) childrenRender = true;
    new Render(storage.state.sectionSiteDocs, childrenRender).start();
    return;
  },
});

// _buttonOpenSchedule
const mutationButtonOpenSchedule = (element) => {
  storage._buttonOpenSchedule(element);
};
export const mutationButtonOpenScheduleProxy = new Proxy(mutationButtonOpenSchedule, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    let childrenRender = args[1];
    if (args[1] === undefined) childrenRender = true;
    new Render(storage.state.buttonOpenSchedule, childrenRender).start();
    return;
  },
});

// _buttonClickMenuOn
const mutationButtonClickMenuOn = (element) => {
  storage._buttonClickMenuOn(element);
};
export const mutationButtonClickMenuOnProxy = new Proxy(mutationButtonClickMenuOn, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    let childrenRender = args[1];
    if (args[1] === undefined) childrenRender = true;
    new Render(storage.state.buttonClickMenuOn, childrenRender).start();
    return;
  },
});

// _inputSkypeLogin
const mutationInputSkypeLogin = (element) => {
  storage._inputSkypeLogin(element);
};
export const mutationInputSkypeLoginProxy = new Proxy(mutationInputSkypeLogin, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    let childrenRender = args[1];
    if (args[1] === undefined) childrenRender = true;
    new Render(storage.state.inputSkypeLogin, childrenRender).start();
    return;
  },
});

// _buttonSkypeLogin
const mutationButtonSkypeLogin = (element) => {
  storage._buttonSkypeLogin(element);
};
export const mutationButtonSkypeLoginProxy = new Proxy(mutationButtonSkypeLogin, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    new Render(storage.state.buttonSkypeLogin, true).start();
    return;
  },
});

// _inputPathGoogleField
const mutationInputPathGoogleField = (element) => {
  storage._inputPathGoogleField(element);
};
export const mutationInputPathGoogleFieldProxy = new Proxy(mutationInputPathGoogleField, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    let childrenRender = args[1];
    if (args[1] === undefined) childrenRender = true;
    new Render(storage.state.inputPathGoogleField, childrenRender).start();
    return;
  },
});

// _buttonSetPathGoogleField
const mutationButtonSetPathGoogleField = (element) => {
  storage._buttonSetPathGoogleField(element);
};
export const mutationButtonSetPathGoogleFieldProxy = new Proxy(mutationButtonSetPathGoogleField, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    new Render(storage.state.buttonSetPathGoogleField, true).start();
    return;
  },
});

// _inputSelectedDate
const mutationInputSelectedDate = (element) => {
  storage._inputSelectedDate(element);
};
export const mutationInputSelectedDateProxy = new Proxy(mutationInputSelectedDate, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    new Render(storage.state.inputSelectedDate, true).start();
    return;
  },
});

// _initSchedule
const mutationInitSchedule = (element) => {
  storage._initSchedule(element);
};
export const mutationInitScheduleProxy = new Proxy(mutationInitSchedule, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    new Render(storage.state.initSchedule, true).start();
    return;
  },
});

// _initReport
const mutationInitReport = (element) => {
  storage._initReport(element);
};
export const mutationInitReportProxy = new Proxy(mutationInitReport, {
  apply(target, thisArg, args) {
    target.apply(thisArg, args);
    new Render(storage.state.initReport, true).start();
    return;
  },
});
