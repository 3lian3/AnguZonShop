import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: any): void {
    if (window?.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem(key: string): any {
    try {
      const item: any = window.localStorage.getItem(key);
      return JSON.parse(item);
    } catch (error) {
      return null;
    }
  }

  removeItem(key: string): void {
    if (window?.localStorage) {
      localStorage.removeItem(key);
    }
  }

  clear(): void {
    if (window?.localStorage) {
      localStorage.clear();
    }
  }
}
