import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookModel } from './models/bookModel';

@Injectable({
    providedIn: 'root'
  })
export class HttpService {
    prodUrl = 'http://localhost:18526/api/Book';


    constructor(private http: HttpClient) { }

    public getAllBooks() {
        return this.http.get<BookModel[]>(this.prodUrl).toPromise();
    }
    
    public addNewBook(BookModel: BookModel){
        return this.http.post(this.prodUrl, BookModel);
    }
    
    // public updateBook(id){

    //     return this.http.post(this.prodUrl. + "/" + id);
    // }
}