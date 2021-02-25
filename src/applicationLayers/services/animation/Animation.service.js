/* eslint-disable no-undef */
/* eslint-disable max-len */
import {StorageApp} from '@data/Storage.app.js';
import {UserState} from '@models/UserState.model.js';
import {ManualMenuComponentFactory} from '@views/components/manual-components/ManualMenu.component.js';
import {ManualContentComponentFactory} from '@views/components/manual-components/ManualContent.component.js';
import {ManualGenerator} from '@views/components/Manual.component.js';
import {VisualDisplayComponent} from '@views/components/programm-components/VisualDisplay.component.js';
import {HelperSettingsComponent} from '@views/components/programm-components/HelperSettings.component.js';
import {LessonDescriptionComponent} from '@views/components/programm-components/LessonDescription.component.js';
import {ClockComponent} from '@views/components/schedule-components/ClockButton.component.js';
import {TrackComponent} from '@views/components/track-components/Track.component.js';

const commandCollection = {
  // --- Header.component ---> buttonLogin
  buttonLogin: spinnerDefault,
  buttonLogin_1: updateContentBlockVisualDisplayContainerMiddleware,
  buttonLogin_2: updateContentBlockVisualDisplayContainer,
  buttonLogin_3: updateContentBlockHelperSettingsContainerMiddleware,
  buttonLogin_4: updateContentBlockHelperSettingsContainer,
  // --- Header.component ---> buttonLogotype
  buttonLogotype: logolypeTitle,
  buttonLogotype_1: menuClick,
  buttonLogotype_2: sectionAddClass,
  buttonLogotype_3: sectionAddClass,
  buttonLogotype_4: sectionAddClass,
  buttonLogotype_5: sectionAddClass,


  // --- Programm.component ---> buttonFileDownload
  buttonFileDownload: spinnerIcon,
  buttonFileDownload_1: buttonIconMiddleware,
  buttonFileDownload_2: buttonIcon,
  // --- Programm.component ---> buttonAllProgramm
  buttonAllProgramm: menuClick,
  buttonAllProgramm_1: logolypeTitle,
  // --- Programm.component ---> buttonManual
  buttonManual: menuClick,
  buttonManual_1: logolypeTitle,
  buttonManual_2: sectionAddClass,
  buttonManual_3: sectionAddClass,
  buttonManual_4: sectionAddClass,
  buttonManual_5: updateSectionManualMiddleware,
  buttonManual_6: updateSectionManual,
  // --- Programm.component ---> buttonDocs
  buttonDocs: menuClick,
  buttonDocs_1: logolypeTitle,
  buttonDocs_2: sectionAddClass,
  buttonDocs_3: sectionAddClass,
  buttonDocs_4: sectionAddClass,
  // --- Programm.component ---> buttonOpenSchedule
  buttonOpenSchedule: sectionAddClass,
  buttonOpenSchedule_1: sectionAddClass,
  // --- Programm.component ---> initVisualDisplay
  initVisualDisplay: updateContentBlockVisualDisplayContainerMiddleware,
  initVisualDisplay_1: updateContentBlockVisualDisplayContainer,
  // --- Programm.component ---> initHelperSettings
  initHelperSettings: updateContentBlockHelperSettingsContainerMiddleware,
  initHelperSettings_1: updateContentBlockHelperSettingsContainer,
  // --- Programm.component ---> initHelperSettings
  displayOneLesson: updateContentBlockVisualDisplayContainerMiddleware,
  displayOneLesson_1: updateContentBlockHelperSettingsContainerMiddleware,
  displayOneLesson_2: updateContentBlockLessonDescriptionContainerMiddleware,
  displayOneLesson_3: updateContentBlockLessonDescriptionContainer,
  // --- Programm.component ---> buttonLinkSetUserSkype
  buttonLinkSetUserSkype: menuClick,
  buttonLinkSetUserSkype_1: logolypeTitle,
  buttonLinkSetUserSkype_2: sectionAddClass,
  buttonLinkSetUserSkype_3: sectionAddClass,
  buttonLinkSetUserSkype_4: sectionAddClass,
  buttonLinkSetUserSkype_5: updateSectionManualMiddleware,
  buttonLinkSetUserSkype_6: updateSectionManual,
  // --- Programm.component ---> buttonLoginDouble
  buttonLoginDouble: updateContentBlockLessonDescriptionContainerMiddleware,
  buttonLoginDouble_1: updateContentBlockLessonDescriptionContainer,
  buttonLoginDouble_2: spinnerDefault,
  // --- Programm.component ---> buttonCloseLessonContainer
  buttonCloseLessonContainer: updateContentBlockVisualDisplayContainerMiddleware,
  buttonNextLessonContainer_1: updateContentBlockLessonDescriptionContainerMiddleware,
  buttonNextLessonContainer_2: updateContentBlockLessonDescriptionContainer,

  // --- Manual.component ---> buttonClickMenuOn
  buttonClickMenuOn: buttonClickMenuOn,
  buttonClickMenuOn_1: buttonClickMenuOn,
  // --- Manual.component ---> menuIntro
  menuIntro: updateSectionManualMiddleware,
  menuIntro_1: updateSectionManual,
  menuIntro_2: logolypeTitle,
  // --- Manual.component ---> contentIntro ---> buttonLinkLessonBlock
  buttonLinkLessonBlock: updateSectionManualMiddleware,
  buttonLinkLessonBlock_1: updateSectionManual,
  buttonLinkLessonBlock_2: logolypeTitle,
  // --- Manual.component ---> contentIntro ---> buttonLinkDocs
  buttonLinkDocs: sectionAddClass,
  buttonLinkDocs_1: logolypeTitle,
  buttonLinkDocs_2: sectionAddClass,
  // --- Manual.component ---> contentIntro ---> buttonLinkDefaultSettings
  buttonLinkDefaultSettings: updateSectionManualMiddleware,
  buttonLinkDefaultSettings_1: updateSectionManual,
  buttonLinkDefaultSettings_2: logolypeTitle,
  // --- Manual.component ---> menuDefaultSettings
  menuDefaultSettings: updateSectionManualMiddleware,
  menuDefaultSettings_1: updateSectionManual,
  menuDefaultSettings_2: logolypeTitle,
  // --- Manual.component ---> contentDefaultSettings ---> inputSkypeLogin
  inputSkypeLogin_1: inputSkypeLogin,
  inputSkypeLogin_2: inputSkypeLoginAddRemoveButton,
  // --- Manual.component ---> contentDefaultSettings ---> buttonSetSkypeLogin
  buttonSetSkypeLogin: spinnerDefault,
  // --- contentDefaultSettings ---> inputPathGoogleField
  inputPathGoogleField_1: inputGoogleFieldLogin,
  inputPathGoogleField_2: inputGoogleFieldAddRemoveButton,
  // --- Manual.component ---> contentDefaultSettings ---> buttonSetPathGoogleField
  buttonSetPathGoogleField: spinnerDefault,
  // --- Manual.component ---> menuDemoLesson
  menuDemoLesson: updateSectionManualMiddleware,
  menuDemoLesson_1: updateSectionManual,
  menuDemoLesson_2: logolypeTitle,
  // --- Manual.component ---> menuOneLesson
  menuOneLesson: updateSectionManualMiddleware,
  menuOneLesson_1: updateSectionManual,
  menuOneLesson_2: logolypeTitle,
  // --- Manual.component ---> menuTwoLesson
  menuTwoLesson: updateSectionManualMiddleware,
  menuTwoLesson_1: updateSectionManual,
  menuTwoLesson_2: logolypeTitle,
  // --- Manual.component ---> menuThreeLesson
  menuThreeLesson: updateSectionManualMiddleware,
  menuThreeLesson_1: updateSectionManual,
  menuThreeLesson_2: logolypeTitle,
  // --- Manual.component ---> menuFourLesson
  menuFourLesson: updateSectionManualMiddleware,
  menuFourLesson_1: updateSectionManual,
  menuFourLesson_2: logolypeTitle,
  // --- Manual.component ---> menuFiveLesson
  menuFiveLesson: updateSectionManualMiddleware,
  menuFiveLesson_1: updateSectionManual,
  menuFiveLesson_2: logolypeTitle,
  // --- Manual.component ---> menuSixLesson
  menuSixLesson: updateSectionManualMiddleware,
  menuSixLesson_1: updateSectionManual,
  menuSixLesson_2: logolypeTitle,
  // --- Manual.component ---> menuSevenLesson
  menuSevenLesson: updateSectionManualMiddleware,
  menuSevenLesson_1: updateSectionManual,
  menuSevenLesson_2: logolypeTitle,
  // --- Manual.component ---> menuEightLesson
  menuEightLesson: updateSectionManualMiddleware,
  menuEightLesson_1: updateSectionManual,
  menuEightLesson_2: logolypeTitle,
  // --- Manual.component ---> buttonClickBackHomePage
  buttonClickBackHomePage: logolypeTitle,
  buttonClickBackHomePage_1: menuClick,
  buttonClickBackHomePage_2: sectionAddClass,
  buttonClickBackHomePage_3: sectionAddClass,
  buttonClickBackHomePage_4: sectionAddClass,

  // --- Schedule.component ---> inputSelectedDate
  inputSelectedDate: inputSelectedDate,
  buttonClockAnitation: spinnerDefault,
  // --- Schedule.component ---> initSchedule
  initSchedule: initScheduleMiddleware,
  initSchedule_1: initSchedule,
  // --- Schedule.component ---> buttonClockAnimation
  buttonClockAnimation: spinnerDefault,
  // --- Report.component ---> initReport
  initReport: initReportMiddleware,
  initReport_1: initReport,
};

