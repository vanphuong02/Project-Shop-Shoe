import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { Route } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public searchTerm: string = ''
  public totalItems: number = 0
  public gender: any
  products: any
  @Output() onclick = new EventEmitter<any>();
  constructor(private prd: ColorService) { }
  ngOnInit(): void {
    this.prd.getProduct().subscribe(res => {
      this.products = res
    })

  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.prd.search.next(this.searchTerm);
  }
  getall() {
    this.onclick.emit(
      this.prd.getProduct().subscribe(res => {
        this.products = res
      })
    );

  }
  searchNam() {
    this.prd.getProduct().subscribe(res => {
      this.products = res
      this.products = this.products.filter((res: { gender: string; }) => {
        return res.gender === 'Nam'
      })
    })
  }
  searchAll() {
    this.getall()
  }
  searchNu() {
    this.prd.getProduct().subscribe(res => {
      this.products = res
      this.products = this.products.filter((res: { gender: string; }) => {
        return res.gender === 'Nữ'
      })
    })
  }


}
