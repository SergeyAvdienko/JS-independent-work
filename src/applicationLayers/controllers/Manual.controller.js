/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {
  assignUID,
  changeState,
  addListener,
  createAbstractCopyIdElementEffected,
  validationSkypeLogin,
  setValueInputSkypeLogin,
  validationPathField,
  setValueInputPathGoogleField,
} from '@controllers/core/Facade.js';

const arrayMenuID = ['menuIntro', 'menuDefaultSettings', 'menuDemoLesson', 'menuOneLesson', 'menuTwoLesson', 'menuThreeLesson',
  'menuFourLesson', 'menuFiveLesson', 'menuSixLesson', 'menuSevenLesson', 'menuEightLesson', 'buttonClickBackHomePage',
  'buttonClickMenuOn'];
const arrayContentIntroID = ['buttonLinkLessonBlock', 'buttonLinkDocs', 'buttonLinkDefaultSettings', 'buttonLinkResume'];
const arrayContentSettingsID = ['buttonLinkCreateGoogleAccount', 'inputSkypeLogin', 'buttonLinkSkypeSettings',
  'inputPathGoogleField', 'buttonLinkCreateFolderInGoogleDesk', 'buttonLinkGetFolderInGoogleDesk'];
const arrayContentDemoID = ['buttonLinkCreateLearningStatus'];
const arrayContentOneID = [];
const arrayContentTwoID = [];
const arrayContentThreeID = [];
const arrayContentFourID = [];
const arrayContentFiveID = [];
const arrayContentSixID = [];
const arrayContentSevenID = [];
const arrayContentEightID = [];
const menu = ['buttonAllProgramm', 'buttonManual', 'buttonDocs'];
const visualDispalay = ['displayOneLesson', 'displayTwoLesson', 'displayThreeLesson', 'displayFourLesson', 'displayFiveLesson',
  'displaySixLesson', 'displaySevenLesson', 'displayEightLesson', 'buttonLinkSetUserSkype', 'buttonLinkSetUserPathFolder'];
const lessonDescription = ['buttonLoginDouble', 'buttonCloseLessonContainer', 'buttonNextLessonContainer'];

// function helper
const clickMenu = (context, menuConfigText, disabledMenuID, arrayContentID = []) => {
  changeState(context, {});
  context.idElementEffected = createAbstractCopyIdElementEffected(context.idElementEffected);
  changeState(context, {menuConfig: menuConfigText});
  addListener(arrayMenuID.filter((id) => id !== disabledMenuID));
  addListener(arrayContentID);
  function handleButtonClick() {
    document.getElementById('buttonClickBackHomePage').scrollIntoView({block: 'center', behavior: 'smooth'});
  }
  handleButtonClick();
};
function changeElement(element, $elementAffected) {
  element.$elementAffected = $elementAffected;
  element.elementAffectedUID = assignUID(element.$elementAffected);
  element.idElementEffected = createAbstractCopyIdElementEffected(element.idElementEffected);
  return element;
}

