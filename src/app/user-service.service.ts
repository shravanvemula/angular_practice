import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './types/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private _usersUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  public users: IUser[] = []

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._usersUrl);
  }

  saveUser(data: IUser): Observable<IUser> {
    return this.http.post<IUser>(this._usersUrl, data);
  } 
}
