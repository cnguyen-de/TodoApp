import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { EmptyComponent } from './components/empty/empty.component';
import { TodoComponent } from './components/todo/todo.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {StoreModule} from '@ngrx/store';
import {todoReducer} from './store/reducers/todo.reducer';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        EmptyComponent,
        TodoComponent
      ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        RouterTestingModule,
        StoreModule.forRoot({todos: todoReducer}, {
            runtimeChecks: {
              strictStateImmutability: true,
              strictActionImmutability: true,
            }
          }
        ),
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'TodoApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('TodoApp');
  });
});
