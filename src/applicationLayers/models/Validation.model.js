export class Validation {
  validationExistence(letters) {
    if (letters) return true;
    return false;
  }
  validationLength(letters, length) {
    if (letters.length > length) return true;
    return false;
  }
  validationEN(letters) {
    const rules = /^[?!,.a-zA-Z0-9\s]+$/;
    if (rules.test(letters)) return true;
    return false;
  }
  validationSkypeLogin(letters) {
    const rules = /^[a-z][a-z0-9_\-.,]{5,31}$|i/;
    if (rules.test(letters)) return true;
    return false;
  }
  validationPathField(letters) {
    const rules = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    if (rules.test(letters)) return true;
    return false;
  }
}
