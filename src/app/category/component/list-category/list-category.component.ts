import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.sass']
})
export class ListCategoryComponent implements OnInit {

  categories: Array<any>;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.categoryService.getMainCategories().subscribe(data => {
      this.categories = data;
    });
  }

  openCategory(categoryId) {
    console.log(categoryId);
    this.router.navigate(['/category', categoryId]);
  }
}
