/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {ApplicationError} from '@views/parentClass/MyErrorClass.js';
import {
  assignUID,
  changeState,
  download,
  addListener,
} from '@controllers/core/Facade.js';


function changeElement(element, $elementAffected) {
  element.$elementAffected = $elementAffected;
  element.elementAffectedUID = assignUID(element.$elementAffected);
  return element;
}

function displayLessonFoo(element, idElementEffected, options) {
  function _displayLesson0(element) {
    changeState(
        element,
        {}
    );
  }
  function _displayLesson1(element) {
    element.idElementEffected = `${idElementEffected}_1`;
    changeState(
        changeElement(
            element,
            document.querySelector('.content__block-helper-setting'),
        ),
        {},
    );
  }
  function _displayLesson2(element) {
    element.idElementEffected = `${idElementEffected}_2`;
    changeState(
        changeElement(
            element,
            document.querySelector('.content__block-lesson'),
        ),
        {},
    );
  }
  function _displayLesson3(element, options) {
    element.idElementEffected = `${idElementEffected}_3`;
    changeState(
        changeElement(
            element,
            document.querySelector('.content__block-lesson'),
        ),
        options,
    );
  }
  function _displayLesson4(element) {
    element.idElementEffected = `${idElementEffected}_4`;
    const array = document.getElementsByClassName('content__block-title-h5');
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      element.style.display = 'none';
    }
    document.getElementsByClassName('content__block-visual-display')[0].style.display = 'none';
    document.getElementsByClassName('content__block-helper-setting')[0].style.display = 'none';
  }
  _displayLesson0(element);
  _displayLesson1(element);
  _displayLesson2(element);
  _displayLesson3(element, options);
  _displayLesson4(element);
  addListener(lessonDescription);
}

const menu = ['buttonAllProgramm', 'buttonManual', 'buttonDocs'];
const visualDispalay = ['displayOneLesson', 'displayTwoLesson', 'displayThreeLesson', 'displayFourLesson', 'displayFiveLesson',
  'displaySixLesson', 'displaySevenLesson', 'displayEightLesson', 'buttonLinkSetUserSkype', 'buttonLinkSetUserPathFolder'];
const lessonDescription = ['buttonLoginDouble', 'buttonCloseLessonContainer', 'buttonNextLessonContainer'];
const arrayContentSettingsID = ['buttonLinkCreateGoogleAccount', 'inputSkypeLogin', 'buttonLinkSkypeSettings',
  'inputPathGoogleField', 'buttonLinkCreateFolderInGoogleDesk', 'buttonLinkGetFolderInGoogleDesk'];
const arrayMenuID = ['menuIntro', 'menuDefaultSettings', 'menuDemoLesson', 'menuOneLesson', 'menuTwoLesson', 'menuThreeLesson',
  'menuFourLesson', 'menuFiveLesson', 'menuSixLesson', 'menuSevenLesson', 'menuEightLesson', 'buttonClickBackHomePage',
  'buttonClickMenuOn'];
const arrayContentIntroID = ['buttonLinkLessonBlock', 'buttonLinkDocs', 'buttonLinkDefaultSettings', 'buttonLinkResume'];

