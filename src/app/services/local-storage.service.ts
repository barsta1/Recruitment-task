export class LocalStorageService {
  /**
   *
   * @param {string} id - Local Storage item identifier
   * @param {unknown} value -  value to be written to Local Storage
   */
  static setItem(id: string, value: unknown): void {
    localStorage.setItem(id, JSON.stringify(value));
  }

  /**
   *
   * @param {string} id - Local Storage item identifier
   * @returns parsed item from the Local Storage
   */
  static getItem(id: string): any {
    return JSON.parse(localStorage.getItem(id));
  }
}
