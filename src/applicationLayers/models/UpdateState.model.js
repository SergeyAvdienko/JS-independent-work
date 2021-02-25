/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import {mutationButtonLoginProxy} from '@data/Storage.app.js';
import {mutationLogotypeTitleProxy} from '@data/Storage.app.js';
import {mutationButtonFileDownloadProxy} from '@data/Storage.app.js';
import {mutationButtonClickMenuOnProxy} from '@data/Storage.app.js';
import {mutationMenuProxy} from '@data/Storage.app.js';
import {mutationSectionProxy} from '@data/Storage.app.js';
import {mutationSectionSiteReportProxy} from '@data/Storage.app.js';
import {mutationSectionSiteMainProxy} from '@data/Storage.app.js';
import {mutationSectionSiteManualProxy} from '@data/Storage.app.js';
import {mutationSectionSiteDocsProxy} from '@data/Storage.app.js';
import {mutationButtonOpenScheduleProxy} from '@data/Storage.app.js';
import {mutationInputSkypeLoginProxy} from '@data/Storage.app.js';
import {mutationButtonSkypeLoginProxy} from '@data/Storage.app.js';
import {mutationInputPathGoogleFieldProxy} from '@data/Storage.app.js';
import {mutationButtonSetPathGoogleFieldProxy} from '@data/Storage.app.js';
import {mutationInitVisualDisplayProxy} from '@data/Storage.app.js';
import {mutationInitHelperSettingsProxy} from '@data/Storage.app.js';
import {mutationInitLessonDescriptionProxy} from '@data/Storage.app.js';
import {mutationInputSelectedDateProxy} from '@data/Storage.app.js';
import {mutationInitScheduleProxy} from '@data/Storage.app.js';
import {mutationInitReportProxy} from '@data/Storage.app.js';
import {AnimationElement} from '@services/animation/Animation.service.js';
import {StorageApp} from '@data/Storage.app.js';
import {UserState} from '@models/UserState.model.js';

