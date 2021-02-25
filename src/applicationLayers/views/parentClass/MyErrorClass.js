export class ApplicationError extends Error {
  constructor(name, message) {
    super(message);
    this.name = name;
  }
}
