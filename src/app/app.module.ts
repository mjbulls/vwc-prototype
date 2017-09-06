import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { HelloComponent } from './hello/hello.component';

import { HelloService } from './hello/hello.service';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ HelloService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
