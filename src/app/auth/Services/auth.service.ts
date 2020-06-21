import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interface/user';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user : IUser){
    return from([true]);
  }
}
