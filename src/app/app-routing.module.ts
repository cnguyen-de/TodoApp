import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {EmptyComponent} from './components/empty/empty.component';
import {TodoComponent} from './components/todo/todo.component';


const appRoutes: Routes = [
  { path: '',   redirectTo: '/todo', pathMatch: 'full' },
  { path: 'empty', component: EmptyComponent},
  { path: 'todo', component: TodoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