const commandCollection = {
  // --- Header.component ---> buttonLogin
  buttonLogin: buttonLogin,
  buttonLogin_1: initVisualDisplayMiddleware,
  buttonLogin_2: initVisualDisplay,
  buttonLogin_3: initHelperSettingsMiddleware,
  buttonLogin_4: initHelperSettings,
  // --- Header.component ---> buttonLogotype
  buttonLogotype: buttonLogotype,
  buttonLogotype_1: buttonMenu,
  buttonLogotype_2: siteReport,
  buttonLogotype_3: siteMain,
  buttonLogotype_4: siteManual,
  buttonLogotype_5: siteDocs,


  // --- Programm.component ---> buttonClickMenuOn
  buttonClickMenuOn: buttonClickMenuOn,
  buttonClickMenuOn_1: buttonClickMenuOn,
  // --- Programm.component ---> buttonFileDownload
  buttonFileDownload: buttonFileDownload,
  buttonFileDownload_1: buttonFileDownloadMiddleware,
  buttonFileDownload_2: buttonFileDownload,
  // --- Programm.component ---> buttonAllProgramm
  buttonAllProgramm: buttonMenu,
  buttonAllProgramm_1: buttonLogotype,
  // --- Programm.component ---> buttonManual
  buttonManual: buttonMenu,
  buttonManual_1: buttonLogotype,
  buttonManual_2: siteReport,
  buttonManual_3: siteMain,
  buttonManual_4: siteManual,
  buttonManual_5: sectionManualMiddleware,
  buttonManual_6: sectionManual,
  // --- Programm.component ---> buttonDocs
  buttonDocs: buttonMenu,
  buttonDocs_1: buttonLogotype,
  buttonDocs_2: siteReport,
  buttonDocs_3: siteMain,
  buttonDocs_4: siteDocs,
  // --- Programm.component ---> buttonOpenSchedule
  buttonOpenSchedule: buttonOpenSchedule,
  buttonOpenSchedule_1: buttonOpenSchedule,
  // --- Programm.component ---> initVisualDisplay
  initVisualDisplay: initVisualDisplayMiddleware,
  initVisualDisplay_1: initVisualDisplay,
  // --- Programm.component ---> initHelperSettings
  initHelperSettings: initHelperSettingsMiddleware,
  initHelperSettings_1: initHelperSettings,
  // --- Programm.component ---> displayOneLesson
  displayOneLesson: initVisualDisplayMiddleware,
  displayOneLesson_1: initHelperSettingsMiddleware,
  displayOneLesson_2: initLessonDescriptionMiddleware,
  displayOneLesson_3: initLessonDescription,
  // --- Programm.component ---> buttonLinkSetUserSkype
  buttonLinkSetUserSkype: buttonMenu,
  buttonLinkSetUserSkype_1: buttonLogotype,
  buttonLinkSetUserSkype_2: siteReport,
  buttonLinkSetUserSkype_3: siteMain,
  buttonLinkSetUserSkype_4: siteManual,
  buttonLinkSetUserSkype_5: sectionManualMiddleware,
  buttonLinkSetUserSkype_6: sectionManual,
  // --- Programm.component ---> buttonLoginDouble
  buttonLoginDouble: initLessonDescriptionMiddleware,
  buttonLoginDouble_1: initLessonDescription,
  buttonLoginDouble_2: buttonLogin,
  // --- Programm.component ---> buttonCloseLessonContainer
  buttonCloseLessonContainer: initLessonDescriptionMiddleware,
  // --- Programm.component ---> buttonNextLessonContainer
  buttonNextLessonContainer: buttonNextLessonContainer,
  buttonNextLessonContainer_1: initLessonDescriptionMiddleware,
  buttonNextLessonContainer_2: initLessonDescription,

  // --- Manual.component ---> menuIntro
  menuIntro: sectionManualMiddleware,
  menuIntro_1: sectionManual,
  menuIntro_2: buttonLogotype,
  // --- Manual.component ---> contentIntro ---> buttonLinkLessonBlock
  buttonLinkLessonBlock: sectionManualMiddleware,
  buttonLinkLessonBlock_1: sectionManual,
  buttonLinkLessonBlock_2: buttonLogotype,
  // --- Manual.component ---> contentIntro ---> buttonLinkDocs
  buttonLinkDocs: section,
  buttonLinkDocs_1: buttonLogotype,
  buttonLinkDocs_2: section,
  // --- Manual.component ---> contentIntro ---> buttonLinkDefaultSettings
  buttonLinkDefaultSettings: sectionManualMiddleware,
  buttonLinkDefaultSettings_1: sectionManual,
  buttonLinkDefaultSettings_2: buttonLogotype,
  // --- Manual.component ---> menuDefaultSettings
  menuDefaultSettings: sectionManualMiddleware,
  menuDefaultSettings_1: sectionManual,
  menuDefaultSettings_2: buttonLogotype,
  // --- Manual.component ---> contentDefaultSettings ---> inputSkypeLogin
  inputSkypeLogin_1: inputSkypeLogin,
  inputSkypeLogin_2: inputSkypeLogin,
  // --- Manual.component ---> contentDefaultSettings ---> buttonSetSkypeLogin
  buttonSetSkypeLogin: buttonSetSkypeLogin,
  // --- Manual.component ---> contentDefaultSettings ---> inputPathGoogleField
  inputPathGoogleField_1: inputPathGoogleField,
  inputPathGoogleField_2: inputPathGoogleField,
  // --- Manual.component ---> contentDefaultSettings ---> buttonSetPathGoogleField
  buttonSetPathGoogleField: buttonSetPathGoogleField,
  // --- Manual.component ---> menuDemoLesson
  menuDemoLesson: sectionManualMiddleware,
  menuDemoLesson_1: sectionManual,
  menuDemoLesson_2: buttonLogotype,
  // --- Manual.component ---> menuOneLesson
  menuOneLesson: sectionManualMiddleware,
  menuOneLesson_1: sectionManual,
  menuOneLesson_2: buttonLogotype,
  // --- Manual.component ---> menuTwoLesson
  menuTwoLesson: sectionManualMiddleware,
  menuTwoLesson_1: sectionManual,
  menuTwoLesson_2: buttonLogotype,
  // --- menuThreeLesson
  menuThreeLesson: sectionManualMiddleware,
  menuThreeLesson_1: sectionManual,
  menuThreeLesson_2: buttonLogotype,
  // --- Manual.component ---> menuFourLesson
  menuFourLesson: sectionManualMiddleware,
  menuFourLesson_1: sectionManual,
  menuFourLesson_2: buttonLogotype,
  // --- Manual.component ---> menuFiveLesson
  menuFiveLesson: sectionManualMiddleware,
  menuFiveLesson_1: sectionManual,
  menuFiveLesson_2: buttonLogotype,
  // --- Manual.component ---> menuSixLesson
  menuSixLesson: sectionManualMiddleware,
  menuSixLesson_1: sectionManual,
  menuSixLesson_2: buttonLogotype,
  // --- Manual.component ---> menuSevenLesson
  menuSevenLesson: sectionManualMiddleware,
  menuSevenLesson_1: sectionManual,
  menuSevenLesson_2: buttonLogotype,
  // --- Manual.component ---> menuEightLesson
  menuEightLesson: sectionManualMiddleware,
  menuEightLesson_1: sectionManual,
  menuEightLesson_2: buttonLogotype,
  // --- Manual.component ---> buttonClickBackHomePage
  buttonClickBackHomePage: buttonLogotype,
  buttonClickBackHomePage_1: buttonMenu,
  buttonClickBackHomePage_2: section,
  buttonClickBackHomePage_3: section,
  buttonClickBackHomePage_4: section,

  // --- Schedule.component ---> inputSelectedDate
  inputSelectedDate: inputSelectedDate,
  buttonClockAnimation: buttonLogin,
  // --- Schedule.component ---> initSchedule
  initSchedule: initScheduleMiddleware,
  initSchedule_1: initSchedule,
  // --- Report.component ---> initReport
  initReport: initReportMiddleware,
  initReport_1: initReport,
};