export class AnimationElement {
  constructor(data, options = {}) {
    this.data = data;
    this.command = commandCollection;
    this.options = options;
  }
  newElement() {
    return this.command[`${this.data.idElementEffected}`](this.options);
  }
}

function spinnerDefault(options = {}) {
  return {
    parent: {tag: 'div', props: [{class: 'spinner'}], children: []},
    children: [
      {tag: 'div', props: [{class: 'bounce1'}], children: []},
      {tag: 'div', props: [{class: 'bounce2'}], children: []},
      {tag: 'div', props: [{class: 'bounce3'}], children: []},
    ],
  };
}

function spinnerIcon(options = {}) {
  return {
    parent: {tag: 'div', props: {class: 'small-spinner'}, children: []},
    children: [
      {tag: 'i', props: {class: 'material-icons'}, children: [options.icon]},
    ],
  };
}

function logolypeTitle(options = {}) {
  const letters = options.string.split('');
  return {
    parent: {tag: 'ul', props: [{class: 'left__h1 title-h1 title-animation'}], children: []},
    children: [
      {tag: 'li', props: [{class: 'left__h1-1'}], children: [letters[0] || '']},
      {tag: 'li', props: [{class: 'left__h1-2'}], children: [letters[1] || '']},
      {tag: 'li', props: [{class: 'left__h1-3'}], children: [letters[2] || '']},
      {tag: 'li', props: [{class: 'left__h1-4'}], children: [letters[3] || '']},
      {tag: 'li', props: [{class: 'left__h1-5'}], children: [letters[4] || '']},
      {tag: 'li', props: [{class: 'left__h1-6'}], children: [letters[5] || '']},
      {tag: 'li', props: [{class: 'left__h1-7'}], children: [letters[6] || '']},
      {tag: 'li', props: [{class: 'left__h1-8'}], children: [letters[7] || '']},
      {tag: 'li', props: [{class: 'left__h1-9'}], children: [letters[8] || '']},
      {tag: 'li', props: [{class: 'left__h1-10'}], children: [letters[9] || '']},
      {tag: 'li', props: [{class: 'left__h1-11'}], children: [letters[10] || '']},
      {tag: 'li', props: [{class: 'left__h1-12'}], children: [letters[11] || '']},
    ],
  };
}

