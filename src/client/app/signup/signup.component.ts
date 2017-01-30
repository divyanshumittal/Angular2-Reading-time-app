import {Component} from '@angular/core';

import User from './../models/User.model';

@Component({
  selector: 'signup-component',
  templateUrl: 'app/signup/signup.component.html',
  styleUrls: ['app/signup/signup.component.scss']
})
export default class SignupComponent {

  user: User = {
    firstName: 'Matt'
  };

  signUp() { }

}
