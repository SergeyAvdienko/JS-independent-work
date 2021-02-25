export class ScheduleRepositorys {
  constructor(datetime = null) {
    this.schedule = this.create(datetime);
  }
  create(datetime) {
    if (!datetime) return {};
    return {
      '08clock': {
        parent: {
          tag: 'div',
          props: [{class: 'list__block-confirm 08clock'}], children: []},
        children: [
          {
            tag: 'button',
            props: [{class: 'list__confirm'}], children: ['Записаться'],
          },
        ],
      },
      '09clock': {
        parent: {
          tag: 'div',
          props: [{class: 'list__block-confirm 09clock'}], children: []},
        children: [
          {
            tag: 'button',
            props: [{class: 'list__confirm'}], children: ['Записаться'],
          },
        ],
      },
      '10clock': {
        parent: {
          tag: 'div',
          props: [{class: 'list__block-confirm 10clock'}], children: []},
        children: [
          {
            tag: 'button',
            props: [{class: 'list__confirm'}], children: ['Записаться'],
          },
        ],
      },
      '11clock': {
        parent: {
          tag: 'div',
          props: [{class: 'list__block-confirm 11clock'}], children: []},
        children: [
          {
            tag: 'button',
            props: [{class: 'list__confirm'}], children: ['Записаться'],
          },
        ],
      },
      '12clock': {
        parent: {
          tag: 'div',
          props: [{class: 'list__block-confirm 12clock'}], children: []},
        children: [
          {
            tag: 'button',
            props: [{class: 'list__confirm'}], children: ['Записаться'],
          },
        ],
      },
      '13clock': {
        parent: {
          tag: 'div',
          props: [{class: 'list__block-confirm 13clock'}], children: []},
        children: [
          {
            tag: 'button',
            props: [{class: 'list__confirm'}], children: ['Записаться'],
          },
        ],
      },
      '14clock': {
        parent: {
          tag: 'div',
          props: [{class: 'list__block-confirm 14clock'}], children: []},
        children: [
          {
            tag: 'button',
            props: [{class: 'list__confirm'}], children: ['Записаться'],
          },
        ],
      },
      '15clock': {
        parent: {
          tag: 'div',
          props: [{class: 'list__block-confirm 15clock'}], children: []},
        children: [
          {
            tag: 'button',
            props: [{class: 'list__confirm'}], children: ['Записаться'],
          },
        ],
      },
      '16clock': {
        parent: {
          tag: 'div',
          props: [{class: 'list__block-confirm 16clock'}], children: []},
        children: [
          {
            tag: 'button',
            props: [{class: 'list__confirm'}], children: ['Записаться'],
          },
        ],
      },
      '17clock': {
        parent: {
          tag: 'div',
          props: [{class: 'list__block-confirm 17clock'}], children: []},
        children: [
          {
            tag: 'button',
            props: [{class: 'list__confirm'}], children: ['Записаться'],
          },
        ],
      },
    };
  }
}
