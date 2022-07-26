import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../model/books.model';
import { BooksService } from '../product-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  url : string = "";

  @Input()
  livro!: Book;
  //livro: Array<Book> = [];

  constructor() {

   }

  ngOnInit(): void {



  }

}
