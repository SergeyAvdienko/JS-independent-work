/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/lesson-description/DefaultLessonDescriptionClass.js';

const options = {
  number: '2',
  goals: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Проверить на практике изученные ранее навыки в кейсах.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Разобрать практические задания выданные для самостоятельной отработки.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Проверить устойчивость поведенческого индикатора - "Способен заканчивать любую ' +
      'свою мысль альтернативным вопросом на встрече с клиентом".',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Выдать практические задания для проверки результатов обучения.',
    ]},
  ],
  skills: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Ожидаемый результат 1-2 занятия. ']},
      {tag: 'span', props: {}, children: [
        'После первого и второго занятия мы должны заметить два изменения. ' +
        'Во-первых, вы должны научиться заканчивать любую свою мысль альтернативным вопросом. ' +
        'Во-вторых, количество людей отвечающих вам "ни-да-ни-нет" должно стремиться к 0.',
      ]},
    ]},
  ],
  class: 'content__block-lesson-container-default',
  titleSecond: 'Ожидаемый результат',
};

class TwoLessonDescription extends DefaultClass {
  constructor(lessonClass) {
    super(options, lessonClass);
  }
}

export class TwoLessonDescriptionFactory {
  constructor(lessonClass) {
    this.list = {
      errorLogin: new TwoLessonDescription(lessonClass).toErrorLogin(),
      errorSettings: new TwoLessonDescription(lessonClass).toErrorSettings(),
      errorPay: new TwoLessonDescription(lessonClass).toErrorPay(),
      warning: new TwoLessonDescription(lessonClass).toWarning(),
      success: new TwoLessonDescription(lessonClass).toSuccess(),
      successLast: new TwoLessonDescription(lessonClass).toSuccessLast(),
      default: new TwoLessonDescription(lessonClass).toDefault(),
    };
  }
  toReady(type = 'errorLogin') {
    const LessonClass = this.list[type];
    return LessonClass;
  }
}
