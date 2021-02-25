/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/lesson-description/DefaultLessonDescriptionClass.js';

const options = {
  number: '1',
  skills: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Навык составления цепочек событий. ']},
      {tag: 'span', props: {}, children: [
        'Освоив этот навык вы всегда будете знать, какое обязательство передать клиенту. У вас ' +
    'не будет бесцельных встреч. И клиенту будет намного проще, ведь он будет точно знать зачем ' +
    'ему то, что вы предлагаете. Что вы хотите от него сейчас и что вам будет нужно потом.',
      ]},
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Навык работы с новостями. ']},
      {tag: 'span', props: {}, children: [
        'Вы сможете доносить информацию до клиента в любой момент общения. В любом канале ' +
    'коммуникации будь это социальные сети или живое общение. Мы будем учиться делать это на ' +
    'основе одного из инструментов журналистики "Перевернутая пирамида". Этот навык особенно ' +
    'важен тем, кто не знает, как поддерживать беседу нужное количество времени.',
      ]},
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Навык установления контакта. ']},
      {tag: 'span', props: {}, children: [
        'Мы научимся начинать беседу с вопросов, которые будут заставлять человека вспомнить ' +
    'что-то. И будем делать все, чтобы на этом этапе вы перестали задавать клиенту вопросы, ' +
    'которые заставляют его думать. Это тот ключ, который позволит вам сделать разговор живым и ' +
    'интересным для всех его участников.',
      ]},
    ]},
  ],
  goals: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Разберемся с понятием этапы продаж. ' +
      'Я покажу поведенческие индикаторы, которые говорят о том, что пора заканчивать один этап и ' +
      'переходить к другому. То есть вы будете действовать не интуитивно, а используя понятные ' +
      'проявления поведения собеседника.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Разберемся с понятием цель продаж. ' +
      'Будем исходить из того, что прямой вопрос клиенту, - "Вы будете покупать или нет?" является ' +
      'работающей практикой, для крайне примитивного товара. Если ваш продукт/услуга примитивен, то ' +
      'все ок. А если нет? Тут нужен sales-процесс. Разработаем его вместе.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Расскажу о том, как правильно вступать в разговор ' +
      'с человеком и устанавливать контакт. Будем тренировать необходимые навыки, ' +
      'для профессиональной работы с этапом "Установление контакта".',
    ]},
  ],
  class: 'content__block-lesson-container-default',
};

class OneLessonDescription extends DefaultClass {
  constructor(lessonClass) {
    super(options, lessonClass);
  }
}

export class OneLessonDescriptionFactory {
  constructor(lessonClass) {
    this.list = {
      errorLogin: new OneLessonDescription(lessonClass).toErrorLogin(),
      errorSettings: new OneLessonDescription(lessonClass).toErrorSettings(),
      errorPay: new OneLessonDescription(lessonClass).toErrorPay(),
      warning: new OneLessonDescription(lessonClass).toWarning(),
      success: new OneLessonDescription(lessonClass).toSuccess(),
      successLast: new OneLessonDescription(lessonClass).toSuccessLast(),
      default: new OneLessonDescription(lessonClass).toDefault(),
    };
  }
  toReady(type = 'errorLogin') {
    return this.list[type];
  }
}
