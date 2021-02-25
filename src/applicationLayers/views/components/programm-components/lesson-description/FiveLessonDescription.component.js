/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/lesson-description/DefaultLessonDescriptionClass.js';

const options = {
  number: '5',
  goals: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Изучить две модели работы с возражениями. Первая с уточняющими вопросами и вторая без каких-либо вопросов.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Я расскажу о практике работы с двумя моделями одновременно.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Рассмотрим список из 50+ популярных возражений. Пройдем каждое из них. ' +
      'Плюс мастер-класс тренера на возражения вне списка от обучаемого.',
    ]},
  ],
  skills: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Навык позитивной реакции. ']},
      {tag: 'span', props: {}, children: [
        'Это умение отвечать "Круто! Теперь я знаю, что вам предложить ....", даже если вы попали в самую безнадежную ситуацию.',
      ]},
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Навык работы с возражениями. ']},
      {tag: 'span', props: {}, children: [
        'Это умение безошибочно определять тип возражения и отвечать на него используя две модели (с вопросами и без них).',
      ]},
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Навык определения потребности. ']},
      {tag: 'span', props: {}, children: [
        'Это умение обьяснять какая истинная потребность лежит в основе озвученного клиентом возражения.',
      ]},
    ]},
  ],
  class: 'content__block-lesson-container-default',
};


class FiveLessonDescription extends DefaultClass {
  constructor(lessonClass) {
    super(options, lessonClass);
  }
}

export class FiveLessonDescriptionFactory {
  constructor(lessonClass) {
    this.list = {
      errorLogin: new FiveLessonDescription(lessonClass).toErrorLogin(),
      errorSettings: new FiveLessonDescription(lessonClass).toErrorSettings(),
      errorPay: new FiveLessonDescription(lessonClass).toErrorPay(),
      warning: new FiveLessonDescription(lessonClass).toWarning(),
      success: new FiveLessonDescription(lessonClass).toSuccess(),
      successLast: new FiveLessonDescription(lessonClass).toSuccessLast(),
      default: new FiveLessonDescription(lessonClass).toDefault(),
    };
  }
  toReady(type = 'errorLogin') {
    const LessonClass = this.list[type];
    return LessonClass;
  }
}
