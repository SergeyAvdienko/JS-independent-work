import '@data/Storage.app.js';
/* eslint-disable max-len */
/* eslint-disable no-undef */
import './scss/index.scss';
import './plan.gif';

// import {Button} from '@views/parentClass/Button.js';
console.log('index.js init...');
import {HomePage} from '@views/components/home.page.js';
new HomePage().data();

// document.getElementById().

// MyStorage.storage.initVDOM();
// new HomePage().data();

// const openSchedule = new Button('data-open-shedule');
// const closeSchedule = new Button('data-close-shedule');

// openSchedule.addEvent(openSiteMainSchedule);
// closeSchedule.addEvent(closeSiteMainSchedule);

// function blurOnSiteMainProgramm() {
//   // Оределяет корневой элемент для изменений (рендеринг)
//   function rootElement(cls) {
//     const $root = document.getElementsByClassName(cls)[0];
//     return $root;
//   }
//   // Возвращает текущий UniqID элемента
//   function rootUID($root) {
//     return $root.getAttribute('data-uniqID');
//   }
//   const $root = VDOMRender.$root = rootElement('site__main-programm');
//   const $rootUID = rootUID($root);
//   VDOMFilter.start($rootUID);
//   const oldNode = VDOMFilter.result();
//   oldNode.children = [];
//   const newNode = VDOMCollector.factoryNodeParent(
//       'section',
//       [{class: 'site__main-programm animation__blur-on'}],
//       [],
//   );
//   // Обновлем DOM
//   VDOMRender.updateElement($root, newNode, oldNode);
// }

// function openSiteMainSchedule() {
//   // Оределяет корневой элемент для изменений (рендеринг)
//   function rootElement(cls) {
//     const $root = document.getElementsByClassName(cls)[0];
//     return $root;
//   }
//   // Возвращает текущий UniqID элемента
//   function rootUID($root) {
//     return $root.getAttribute('data-uniqID');
//   }
//   const $root = VDOMRender.$root = rootElement('site__main-schedule');
//   const $rootUID = rootUID($root);
//   // Ищем vnode внутри vdom по UID
//   VDOMFilter.start($rootUID);
//   // Выводим результат поиска vnode внутри vdom по UID
//   const oldNode = VDOMFilter.result();
//   oldNode.children = [];
//   // Определяем необходимые изменения
//   const newNode = VDOMCollector.factoryNodeParent(
//       'section',
//       [{class: 'site__main-schedule animation__shifh-right'}],
//       []
//   );
//   // Обновлем DOM
//   VDOMRender.updateElement($root, newNode, oldNode);
//   blurOnSiteMainProgramm();
// }

// function blurOffSiteMainProgramm() {
//   // Оределяет корневой элемент для изменений (рендеринг)
//   function rootElement(cls) {
//     const $root = document.getElementsByClassName(cls)[0];
//     return $root;
//   }
//   // Возвращает текущий UniqID элемента
//   function rootUID($root) {
//     return $root.getAttribute('data-uniqID');
//   }
//   const $root = VDOMRender.$root = rootElement('site__main-programm');
//   const $rootUID = rootUID($root);
//   VDOMFilter.start($rootUID);
//   const oldNode = VDOMFilter.result();
//   oldNode.children = [];
//   const newNode = VDOMCollector.factoryNodeParent(
//       'section',
//       [{class: 'site__main-programm animation__blur-off'}],
//       [],
//   );
//   // Обновлем DOM
//   VDOMRender.updateElement($root, newNode, oldNode);
// }

// function closeSiteMainSchedule() {
//   // Оределяет корневой элемент для изменений (рендеринг)
//   function rootElement(cls) {
//     const $root = document.getElementsByClassName(cls)[0];
//     return $root;
//   }
//   // Возвращает текущий UniqID элемента
//   function rootUID($root) {
//     return $root.getAttribute('data-uniqID');
//   }
//   const $root = VDOMRender.$root = rootElement('site__main-schedule');
//   const $rootUID = rootUID($root);
//   VDOMFilter.start($rootUID);
//   const oldNode = VDOMFilter.result();
//   oldNode.children = [];
//   const newNode = VDOMCollector.factoryNodeParent(
//       'section',
//       [{class: 'site__main-schedule animation__shifh-left'}],
//       [],
//   );
//   // Обновлем DOM
//   VDOMRender.updateElement($root, newNode, oldNode);
//   blurOffSiteMainProgramm();
// }

// class Server {
//   constructor(request) {
//     this.request = request;
//     this.response = null;
//   }

//   json() {
//     console.log(this.request);
//     this.response = fetch(this.request).then((successResponse) => {
//       if (successResponse.status != 200) {
//         return null;
//       } else {
//         return successResponse.json();
//       }
//     }, (failResponse) => {
//       return null;
//     });
//   }
// }

// function sendServer() {
//   dataLogin.animationClick();
//   const sendServer = new Server('http://jsonplaceholder.typicode.com/users?_limit=1');
//   new Promise((resolve, reject) => {
//     try {
//       sendServer.json();
//       resolve(sendServer.response);
//     } catch (error) {
//       reject(error);
//     }
//   })
//       .then((resolve) => {
//         setTimeout(() => {
//           printUserInfo(resolve[0].email);
//           answerServer(dataLogin.htmlCode,
//               '<button id="data-success" disabled="true">Успешно!</button>',
//               'right__column-success'
//           );
//         }, 2000);
//       })
//       .then(() => {
//         setTimeout(() => {
//           refreshElement(new Button('data-success').htmlCode,
//               '<button id="data-logout">Выйти</button>',
//               'right__column-default'
//           );
//         }, 4000);
//       })
//       .catch((reject) => {
//         console.log(reject);
//         answerServer(dataLogin.htmlCode,
//             '<button id="data-login">Ошибка!</button>',
//             'right__column-error'
//         );
//       });
// }

// function answerServer(id, newButtonElement, newClassNameParentNodeElement) {
//   const parentNodeElement = id.parentNode.parentNode;
//   console.log(id);
//   console.log(id.parentNode);
//   console.log(parentNodeElement);
//   const newContainer = document.createElement('div');
//   newContainer.classList.add(newClassNameParentNodeElement);
//   newContainer.innerHTML = newButtonElement;
//   id.parentNode.nextElementSibling.style.display = 'none';
//   id.parentNode.remove();
//   parentNodeElement.insertBefore(newContainer, parentNodeElement.firstChild);
// }

// function refreshElement(id, newButtonElement, newClassNameParentNodeElement) {
//   answerServer(id, newButtonElement, newClassNameParentNodeElement);
// }

// function printUserInfo(email) {
//   const info = document.getElementById('userInfo');
//   info.children[0].innerHTML = 'Вы вошли, как ';
//   info.children[1].innerHTML = email;
// }
