import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import NavBarComponent from './../nav-bar/nav-bar.component';
import FiltersComponent from './../filters/filters.component';
import ArticleComponent from './../article/article.component';
import PrettyArticleComponent from './../pretty-article/pretty-article.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, FormsModule],
  declarations: [HomeComponent, NavBarComponent, FiltersComponent, ArticleComponent, PrettyArticleComponent],
  exports: [HomeComponent]
})
export class HomeModule { }