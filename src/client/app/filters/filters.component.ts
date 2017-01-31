import {Component, Input, Output, EventEmitter} from '@angular/core';
import CategoryService from './../services/category.service';

@Component({
  selector: 'filters-component',
  templateUrl: 'app/filters/filters.component.html',
  styleUrls: ['app/filters/filters.component.css'],
  providers: [CategoryService]
})
export default class FiltersComponent {
  categories: any[] = [];
  timeValue: number = 10;

  @Input()
  categoriesSelected: any[];
  @Output()
  selectedCategoriesEvent:EventEmitter = new EventEmitter();
  @Output()
  selectedTimeEvent:EventEmitter<number> = new EventEmitter<number>();

  constructor(private categoryService: CategoryService) {
    this.categories = categoryService.getCategories();
  }

  timeChanged() {
    this.selectedTimeEvent.emit(this.timeValue);
  }

  categoryChanged(value: any) {
    var index = this.categoriesSelected.indexOf(value);
    index === -1 ? this.categoriesSelected.push(value) : this.categoriesSelected.splice(index, 1);
    this.selectedCategoriesEvent.emit({});
  };

  deleteCategory(category: any) {
    var index = this.categories.indexOf(category);
    this.categories[index].selected = false;
  }
}
