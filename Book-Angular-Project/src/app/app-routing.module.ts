import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponentComponent } from './book-component/book-component.component';

const routes: Routes = [
  { path: 'books', component: BookComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
