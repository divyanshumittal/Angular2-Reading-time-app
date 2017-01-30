import { Injectable} from '@angular/core';

@Injectable()
export default class CategoryService {
  getCategories() {
    return [{
      name: 'Crime',
      selected: false
    }, {
      name: 'Comedy',
      selected: false
    }, {
      name: 'Sports',
      selected: false
    }, {
      name: 'Music',
      selected: false
    }, {
      name: 'Movies',
      selected: false
    }, {
      name: 'Fashion',
      selected: false
    }, {
      name: 'Hollywood',
      selected: false
    }, {
      name: 'Technology',
      selected: false
    }, {
      name: 'World',
      selected: false
    }];
  }
}
