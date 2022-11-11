import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncDelayService {

  constructor() { }

  static delay(ms:number){
    return new Promise(resolve => setTimeout(resolve,ms));
  }
}
