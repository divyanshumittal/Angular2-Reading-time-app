import {Component, ViewChild} from '@angular/core';


import FiltersComponent from './../filters/filters.component';
import Article from './../models/Article.model';
import ArticlesService from './../services/articles.service';

@Component({
  selector: 'home-component',
  templateUrl: 'app/home/home.component.html',
  styleUrls: ['app/home/home.component.css'],
  providers: [ArticlesService]
})
export class HomeComponent {
  categoriesSelected: any[] = [];
  articles:Article[] = [];
  isLoading:boolean = false;

  @ViewChild(FiltersComponent) FiltersChildComponent:FiltersComponent;

  articleOfTheDay: Article =  {
    url: 'http://www.nytimes.com/2016/04/28/fashion/dyson-hair-dryer.html',
    title: `James Dyson, the Steve Jobs of household products, wants to do for beauty and grooming what his company 
    did for vacuum cleaners. Will consumers buy it?`,
    img: 'https://static01.nyt.com/images/2016/04/28/fashion/28DYSON1/28DYSON1-mediumThreeByTwo440-v2.jpg',
    web_url: ''
  };

  constructor(private articlesService: ArticlesService) {}

  selectedCategoriesEvent() {
    this.isLoading = true;
    this.getArticles();
  }

  deleteCategory(category) {
    this.isLoading = true;
    this.categoriesSelected.splice(this.categoriesSelected.indexOf(category), 1);
    this.FiltersChildComponent.deleteCategory(category);
    this.getArticles();
  }

  getArticles() {
    var categories = '';
    if (this.categoriesSelected.length) {
      _.forEach(this.categoriesSelected, function (cat) {
        categories += cat.name + ',';
      });
      this.articlesService.getArticlesBasedOnCategory(categories).then(
        articles => {
          this.articles = articles;
          this.isLoading = false;
        }
      );
    } else {
      this.articles = [];
      this.isLoading = false;
    }
  }

}
