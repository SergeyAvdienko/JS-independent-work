import './module';
import './scss/index.scss';
import './plan.gif';

console.log('Привет, Сергей! Это файл index.js');
// document.getElementById().

class Button {
  constructor(id = null, title = null) {
    this.id = id;
    this.title = title;
    this.htmlCode = document.getElementById(id);
  }
  addEvent(foo) {
    try {
      this.htmlCode.addEventListener( 'click', foo );
    } catch (error) {
      console.log(error);
    }
  }
  animationClick() {
    try {
      this.htmlCode.parentNode.style.display = 'none';
      this.htmlCode.parentNode.nextElementSibling.style.display = 'flex';
    } catch (error) {
      console.log(error);
    }
  }
}

class Server {
  constructor(request) {
    this.request = request;
    this.response = null;
  }

  json() {
    console.log(this.request);
    this.response = fetch(this.request).then((successResponse) => {
      if (successResponse.status != 200) {
        return null;
      } else {
        return successResponse.json();
      }
    }, (failResponse) => {
      return null;
    });
  }
}

const openSchedule = new Button('data-open-shedule');
const closeSchedule = new Button('data-close-shedule');
const dataLogin = new Button('data-login');

openSchedule.addEvent(setShedule);
closeSchedule.addEvent(setShedule);
dataLogin.addEvent(sendServer);

function sendServer() {
  dataLogin.animationClick();
  const sendServer = new Server('http://jsonplaceholder.typicode.com/users?_limit=1');
  new Promise((resolve, reject) => {
    try {
      sendServer.json();
      resolve(sendServer.response);
    } catch (error) {
      reject(error);
    }
  })
      .then((resolve) => {
        console.log(resolve);
        setTimeout(() => {
          printUserInfo(resolve[0].email);
          answerServer(dataLogin.htmlCode,
              '<button id="data-success" disabled="true">Успешно!</button>',
              'right__column-success'
          );
        }, 2000);
      })
      .then(() => {
        setTimeout(() => {
          refreshElement(new Button('data-success').htmlCode,
              '<button id="data-logout">Выйти</button>',
              'right__column-default'
          );
        }, 4000);
      })
      .catch((reject) => {
        console.log(reject);
        answerServer(dataLogin.htmlCode,
            '<button id="data-login">Ошибка!</button>',
            'right__column-error'
        );
      });
}

function setShedule() {
  const schedule = document.getElementsByClassName('site__main-schedule')[0];
  schedule.getAttribute('data-state-shedule') === 'false' ?
  sheduleState(schedule, 'true', 'block'):
  sheduleState(schedule, 'false', 'none');

  function sheduleState(schedule, attrStr, styleStr) {
    schedule.setAttribute('data-state-shedule', `${attrStr}`);
    if (attrStr === 'true') {
      schedule.classList.remove('site__main-shedule-shift-left');
      schedule.classList.add('site__main-shedule-shifh-right');
    } else {
      schedule.classList.remove('site__main-shedule-shifh-right');
      schedule.classList.add('site__main-shedule-shift-left');
    }
  }
}

function answerServer(id, newButtonElement, newClassNameParentNodeElement) {
  const parentNodeElement = id.parentNode.parentNode;
  console.log(id);
  console.log(id.parentNode);
  console.log(parentNodeElement);
  const newContainer = document.createElement('div');
  newContainer.classList.add(newClassNameParentNodeElement);
  newContainer.innerHTML = newButtonElement;
  id.parentNode.nextElementSibling.style.display = 'none';
  id.parentNode.remove();
  parentNodeElement.insertBefore(newContainer, parentNodeElement.firstChild);
}

function refreshElement(id, newButtonElement, newClassNameParentNodeElement) {
  answerServer(id, newButtonElement, newClassNameParentNodeElement);
}

function printUserInfo(email) {
  const info = document.getElementById('userInfo');
  info.children[0].innerHTML = 'Вы вошли, как ';
  info.children[1].innerHTML = email;
}
