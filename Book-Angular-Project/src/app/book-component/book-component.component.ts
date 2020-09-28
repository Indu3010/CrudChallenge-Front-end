import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BookModel } from 'src/models/bookModel';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {
  @ViewChild('openEventsDialog') openEventsDialog: TemplateRef<any>;
  @ViewChild('editBookDialog') editBookDialog: TemplateRef<any>;

  displayedColumns: string[] = ['id','title','author', 'publisher','stock', 'edit', 'delete'];
  dataSource: MatTableDataSource<BookModel>;

  Book: BookModel;
  Books: BookModel[] = [];

  BookElement: BookModel;
  BookElements: BookModel[] = [];

  NewBookForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    publisher: new FormControl(''),
    stock: new FormControl('')
  });
  UpdateBookForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    publisher: new FormControl(''),
    stock: new FormControl('')
  });

  id: string;
  author: string;
  title: string;
  publisher: string;
  stock:string;
  updateisvalid: boolean;
  newisvalid: boolean;

  constructor(
    private httpClient: HttpClient,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    const url = "http://localhost:18526/api/Book";

    this.httpClient.get(url).subscribe((data: BookModel[]) => {
      this.Books = data;
      this.dataSource = new MatTableDataSource<BookModel>(this.Books);
    });
  }
  
  addNewBook(){
    const url = "http://localhost:18526/api/Book/";
      this.httpClient.post(url, this.NewBookForm.value).subscribe(data => {
          console.log(data);
          this.getAllBooks();
          this.newisvalid = true;
    });
  }
      
  deleteBook(navigateTo: string, id){
    const url = "http://localhost:18526/api/Book/" + id;
    console.log(navigateTo);
    console.log(id);
      this.httpClient.delete(url).subscribe(data => {
          console.log(data);
          this.getAllBooks();
      });
  }

  addnew(){
    console.log("hi");
    let dialogRef = this.dialog.open(this.openEventsDialog);
  }

  editBook(navigateTo: string, id){
    console.log(id);
    const url = "http://localhost:18526/api/Book/" + id;
    this.id = id;
    this.httpClient.get(url).subscribe((data: BookModel) => {
      this.Book = data;
      this.author = this.Book.author;
      this.publisher = this.Book.publisher;
      this.title = this.Book.title;
      this.stock = this.Book.stock;
    });
    let dialogRef = this.dialog.open(this.editBookDialog);
  }
  
  updateBook(){
    const url = "http://localhost:18526/api/Book/" + this.id;
      this.httpClient.post(url, this.UpdateBookForm.value).subscribe(data => {
      console.log(data);
      this.getAllBooks();
      this.updateisvalid = true;
      });
  }
  

}
