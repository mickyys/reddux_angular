import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public user : IUser;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.user).subscribe(
      next => console.log(next)
    )
  }

}
