/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/lesson-description/DefaultLessonDescriptionClass.js';

const options = {
  number: '8',
  goals: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Проверить на практике изученные ранее навыки в кейсах.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Разобрать практические задания выданные для самостоятельной отработки.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Отработать навык убеждения и работы с сомнениями в кейсах с тренером. ' +
      'Будет 1-2 кейса с детальным разбором и мастер-классом тренера.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Выдать практические задания для закрепления материалов программы и самостоятельного совершенствования изученных навыков.',
    ]},
  ],
  skills: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Ожидаемый результат 7-8 занятия. ']},
      {tag: 'span', props: {}, children: [
        'После седьмого и восьмого занятия мы будем отслеживать два изменения. ' +
        'Во-первых, вы способны сформировать точку зрения на вопрос/предмет/ситуацию у собеседника. ' +
        'Во-вторых, прирост количества испольненных обязательств клиентами.',
      ]},
    ]},
  ],
  class: 'content__block-lesson-container-default',
  titleSecond: 'Ожидаемый результат',
};

class EightLessonDescription extends DefaultClass {
  constructor(lessonClass) {
    super(options, lessonClass);
  }
}

export class EightLessonDescriptionFactory {
  constructor(lessonClass) {
    this.list = {
      errorLogin: new EightLessonDescription(lessonClass).toErrorLogin(),
      errorSettings: new EightLessonDescription(lessonClass).toErrorSettings(),
      errorPay: new EightLessonDescription(lessonClass).toErrorPay(),
      warning: new EightLessonDescription(lessonClass).toWarning(),
      success: new EightLessonDescription(lessonClass).toSuccess(),
      successLast: new EightLessonDescription(lessonClass).toSuccessLast(),
      default: new EightLessonDescription(lessonClass).toDefault(),
    };
  }
  toReady(type = 'errorLogin') {
    const LessonClass = this.list[type];
    return LessonClass;
  }
}
