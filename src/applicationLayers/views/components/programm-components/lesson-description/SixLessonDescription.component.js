/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/lesson-description/DefaultLessonDescriptionClass.js';

const options = {
  number: '6',
  goals: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Проверить на практике изученные ранее навыки в кейсах.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Разобрать практические задания выданные для самостоятельной отработки.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Отработать навык работы с возражениями в кейсах с тренером. Будут кейсы, практически без остановок.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Выдать практические задания для проверки результатов обучения.',
    ]},
  ],
  skills: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Ожидаемый результат 5-6 занятия. ']},
      {tag: 'span', props: {}, children: [
        'После пятого и шестого занятия мы будем отслеживать два изменения. ' +
        'Во-первых, вы должны без длительной паузы отвечать на генерируемые клиентом возражения. ' +
        'Во-вторых, количество взятых обязательств клиентами должно существенно прирости (конверсия в районе 12-14%).',
      ]},
    ]},
  ],
  class: 'content__block-lesson-container-default',
  titleSecond: 'Ожидаемый результат',
};

class SixLessonDescription extends DefaultClass {
  constructor(lessonClass) {
    super(options, lessonClass);
  }
}

export class SixLessonDescriptionFactory {
  constructor(lessonClass) {
    this.list = {
      errorLogin: new SixLessonDescription(lessonClass).toErrorLogin(),
      errorSettings: new SixLessonDescription(lessonClass).toErrorSettings(),
      errorPay: new SixLessonDescription(lessonClass).toErrorPay(),
      warning: new SixLessonDescription(lessonClass).toWarning(),
      success: new SixLessonDescription(lessonClass).toSuccess(),
      successLast: new SixLessonDescription(lessonClass).toSuccessLast(),
      default: new SixLessonDescription(lessonClass).toDefault(),
    };
  }
  toReady(type = 'errorLogin') {
    const LessonClass = this.list[type];
    return LessonClass;
  }
}
