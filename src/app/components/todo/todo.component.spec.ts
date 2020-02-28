import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {todoReducer} from '../../store/reducers/todo.reducer';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoComponent,
      ],
      imports: [
        FormsModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({todos: todoReducer}, {
            runtimeChecks: {
              strictStateImmutability: true,
              strictActionImmutability: true,
            }
          }
        ),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
