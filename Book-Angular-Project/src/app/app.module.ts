import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponentComponent } from './book-component/book-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
//import { MatTableModule, MatTable } from '@angular/material/table';
import { Routes } from '@angular/router';
import { MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';


const routes: Routes = [
  {
    path: 'books',
    component: BookComponentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    BookComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatTableModule,
      FormsModule,
     ReactiveFormsModule,
     MatDialogModule
     


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
