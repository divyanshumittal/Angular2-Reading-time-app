import {Component, Input} from '@angular/core';

import Article from './../models/Article.model';

@Component({
  selector: 'article',
  templateUrl: 'app/article/article.component.html',
  styleUrls: ['app/article/article.component.css']
})
export default class ArticleComponent {
  @Input()
  articleObj: Article;
  @Input()
  isBackgroundGrey: boolean;
}
