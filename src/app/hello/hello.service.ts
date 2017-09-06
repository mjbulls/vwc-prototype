import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {

  constructor() { }

  sayHello(name: String) : string {
    return `Hello ${name}`;
  }

}
