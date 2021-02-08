export class UniqueIDModel {
  constructor(elementAffected) {
    this.elementAffected = elementAffected;
    this.elementAffectedUID = this.uID(elementAffected);
  }

  uID(elementAffected) {
    this.elementAffectedUID = elementAffected.getAttribute('data-uniqID');
    return this.elementAffectedUID;
  }
}
