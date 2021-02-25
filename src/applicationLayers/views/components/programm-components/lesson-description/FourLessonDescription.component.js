/* eslint-disable max-len */
import {DefaultClass} from '@views/components/programm-components/lesson-description/DefaultLessonDescriptionClass.js';

const options = {
  number: '4',
  goals: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Проверить на практике изученные ранее навыки в кейсах.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Разобрать практические задания выданные для самостоятельной отработки.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Проверить навык мышления в рамках подхода JTBD. Мы будем тренироваться комментировать ' +
      'задаваемые вопросы клиенту - "Почему я вас спрашиваю об этом....". ' +
      'Данное упражнение является ключом к пониманию этапа выявления потребностей.',
    ]},
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      'Выдать практические задания для проверки результатов обучения.',
    ]},
  ],
  skills: [
    {tag: 'li', props: {class: 'content__block-lesson-container-footer-ol-li'}, children: [
      {tag: 'b', props: {}, children: ['Ожидаемый результат 3-4 занятия. ']},
      {tag: 'span', props: {}, children: [
        'После третьего и четвертого занятия мы будем отслеживать два изменения. ' +
        'Во-первых, вы должны демонстрировать устойчивый навык презентации всего чего угодно в рамках подхода JTBD. ' +
        'Во-вторых, вы контролируете время контакта с клиентом (удержание на линии в телефонной коммуникации, удержание в переговорной комнате при очном общении).',
      ]},
    ]},
  ],
  class: 'content__block-lesson-container-default',
  titleSecond: 'Ожидаемый результат',
};

class FourLessonDescription extends DefaultClass {
  constructor(lessonClass) {
    super(options, lessonClass);
  }
}

export class FourLessonDescriptionFactory {
  constructor(lessonClass) {
    this.list = {
      errorLogin: new FourLessonDescription(lessonClass).toErrorLogin(),
      errorSettings: new FourLessonDescription(lessonClass).toErrorSettings(),
      errorPay: new FourLessonDescription(lessonClass).toErrorPay(),
      warning: new FourLessonDescription(lessonClass).toWarning(),
      success: new FourLessonDescription(lessonClass).toSuccess(),
      successLast: new FourLessonDescription(lessonClass).toSuccessLast(),
      default: new FourLessonDescription(lessonClass).toDefault(),
    };
  }
  toReady(type = 'errorLogin') {
    const LessonClass = this.list[type];
    return LessonClass;
  }
}