export class UpdateState {
  constructor(data, options = {}) {
    this.data = data;
    this.command = commandCollection;
    this.options = options;
  }
  update() {
    this.command[`${this.data.idElementEffected}`](this.data, this.options);
    return;
  }
}

function buttonLogin(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationButtonLoginProxy(element);
  return;
}

function buttonLogotype(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationLogotypeTitleProxy(element);
  return;
}

function buttonFileDownload(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationButtonFileDownloadProxy(element);
}

function buttonFileDownloadMiddleware(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  const childrenRender = false;
  mutationButtonFileDownloadProxy(element, childrenRender);
}

function buttonMenu(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationMenuProxy(element);
}

function section(element, options = {}) {
  console.log('section');
  element.newElement = new AnimationElement(element, options).newElement();
  const childrenRender = false;
  mutationSectionProxy(element, childrenRender);
}

function siteReport(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  const childrenRender = false;
  mutationSectionSiteReportProxy(element, childrenRender);
}

function siteMain(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  const childrenRender = false;
  mutationSectionSiteMainProxy(element, childrenRender);
}

function siteManual(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  const childrenRender = false;
  mutationSectionSiteManualProxy(element, childrenRender);
}

function siteDocs(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  const childrenRender = false;
  mutationSectionSiteDocsProxy(element, childrenRender);
}

function buttonOpenSchedule(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  const childrenRender = false;
  mutationButtonOpenScheduleProxy(element, childrenRender);
}

function buttonClickMenuOn(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  const childrenRender = false;
  mutationButtonClickMenuOnProxy(element, childrenRender);
}

function inputSkypeLogin(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  const childrenRender = options.statusValidate;
  mutationInputSkypeLoginProxy(element, childrenRender);
}

function inputPathGoogleField(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  const childrenRender = options.statusValidate;
  mutationInputPathGoogleFieldProxy(element, childrenRender);
}

function sectionManualMiddleware(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationSectionProxy(element);
}

function sectionManual(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationSectionProxy(element);
}

function initVisualDisplayMiddleware(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationInitVisualDisplayProxy(element);
}

function initVisualDisplay(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationInitVisualDisplayProxy(element, options);
}

function initHelperSettingsMiddleware(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationInitHelperSettingsProxy(element);
}

function initHelperSettings(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationInitHelperSettingsProxy(element, options);
}

function initLessonDescriptionMiddleware(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationInitLessonDescriptionProxy(element);
}

function initLessonDescription(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationInitLessonDescriptionProxy(element, options);
}

function buttonSetSkypeLogin(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationButtonSkypeLoginProxy(element);
  return;
}

function buttonSetPathGoogleField(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationButtonSetPathGoogleFieldProxy(element);
  return;
}

function buttonNextLessonContainer(element, options = {}) {
  switch (StorageApp.user.description.lesson) {
    case 'one':
      StorageApp.user.description.lesson = 'two';
      break;
    case 'two':
      StorageApp.user.description.lesson = 'three';
      break;
    case 'three':
      StorageApp.user.description.lesson = 'four';
      break;
    case 'four':
      StorageApp.user.description.lesson = 'five';
      break;
    case 'five':
      StorageApp.user.description.lesson = 'six';
      break;
    case 'six':
      StorageApp.user.description.lesson = 'seven';
      break;
    case 'seven':
      StorageApp.user.description.lesson = 'eight';
      break;
    case 'eight':
      StorageApp.user.description.lesson = 'one';
      break;
    default:
      throw Error('Ошибка функции buttonNextLessonContainer в Update.State');
  }
  if (StorageApp.user.description.type === 'errorLogin' || StorageApp.user.description.type === 'errorSettings') return;
  console.error('Не закончена функция');
}

function inputSelectedDate(element, options = {}) {
  if (!options.data) {
    StorageApp.user.today = `${new Date().toLocaleDateString()}`;
    options.data = `${new Date().toLocaleDateString()}`;
  }
  element.newElement = new AnimationElement(element, options).newElement();
  document.getElementById(`${element.idElementEffected}`).disabled = 'true';
  document.getElementById(`${element.idElementEffected}`).val = options.data;
  mutationInputSelectedDateProxy(element);
  return;
}

function initScheduleMiddleware(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationInitScheduleProxy(element);
}

function initSchedule(element, options = {}) {
  if (!options.clock08) new UserState().getToday(document.getElementById('today-span'));
  element.newElement = new AnimationElement(element, options).newElement();
  mutationInitScheduleProxy(element, options);
}

function initReportMiddleware(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationInitReportProxy(element);
}

function initReport(element, options = {}) {
  element.newElement = new AnimationElement(element, options).newElement();
  mutationInitReportProxy(element, options);
}