function buttonIconMiddleware(options = {}) {
  return {
    parent: {tag: 'div', props: {class: options.class}, children: []},
  };
}
function buttonIcon(options = {}) {
  return {
    parent: {tag: 'button', props: {class: options.class, id: options.id}, children: []},
    children: [
      {tag: 'i', props: {class: 'material-icons'}, children: [options.icon]},
    ],
  };
}

function menuClick(options = {}) {
  return {
    parent: {tag: 'ul', props: {class: 'menu__ul'}, children: []},
    children: [
      {tag: 'li', props: {class: options.programm, id: 'buttonAllProgramm'}, children: ['Программа']},
      {tag: 'li', props: {class: options.manual, id: 'buttonManual'}, children: ['Описание занятий']},
      {tag: 'li', props: {class: options.docs, id: 'buttonDocs'}, children: ['Техническая документация']},
    ],
  };
}

function sectionAddClass(options = {}) {
  return {
    parent: {tag: 'section', props: {class: options.class}, children: []},
  };
}

function buttonClickMenuOn(options = {}) {
  return {
    parent: {tag: 'div', props: {class: options.class}, children: []},
  };
}

function inputSkypeLogin(options = {}) {
  return {
    parent: {tag: 'span', props: {class: options.class}, children: ['Логин в Skype']},
  };
}

function inputSkypeLoginAddRemoveButton(options = {}) {
  if (options.statusValidate) {
    return {
      parent: {tag: 'div', props: {class: 'form-container__button-default'}, children: []},
      children: [
        {tag: 'button', props: {id: 'buttonSetSkypeLogin'}, children: ['Сохранить']},
      ],
    };
  } else {
    return {
      parent: {tag: 'div', props: {class: 'form-container__button-default'}, children: []},
    };
  }
}

function inputGoogleFieldLogin(options = {}) {
  return {
    parent: {tag: 'span', props: {class: options.class}, children: ['Ссылка на папку']},
  };
}

