import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }   from './app.component';
import { MarioComponent } from './mario/mario.component';
import { CardComponent }  from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    MarioComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
