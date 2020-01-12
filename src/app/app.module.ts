import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PersionComponent } from './persion/persion.component';
import { ListPerisionComponent } from './list-perision/list-perision.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PersionComponent, ListPerisionComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
