import { Component, OnInit } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name: string;
  hello: string;

  constructor(private helloService: HelloService) { }

  ngOnInit() {
    
  }

  say() {
    this.hello = this.helloService.sayHello(this.name);
  }
}
