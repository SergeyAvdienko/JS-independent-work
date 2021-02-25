export class Input {
  constructor(
      idElementEffected = 'На вход принимаю ID кнопки'
  ) {
    this.idElementEffected = idElementEffected;
    this.$elementEffected = document.getElementById(idElementEffected);
  }
  // Добавляет событие на кнопку
  addEvent(foo) {
    this.$elementEffected?.addEventListener( 'change', foo );
  }
}