export class ProgrammController {
  // Вызвана с bind(контекст класса buttonFileDownload)
  buttonFileDownload() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonFileDownload';
    changeState(this, {icon: 'file_download'});
    new Promise((response) => {
      download('/src/shared/colorcollection.png');
      response();
    })
        .catch((error) => {
          throw Error(error);
        })
        .finally(() => {
          setTimeout(() => {
            function _buttonFileDownload1(element) {
              element.idElementEffected = 'buttonFileDownload_1';
              changeState(element, {class: 'site__main-download-default'});
            }
            function _buttonFileDownload2(element) {
              element.idElementEffected = 'buttonFileDownload_2';
              changeState(element, {id: 'buttonFileDownload', class: 'button', icon: 'picture_as_pdf'});
              addListener(['buttonFileDownload']);
            }
            _buttonFileDownload1(Object.assign({}, this));
            _buttonFileDownload2(Object.assign({}, this));
          }, 3000);
        });
    return;
  }
  buttonAllProgramm() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonAllProgramm';
    function _buttonAllProgramm0(element) {
      changeState(element, {
        programm: 'menu__li menu__active',
        manual: 'menu__li',
        docs: 'menu__li',
      });
      addListener(['buttonAllProgramm', 'buttonManual', 'buttonDocs']);
    }
    function _buttonAllProgramm1(element) {
      element.idElementEffected = 'buttonAllProgramm_1';
      changeState(
          changeElement(
              element,
              document.querySelector('.left__title-h1-container'),
          ),
          {
            string: 'YourHabit.ru',
          }
      );
    }
    _buttonAllProgramm0(Object.assign({}, this));
    _buttonAllProgramm1(Object.assign({}, this));
    return;
  }
  buttonManual() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonManual';
    function _buttonManual0(element) {
      changeState(element, {
        programm: 'menu__li',
        manual: 'menu__li menu__active',
        docs: 'menu__li',
      });
    }
    function _buttonManual1(element) {
      element.idElementEffected = 'buttonManual_1';
      changeState(
          changeElement(
              element,
              document.querySelector('.left__title-h1-container'),
          ),
          {
            string: 'Введение',
          }
      );
    }
    function _buttonManual2(element) {
      element.idElementEffected = 'buttonManual_2';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__report'),
          ),
          {
            class: 'site__report invisibile',
          }
      );
    }
    function _buttonManual3(element) {
      element.idElementEffected = 'buttonManual_3';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__main'),
          ),
          {
            class: 'site__main invisibile',
          }
      );
    }
    function _buttonManual4(element) {
      element.idElementEffected = 'buttonManual_4';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__manual'),
          ),
          {
            class: 'site__manual',
          }
      );
    }
    function _buttonManual5(element) {
      element.idElementEffected = 'buttonManual_5';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__manual'),
          ),
          {}
      );
    }
    function _buttonManual6(element) {
      element.idElementEffected = 'buttonManual_6';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__manual'),
          ),
          {menuConfig: 'intro'}
      );
    }
    _buttonManual0(Object.assign({}, this));
    _buttonManual1(Object.assign({}, this));
    _buttonManual2(Object.assign({}, this));
    _buttonManual3(Object.assign({}, this));
    _buttonManual4(Object.assign({}, this));
    _buttonManual5(Object.assign({}, this));
    _buttonManual6(Object.assign({}, this));
    addListener([...arrayContentIntroID, ...arrayMenuID]);
    return;
  }
  buttonDocs() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonDocs';
    function _buttonDocs0(element) {
      changeState(element, {
        programm: 'menu__li',
        manual: 'menu__li',
        docs: 'menu__li menu__active',
      });
      addListener(['buttonAllProgramm', 'buttonManual', 'buttonDocs']);
    }
    function _buttonDocs1(element) {
      element.idElementEffected = 'buttonDocs_1';
      changeState(
          changeElement(
              element,
              document.querySelector('.left__title-h1-container'),
          ),
          {
            string: 'Документация',
          }
      );
    }
    function _buttonDocs2(element) {
      element.idElementEffected = 'buttonDocs_2';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__report')
          ),
          {
            class: 'site__report invisibile',
          },
      );
    }
    function _buttonDocs3(element) {
      element.idElementEffected = 'buttonDocs_3';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__main')
          ),
          {
            class: 'site__main invisibile',
          },
      );
    }
    function _buttonDocs4(element) {
      element.idElementEffected = 'buttonDocs_4';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__docs')
          ),
          {
            class: 'site__docs',
          },
      );
    }
    _buttonDocs0(Object.assign({}, this));
    _buttonDocs1(Object.assign({}, this));
    _buttonDocs2(Object.assign({}, this));
    _buttonDocs3(Object.assign({}, this));
    _buttonDocs4(Object.assign({}, this));
    return;
  }
  buttonOpenSchedule() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonOpenSchedule';
    function _buttonOpenSchedule0(element) {
      changeState(element, {class: 'site__main-schedule visible'});
      element.$elementAffected.style.height = `${document.querySelector('.site__main-programm').offsetHeight}px`;
    }
    function _buttonOpenSchedule1(element) {
      element.idElementEffected = 'buttonOpenSchedule_1';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__main-programm'),
          ),
          {
            class: 'site__main-programm invisible',
          },
      );
    }
    _buttonOpenSchedule0(Object.assign({}, this));
    // _buttonOpenSchedule1(Object.assign({}, this));
    return;
  }
  initVisualDisplay() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'initVisualDisplay';
    function _initVisualDisplay0(element) {
      changeState(
          element,
          {}
      );
    }
    function _initVisualDisplay1(element) {
      element.idElementEffected = 'initVisualDisplay_1';
      changeState(
          element,
          {}
      );
    }
    try {
      _initVisualDisplay0(Object.assign({}, this));
      _initVisualDisplay1(Object.assign({}, this));
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  initHelperSettings() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'initHelperSettings';
    function _initHelperSettings0(element) {
      changeState(
          element,
          {}
      );
    }
    function _initHelperSettings1(element) {
      element.idElementEffected = 'initHelperSettings_1';
      changeState(
          element,
          {}
      );
    }
    try {
      _initHelperSettings0(Object.assign({}, this));
      _initHelperSettings1(Object.assign({}, this));
    } catch (error) {
      console.log(error);
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  displayOneLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'displayOneLesson';
    try {
      displayLessonFoo(Object.assign({}, this), this.idElementEffected, {lesson: 'one'});
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  displayTwoLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'displayOneLesson';
    try {
      displayLessonFoo(Object.assign({}, this), this.idElementEffected, {lesson: 'two', type: 'errorSettings'});
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  displayThreeLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'displayOneLesson';
    try {
      displayLessonFoo(Object.assign({}, this), this.idElementEffected, {lesson: 'three', type: 'errorPay'});
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  displayFourLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'displayOneLesson';
    try {
      displayLessonFoo(Object.assign({}, this), this.idElementEffected, {lesson: 'four', type: 'warning'});
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  displayFiveLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'displayOneLesson';
    try {
      displayLessonFoo(Object.assign({}, this), this.idElementEffected, {lesson: 'five', type: 'success'});
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  displaySixLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'displayOneLesson';
    try {
      displayLessonFoo(Object.assign({}, this), this.idElementEffected, {lesson: 'six', type: 'successLast'});
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  displaySevenLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'displayOneLesson';
    try {
      displayLessonFoo(Object.assign({}, this), this.idElementEffected, {lesson: 'seven', type: 'errorLogin'});
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  displayEightLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'displayOneLesson';
    try {
      displayLessonFoo(Object.assign({}, this), this.idElementEffected, {lesson: 'eight', type: 'errorLogin'});
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  buttonLinkSetUserSkype() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonLinkSetUserSkype';
    function _buttonLinkSetUserSkype0(element) {
      changeState(element, {
        programm: 'menu__li',
        manual: 'menu__li menu__active',
        docs: 'menu__li',
      });
    }
    function _buttonLinkSetUserSkype1(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_1';
      changeState(
          changeElement(
              element,
              document.querySelector('.left__title-h1-container'),
          ),
          {
            string: 'Настройки',
          }
      );
    }
    function _buttonLinkSetUserSkype2(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_2';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__report'),
          ),
          {
            class: 'site__report invisibile',
          }
      );
    }
    function _buttonLinkSetUserSkype3(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_3';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__main'),
          ),
          {
            class: 'site__main invisibile',
          }
      );
    }
    function _buttonLinkSetUserSkype4(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_4';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__manual'),
          ),
          {
            class: 'site__manual',
          }
      );
    }
    function _buttonLinkSetUserSkype5(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_5';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__manual'),
          ),
          {}
      );
    }
    function _buttonLinkSetUserSkype6(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_6';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__manual'),
          ),
          {menuConfig: 'settings'}
      );
    }
    _buttonLinkSetUserSkype0(Object.assign({}, this));
    _buttonLinkSetUserSkype1(Object.assign({}, this));
    _buttonLinkSetUserSkype2(Object.assign({}, this));
    _buttonLinkSetUserSkype3(Object.assign({}, this));
    _buttonLinkSetUserSkype4(Object.assign({}, this));
    _buttonLinkSetUserSkype5(Object.assign({}, this));
    _buttonLinkSetUserSkype6(Object.assign({}, this));
    addListener([...arrayMenuID, ...arrayContentSettingsID]);
  }
  buttonLinkSetUserPathFolder() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonLinkSetUserSkype';
    function _buttonLinkSetUserSkype0(element) {
      changeState(element, {
        programm: 'menu__li',
        manual: 'menu__li menu__active',
        docs: 'menu__li',
      });
    }
    function _buttonLinkSetUserSkype1(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_1';
      changeState(
          changeElement(
              element,
              document.querySelector('.left__title-h1-container'),
          ),
          {
            string: 'Настройки',
          }
      );
    }
    function _buttonLinkSetUserSkype2(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_2';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__report'),
          ),
          {
            class: 'site__report invisibile',
          }
      );
    }
    function _buttonLinkSetUserSkype3(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_3';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__main'),
          ),
          {
            class: 'site__main invisibile',
          }
      );
    }
    function _buttonLinkSetUserSkype4(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_4';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__manual'),
          ),
          {
            class: 'site__manual',
          }
      );
    }
    function _buttonLinkSetUserSkype5(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_5';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__manual'),
          ),
          {}
      );
    }
    function _buttonLinkSetUserSkype6(element) {
      element.idElementEffected = 'buttonLinkSetUserSkype_6';
      changeState(
          changeElement(
              element,
              document.querySelector('.site__manual'),
          ),
          {menuConfig: 'settings'}
      );
    }
    _buttonLinkSetUserSkype0(Object.assign({}, this));
    _buttonLinkSetUserSkype1(Object.assign({}, this));
    _buttonLinkSetUserSkype2(Object.assign({}, this));
    _buttonLinkSetUserSkype3(Object.assign({}, this));
    _buttonLinkSetUserSkype4(Object.assign({}, this));
    _buttonLinkSetUserSkype5(Object.assign({}, this));
    _buttonLinkSetUserSkype6(Object.assign({}, this));
    addListener([...arrayMenuID, ...arrayContentSettingsID]);
  }
  buttonLoginDouble() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonLoginDouble';
    function _buttonLoginDouble0(element) {
      changeState(
          element,
          {}
      );
    }
    function _buttonLoginDouble1(element) {
      element.idElementEffected = 'buttonLoginDouble_1';
      changeState(
          element,
          {type: 'default'},
      );
    }
    function _buttonLoginDouble2(element) {
      element.idElementEffected = 'buttonLoginDouble_2';
      changeState(
          changeElement(
              element,
              document.querySelector('.right__column-default'),
          ),
          {},
      );
    }
    try {
      _buttonLoginDouble0(Object.assign({}, this));
      _buttonLoginDouble1(Object.assign({}, this));
      _buttonLoginDouble2(Object.assign({}, this));
      addListener(lessonDescription);
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  buttonCloseLessonContainer() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonCloseLessonContainer';
    function _buttonCloseLessonContainer0(element) {
      changeState(element, {});
    }
    function _buttonCloseLessonContainer2(element) {
      element.idElementEffected = `buttonCloseLessonContainer_2`;
      const array = document.getElementsByClassName('content__block-title-h5');
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.style.display = 'block';
      }
      document.getElementsByClassName('content__block-visual-display')[0].style.display = 'block';
      document.getElementsByClassName('content__block-helper-setting')[0].style.display = 'block';
    }
    try {
      _buttonCloseLessonContainer0(Object.assign({}, this));
      _buttonCloseLessonContainer2(Object.assign({}, this));
      addListener(visualDispalay);
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
  buttonNextLessonContainer() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonNextLessonContainer';
    function _buttonNextLessonContainer0(element) {
      changeState(element, {});
    }
    function _buttonNextLessonContainer1(element) {
      element.idElementEffected = `buttonNextLessonContainer_2`;
      changeState(element, {});
    }
    function _buttonNextLessonContainer2(element) {
      element.idElementEffected = `buttonNextLessonContainer_2`;
      changeState(element, {});
    }
    try {
      _buttonNextLessonContainer0(Object.assign({}, this));
      _buttonNextLessonContainer1(Object.assign({}, this));
      _buttonNextLessonContainer2(Object.assign({}, this));
      addListener(lessonDescription);
    } catch (error) {
      throw new ApplicationError(
          'Ошибка разработчика',
          `Проверьте создана ли вызываемая функция ${this.idElementEffected} в UpdateState.model.js`
      );
    }
    return;
  }
}
