/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import {UniqueIDModel} from '@models/UniqueID.model.js';
import {UpdateState} from '@models/UpdateState.model.js';
import {Download} from '@models/Download.model.js';
import {UpdateListenerModel} from '@models/UpdateListener.model.js';
import {Validation} from '@models/Validation.model.js';
import {UserState} from '@models/UserState.model.js';

class Facade {
  constructor(model, requestArray) {
    this.Model = model;
    this.requestArray = requestArray;
  }
  reply() {
    // Результат работы выбранной модели
  }
  addRequest() {
    return this.reply(this.requestArray);
  }
}

class UID extends Facade {
  reply() {
    const uID = new this.Model(this.requestArray[1], this.requestArray[2]);
    return uID.elementAffectedUID;
  }
}

class Update extends Facade {
  reply() {
    new this.Model(this.requestArray[1], this.requestArray[2]).update();
  }
}

class DownloadFile extends Facade {
  reply() {
    return new this.Model().downloadFile(this.requestArray[1]);
  }
}

class UpdateListenerElements extends Facade {
  reply() {
    return new this.Model().addListener(this.requestArray[1]);
  }
}

class ValidationSkypeLogin extends Facade {
  reply() {
    const validation = new this.Model();
    let resultat = false;
    resultat = validation.validationExistence(this.requestArray[1]);
    if (!resultat) return resultat;
    resultat = validation.validationSkypeLogin(this.requestArray[1]);
    return resultat;
  }
}

class SetValueInputSkypeLogin extends Facade {
  reply() {
    return new this.Model().getSkype(this.requestArray[1]);
  }
}

class ValidationPathField extends Facade {
  reply() {
    const validation = new this.Model();
    let resultat = false;
    resultat = validation.validationExistence(this.requestArray[1]);
    if (!resultat) return resultat;
    resultat = validation.validationPathField(this.requestArray[1]);
    return resultat;
  }
}

class SetValueInputPathGoogleField extends Facade {
  reply() {
    return new this.Model().getField(this.requestArray[1]);
  }
}

function registryCommand(requestArray = []) {
  switch (requestArray[0]) {
    case 'Присвой UID для $elementAffected, на который я буду воздействовать':
      return new UID(UniqueIDModel, requestArray).addRequest();
    case 'Измени состояние $elementAffected, на который я воздействую':
      return new Update(UpdateState, requestArray).addRequest();
    case 'Скачай файл для пользователя':
      return new DownloadFile(Download, requestArray).addRequest();
    case 'Обнови функцию слушателя у всех элементов c [...idElementEffected] после перерендеринга':
      return new UpdateListenerElements(UpdateListenerModel, requestArray).addRequest();
    case 'Валидируй данные введенные пользователем (skypeLogin)':
      return new ValidationSkypeLogin(Validation, requestArray).addRequest();
    case 'Измени состояние InputSkypeLogin.value':
      return new SetValueInputSkypeLogin(UserState, requestArray).addRequest();
    case 'Валидируй данные введенные пользователем (pathGoogleField)':
      return new ValidationPathField(Validation, requestArray).addRequest();
    case 'Измени состояние inputPathGoogleField.value':
      return new SetValueInputPathGoogleField(UserState, requestArray).addRequest();
    default:
      throw Error('Нет запрашиваемого Фасада');
  }
}

// export function
export const assignUID = ($elementAffected, updateVDOM = false) => {
  try {
    return registryCommand(
        [
          'Присвой UID для $elementAffected, на который я буду воздействовать',
          $elementAffected,
          updateVDOM,
        ]
    );
  } catch (error) {
    throw Error('Проверьте указан ли elementAffected в элементе массива arrayButton или ArrayInput ' +
     'инициализируемых при создании экземпляра класса ....component.js');
  }
};
export const changeState = (context, options) => {
  return registryCommand(
      [
        'Измени состояние $elementAffected, на который я воздействую',
        context,
        options,
      ]
  );
};
export const download = (link) => {
  return registryCommand(
      [
        'Скачай файл для пользователя',
        link,
      ]
  );
};
export const addListener = (arrayID) => {
  return registryCommand(
      [
        'Обнови функцию слушателя у всех элементов c [...idElementEffected] после перерендеринга',
        arrayID,
      ]
  );
};
// Требуется, когда при нажатии на элемент требуется атаковать несколько
// элементов поочередно
export const createAbstractCopyIdElementEffected = (idElementEffected) => {
  const idElementEffectedArray = idElementEffected.split('_');
  if (!idElementEffectedArray[1]) idElementEffectedArray[1] = 0;
  idElementEffected = `${idElementEffectedArray[0]}_${Number(idElementEffectedArray[1]) + 1}`;
  return idElementEffected;
};
export const validationSkypeLogin = (letters) => {
  return registryCommand(
      [
        'Валидируй данные введенные пользователем (skypeLogin)',
        letters,
      ]
  );
};
export const setValueInputSkypeLogin = ($element) => {
  return registryCommand(
      [
        'Измени состояние InputSkypeLogin.value',
        $element,
      ]
  );
};
export const validationPathField = (letters) => {
  return registryCommand(
      [
        'Валидируй данные введенные пользователем (pathGoogleField)',
        letters,
      ]
  );
};
export const setValueInputPathGoogleField = ($element) => {
  return registryCommand(
      [
        'Измени состояние inputPathGoogleField.value',
        $element,
      ]
  );
};
