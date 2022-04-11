import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn: boolean;
 
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {    
    this.getCurrentUser();
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error =>{
      console.log(error);
    });
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }

  getCurrentUser() {

    var user = localStorage.getItem('user');
    if (user != null) {
      this.loggedIn = true;
    }
    else
    { 
      this.loggedIn = false;    
    }
  }

}
