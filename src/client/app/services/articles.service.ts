import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import Article from './../models/Article.model';

@Injectable()
export default class ArticlesService {

  nyTimesApiKey:string = 'db47e890b8494f4cb0e532e6af3dc79f';

  constructor(private http:Http) {

  }

  getArticlesBasedOnCategory(categories: string): Promise<Article[]> {

    return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
        search: 'api-key=' + this.nyTimesApiKey + '&q=' + categories
      })
      .toPromise()
      .then(response => {
        var articlesArray = response.json().response.docs;
        var articles:Article[] = [];

        _.forEach(articlesArray, function (article) {
          var articleObj:Article = {
            url: article['web_url'],
            title: article['headline']['main'],
            img: article.multimedia.length ? 'https://static01.nyt.com/' + article.multimedia[1].url : undefined,
            web_url: article['web_url'],
            word_count: article['word_count']
          };
          articles.push(articleObj);
        });

        return articles;
      })
      .catch(this.handleError);
  }

  handleError(error: any) {
    error.message = error.message || 'Sorry the API is down, Please try again later';
    return Promise.reject(error.message);
  }
}
