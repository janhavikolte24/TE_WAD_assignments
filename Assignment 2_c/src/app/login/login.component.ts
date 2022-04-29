import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  users: any[]=[]

  addUser(username:any,pwd:any)
  {
    var data = {username,pwd}
    this.users.push(data)
  }

  removeUser(user:any)
  {
    var data = user
    console.log(data)
    this.users = this.users.filter( user => {return (user!==data)})
  }

  ngOnInit(): void {
  }

}
