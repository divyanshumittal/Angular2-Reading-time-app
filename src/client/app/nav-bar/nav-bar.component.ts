import {Component} from '@angular/core';

import User from './../models/User.model';

@Component({
  selector: 'nav-bar-component',
  templateUrl: 'app/nav-bar/nav-bar.component.html',
  styleUrls: ['app/nav-bar/nav-bar.component.css']
})
export default class NavBarComponent {

  user: User = {
    firstName: 'Matt'
  };

  signUp() { }

}
