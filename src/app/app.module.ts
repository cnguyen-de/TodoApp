import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {todoReducer} from './store/reducers/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todos: todoReducer}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
