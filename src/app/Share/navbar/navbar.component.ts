import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public searchTerm: string = '';
  public totalItems: number = 0;
  products: any[] | undefined;

  constructor(private prd: ColorService, private router: Router) { }

  ngOnInit(): void {
    this.prd.getProduct().subscribe((res: any[]) => {
      this.products = res;
    });
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.prd.search.next(this.searchTerm);
  }

  searchGender(gender: string) {
    this.prd.filterType.next(gender);
    this.router.navigate(['/Product/product-list']);
  }
}