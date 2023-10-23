import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: any[] = [];
  searchkey: string = '';
  p: number = 1;
  filteredProducts: any[] = [];
  selectedGender: any

  constructor(private prd: ColorService) { }

  ngOnDestroy(): void {
    // this.prd.filterType.unsubscribe();
  }

  ngOnInit(): void {
    this.prd.getProduct().subscribe((res: any[]) => {
      this.products = res;
      this.filterProducts(); // Lọc sản phẩm khi khởi tạo
    });
    this.prd.search.subscribe((val: string) => {
      this.searchkey = val;
      this.filterProducts(); // Lọc sản phẩm khi tìm kiếm thay đổi
    });
    this.prd.filterType.subscribe((e) => {
      if (!!e) {
        this.selectedGender = e;
        this.filterProducts(); // Lọc sản phẩm khi giới tính thay đổi
      }
    });
  }

  filterProducts(): void {
    if (this.selectedGender === ' ') {
      this.filteredProducts = this.products.filter((el) => {
        return el.ShoeName.toLowerCase().includes(this.searchkey.toLowerCase());
      });
    } else {
      this.filteredProducts = this.products.filter((el) => {
        return el.gender === this.selectedGender && el.ShoeName.toLowerCase().includes(this.searchkey.toLowerCase());
      });
    }

  }
}