function inputGoogleFieldAddRemoveButton(options = {}) {
  if (options.statusValidate) {
    return {
      parent: {tag: 'div', props: {class: 'form-container__button-default'}, children: []},
      children: [
        {tag: 'button', props: {id: 'buttonSetPathGoogleField'}, children: ['Сохранить']},
      ],
    };
  } else {
    return {
      parent: {tag: 'div', props: {class: 'form-container__button-default'}, children: []},
    };
  }
}

function updateSectionManualMiddleware(options = {}) {
  return {
    parent: {tag: 'div', props: {class: 'site__manual-columns'}, children: []},
  };
}

function updateSectionManual(options = {}) {
  const manual = new ManualGenerator(
      [
        new ManualMenuComponentFactory().toReady(options.menuConfig),
        new ManualContentComponentFactory().toReady(options.menuConfig),
      ]
  ).generatorComponent();
  const parentManual = Object.assign({}, manual);
  parentManual.children = [];
  const childrenManual = manual.children;
  return {
    parent: parentManual,
    children: childrenManual,
  };
}

function updateContentBlockVisualDisplayContainerMiddleware(options = {}) {
  return {
    parent: {tag: 'div', props: {class: 'content__block-visual-display-container'}, children: []},
  };
}

function updateContentBlockVisualDisplayContainer(options = {}) {
  if (!options.one) options = StorageApp.user.progress;
  const visualDisplay = new VisualDisplayComponent(options).toReady();
  const parentVisualDisplay = Object.assign({}, visualDisplay);
  parentVisualDisplay.children = [];
  const childrenVisualDisplay = visualDisplay.children;
  return {
    parent: parentVisualDisplay,
    children: childrenVisualDisplay,
  };
}

function updateContentBlockHelperSettingsContainerMiddleware(options = {}) {
  return {
    parent: {tag: 'div', props: {class: 'content__block-helper-settings-container'}, children: []},
  };
}

function updateContentBlockHelperSettingsContainer(options = {}) {
  if (!options.skype) options = StorageApp.user.helper;
  const helperSettings = new HelperSettingsComponent(options).toReady();
  const parentHelperSettings = Object.assign({}, helperSettings);
  parentHelperSettings.children = [];
  const childrenHelperSettings = helperSettings.children;
  return {
    parent: parentHelperSettings,
    children: childrenHelperSettings,
  };
}

function updateContentBlockLessonDescriptionContainerMiddleware(options = {}) {
  return {
    parent: {tag: 'div', props: {class: 'content__block-lesson-container'}, children: []},
  };
}

function updateContentBlockLessonDescriptionContainer(options = {}) {
  if (options.type === 'default') {
    StorageApp.user.progress = {
      one: 'default',
      two: 'default',
      three: 'default',
      four: 'default',
      five: 'default',
      six: 'default',
      seven: 'default',
      eight: 'default',
    };
    StorageApp.user.helper = {
      skype: 'default',
      field: 'default',
    };
    StorageApp.user.description.type = options.type;
  }
  if (!options.lesson) options = StorageApp.user.description;
  if (options.lesson) {
    options['lessonClass'] = StorageApp.user.progress[`${options.lesson}`];
    options['type'] = StorageApp.user.description.type;
  }
  const lessonDescription = Object.assign({}, new LessonDescriptionComponent(options).toReady());
  lessonDescription.children = lessonDescription.children.filter((cls) => cls);
  return {
    parent: Object.assign({}, {tag: lessonDescription.tag, props: lessonDescription.props, children: []}),
    children: lessonDescription.children,
  };
}

function inputSelectedDate(options = {}) {
  return {
    parent: {tag: 'h3', props: {class: 'list__title title-h3 list__title-span'}, children: [
      {tag: 'span', props: {}, children: [`Расписание на ${options.data}`]},
    ]},
  };
}

function initScheduleMiddleware(options = {}) {
  return {
    parent: {tag: 'ul', props: {class: 'list__ul'}, children: []},
  };
}

function initSchedule(options = {}) {
  if (!options.clock08) options = new UserState().getSchedule();
  const clockButton = new ClockComponent(options).toReady();
  const parentClockButton = Object.assign({}, clockButton);
  parentClockButton.children = [];
  const childrenClockButton = clockButton.children;
  return {
    parent: parentClockButton,
    children: childrenClockButton,
  };
}

function initReportMiddleware(options = {}) {
  return {
    parent: {tag: 'div', props: {class: 'site__report-progress-container'}, children: []},
  };
}

function initReport(options = {}) {
  if (!options.trackers) options = new UserState().getTrackers();
  const trackButton = new TrackComponent(options).toReady();
  const parentTrackButton = Object.assign({}, trackButton);
  parentTrackButton.children = [];
  const childrenTrackButton = trackButton.children;
  return {
    parent: parentTrackButton,
    children: childrenTrackButton,
  };
}
