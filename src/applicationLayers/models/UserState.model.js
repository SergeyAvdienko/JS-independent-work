
import {StorageApp} from '@data/Storage.app.js';

export class UserState {
  constructor(user = StorageApp.user) {
    this.email = user.email;
    this.skype = user.skype;
    this.field = user.field;
    this.today = user.today;
    this.progress = user.progress;
    this.helper = user.helper;
    this.description = user.description;
    this.lookingNow = user.lookingNow;
    this.schedule = user.schedule;
    this.trackers = user.trackers;
  }
  getEmail($element) {
    $element.textContent = this.email;
  }
  getSkype($element) {
    $element.value = this.skype;
  }
  getField($element) {
    $element.value = this.field;
  }
  getToday($element) {
    $element.textContent = this.today;
  }
  getProgress() {
    return this.progress;
  }
  getHelper() {
    return this.helper;
  }
  getDescription() {
    return this.description;
  }
  getLookingNow() {
    return this.lookingNow;
  }
  getSchedule() {
    return this.schedule;
  }
  getTrackers() {
    return this.trackers;
  }
}
