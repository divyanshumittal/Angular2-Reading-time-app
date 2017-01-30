import {Component, Input} from '@angular/core';

import Article from './../models/Article.model';

@Component({
  selector: 'pretty-article',
  templateUrl: 'app/pretty-article/pretty-article.component.html',
  styleUrls: ['app/pretty-article/pretty-article.component.css'],
})
export default class PrettyArticleComponent {
  @Input()
  articleObj: Article;
}
