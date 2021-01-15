import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  users: any;

  constructor(private accountService: AccountService) {}
  ngOnInit() {
    // this.getUsers();
    this.setCurrentUser(); 
    console.log("I am inside");
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  // getUsers() {
  //   this.http.get('http://localhost:5000/api/users').subscribe(response => {
  //     this.users = response;
  //     console.log(response);
  //   }, error => {
  //     console.log(error);
  //   })
  // }
}
