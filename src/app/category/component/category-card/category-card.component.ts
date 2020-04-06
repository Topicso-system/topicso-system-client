import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.sass']
})
export class CategoryCardComponent implements OnInit {

  @Input('category')
  category: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