export class ManualController {
  buttonClickBackHomePage() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonClickBackHomePage';
    changeState(this, {string: 'YourHabit.ru'});
    // site__main-menu mutation
    changeState(
        changeElement(
            this,
            document.querySelector('.site__main-menu'),
        ),
        {
          programm: 'menu__li menu__active',
          manual: 'menu__li',
          docs: 'menu__li',
        }
    );
    addListener([...menu, ...visualDispalay, ...lessonDescription]);
    // site__report mutation
    changeState(
        changeElement(
            this,
            document.querySelector('.site__report'),
        ),
        {
          class: 'site__report',
        }
    );
    // site__main mutation
    changeState(
        changeElement(
            this,
            document.querySelector('.site__main'),
        ),
        {
          class: 'site__main',
        }
    );
    // site__manual mutation
    changeState(
        changeElement(
            this,
            document.querySelector('.site__manual'),
        ),
        {
          class: 'site__manual invisibile',
        }
    );
    return;
  }
  buttonClickMenuOn() {
    assignUID(this.$elementAffected, true).then((uID) => {
      this.elementAffectedUID = uID;
      this.idElementEffected = 'buttonClickMenuOn';
      changeState(this, {class: 'site__manual-column-left visible'});
      // site__manual-column-right
      changeState(changeElement(
          this,
          document.querySelector('.site__manual-column-right'),
      ),
      {class: 'site__manual-column-right invisibile'}
      );
    });
  }
  // --- menuIntro
  menuIntro() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'menuIntro';
    clickMenu(this, 'intro', 'menuIntro', arrayContentIntroID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Введение',
        }
    );
    return;
  }
  // --- contentIntro ---> buttonLinkLessonBlock
  buttonLinkLessonBlock() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonLinkLessonBlock';
    clickMenu(this, 'one', 'menuOneLesson', arrayContentOneID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Занятие#1',
        }
    );
    return;
  }
  // --- contentIntro ---> buttonLinkDocs
  buttonLinkDocs() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonLinkDocs';
    changeState(this, {class: 'site__manual invisibile'});
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Документация',
        }
    );
    // site__docs invisibile
    changeState(
        changeElement(
            this,
            document.querySelector('.site__docs.invisibile'),
        ),
        {
          class: 'site__docs',
        }
    );
    return;
  }
  // --- contentIntro ---> buttonLinkDefaultSettings
  buttonLinkDefaultSettings() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonLinkDefaultSettings';
    clickMenu(this, 'settings', 'menuDefaultSettings', arrayContentSettingsID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Настройки',
        }
    );
    return;
  }
  // --- contentIntro ---> buttonLinkResume
  buttonLinkResume() {
    window.open('https://novosibirsk.hh.ru/resume/9615ed90ff032c5e180039ed1f485934755443', '_blank');
  }
  // --- menuDefaultSettings
  menuDefaultSettings() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'menuDefaultSettings';
    clickMenu(this, 'settings', 'menuDefaultSettings', arrayContentSettingsID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Настройки',
        }
    );
    // this.idElementEffected = inputSkypeLogin = ...Storage.store.user.skype
    setValueInputSkypeLogin(document.querySelector('#inputSkypeLogin'));
    // this.idElementEffected = inputPathGoogleField = ...Storage.store.user.path
    setValueInputPathGoogleField(document.querySelector('#inputPathGoogleField'));
    return;
  }
  // --- contentDefaultSettings ---> buttonLinkCreateGoogleAccount
  buttonLinkCreateGoogleAccount() {
    window.open('https://support.google.com/accounts/answer/27441?hl=ru', '_blank');
  }
  // --- contentDefaultSettings ---> inputSkypeLogin
  inputSkypeLogin(event) {
    if (
      event.target.value.length > 1 &&
        event.target.value.length < 5 &&
          event.target.value.length > 32
    ) return;
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'inputSkypeLogin';
    const success = () => {
      if (this.$elementEffected.className !== '' && this.$elementEffected.className !== 'error') return;
      this.$elementEffected.classList.remove('error');
      this.$elementEffected.classList.add('success');
      changeState(
          changeElement(
              this,
              document.querySelector('.left-column-skype'),
          ),
          {class: 'success'}
      );
      new Promise((resolve, reject) => {
        changeState(
            changeElement(
                this,
                document.querySelector('.form-container-skype'),
            ),
            {statusValidate: true}
        );
        resolve();
      })
          .then(() => {
            addListener(['buttonSetSkypeLogin']);
            return;
          });
    };
    const error = () => {
      if (this.$elementEffected.className === '' || this.$elementEffected.className === 'success') {
        this.$elementEffected.classList.remove('success');
        this.$elementEffected.classList.add('error');
        changeState(
            changeElement(
                this,
                document.querySelector('.left-column-skype'),
            ),
            {class: 'error'},
        );
        changeState(
            changeElement(
                this,
                document.querySelector('.form-container-skype'),
            ),
            {statusValidate: false}
        );
      }
      return;
    };
      validationSkypeLogin(event.target.value) ? success() : error();
      return;
  }
  // --- contentDefaultSettings ---> buttonSetSkypeLogin
  buttonSetSkypeLogin() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonSetSkypeLogin';
    changeState(this, {});
  }
  // --- contentDefaultSettings ---> buttonLinkSkypeSettings
  buttonLinkSkypeSettings() {
    window.open('https://www.skype.com/ru/get-skype/', '_blank');
  }
  // --- contentDefaultSettings ---> inputPathGoogleField
  inputPathGoogleField(event) {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'inputPathGoogleField';
    const success = () => {
      if (this.$elementEffected.className !== '' && this.$elementEffected.className !== 'error') return;
      this.$elementEffected.classList.remove('error');
      this.$elementEffected.classList.add('success');
      changeState(
          changeElement(
              this,
              document.querySelector('.left-column-google-field'),
          ),
          {class: 'success'}
      );
      new Promise((resolve, reject) => {
        changeState(
            changeElement(
                this,
                document.querySelector('.form-container-google-field'),
            ),
            {statusValidate: true}
        );
        resolve();
      })
          .then(() => {
            addListener(['buttonSetPathGoogleField']);
            return;
          });
    };
    const error = () => {
      if (this.$elementEffected.className === '' || this.$elementEffected.className === 'success') {
        this.$elementEffected.classList.remove('success');
        this.$elementEffected.classList.add('error');
        changeState(
            changeElement(
                this,
                document.querySelector('.left-column-google-field'),
            ),
            {class: 'error'},
        );
        changeState(
            changeElement(
                this,
                document.querySelector('.form-container-google-field'),
            ),
            {statusValidate: false}
        );
      }
      return;
    };
    validationPathField(event.target.value) ? success() : error();
  }
  // --- contentDefaultSettings ---> buttonSetPathGoogleField
  buttonSetPathGoogleField() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'buttonSetPathGoogleField';
    changeState(this, {});
  }
  // --- contentDefaultSettings ---> buttonLinkCreateFolderInGoogleDesk
  buttonLinkCreateFolderInGoogleDesk() {
    window.open('https://support.google.com/drive/answer/2375091?co=GENIE.Platform%3DAndroid&hl=ru', '_blank');
  }
  // --- contentDefaultSettings ---> buttonLinkGetFolderInGoogleDesk
  buttonLinkGetFolderInGoogleDesk() {
    window.open('https://support.google.com/drive/answer/7166529?co=GENIE.Platform%3DDesktop&hl=ru', '_blank');
  }
  // --- menuDemoLesson
  menuDemoLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'menuDemoLesson';
    clickMenu(this, 'demo', 'menuDemoLesson', arrayContentDemoID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Постоплата',
        }
    );
    return;
  }
  // --- contentDemoLesson ---> buttonLinkCreateLearningStatus
  buttonLinkCreateLearningStatus() {
    alert('Данная опция будет доступна в ближайшем обновлении');
  }
  // --- menuOneLesson
  menuOneLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'menuOneLesson';
    clickMenu(this, 'one', 'menuOneLesson', arrayContentOneID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Занятие#1',
        }
    );
    return;
  }
  // --- menuTwoLesson
  menuTwoLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'menuTwoLesson';
    clickMenu(this, 'two', 'menuTwoLesson', arrayContentTwoID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Занятие#2',
        }
    );
    return;
  }
  // --- menuThreeLesson
  menuThreeLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'menuThreeLesson';
    clickMenu(this, 'three', 'menuThreeLesson', arrayContentThreeID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Занятие#3',
        }
    );
    return;
  }
  // --- menuFourLesson
  menuFourLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'menuFourLesson';
    clickMenu(this, 'four', 'menuFourLesson', arrayContentFourID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Занятие#4',
        }
    );
    return;
  }
  // --- menuFiveLesson
  menuFiveLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'menuFiveLesson';
    clickMenu(this, 'five', 'menuFiveLesson', arrayContentFiveID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Занятие#5',
        }
    );
    return;
  }
  // --- menuSixLesson
  menuSixLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'menuSixLesson';
    clickMenu(this, 'six', 'menuSixLesson', arrayContentSixID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Занятие#6',
        }
    );
    return;
  }
  // --- menuSevenLesson
  menuSevenLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'menuSevenLesson';
    clickMenu(this, 'seven', 'menuSevenLesson', arrayContentSevenID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Занятие#7',
        }
    );
    return;
  }
  // --- menuEightLesson
  menuEightLesson() {
    this.elementAffectedUID = assignUID(this.$elementAffected);
    this.idElementEffected = 'menuEightLesson';
    clickMenu(this, 'eight', 'menuEightLesson', arrayContentEightID);
    // left__title-h1-container
    changeState(
        changeElement(
            this,
            document.querySelector('.left__title-h1-container'),
        ),
        {
          string: 'Занятие#8',
        }
    );
    return;
  }
}
