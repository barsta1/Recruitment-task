import { inject, Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { User } from '../models/user';

const USER_LOCAL_STORAGE_KEY = 'users';
const API_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _users$$: BehaviorSubject<User[]> = new BehaviorSubject([]);
  readonly users$ = this._users$$.asObservable();
  private readonly _singleUsersEmission$ = this.users$.pipe(take(1));
  private readonly _httpClient = inject(HttpClient);

  constructor(private readonly _httpService: HttpService) {
  }

  addUser(newUser: User): void {
    this._singleUsersEmission$.subscribe((users: User[]) => {
      const updatedUsers = [...users, newUser];
      this._updateUsers(updatedUsers);
    })
  }

  removeUser(removedUserIndex: number): void {
    this._singleUsersEmission$.subscribe((users: User[]) => {
      const updatedUsers = users.filter((_, index) => index !== removedUserIndex);
      this._updateUsers(updatedUsers);
    })
  }

  fetchUsers(): void {
    this._httpService.fetchWithLocalStorageCheck(API_URL, USER_LOCAL_STORAGE_KEY, this._users$$, (users: User[]) => this._updateUsers(users));

    const storedUsers = LocalStorageService.getItem(USER_LOCAL_STORAGE_KEY);
    if (storedUsers?.length) {
      this._users$$.next(storedUsers);
    } else {
      this._httpClient.get(API_URL)
        .subscribe((users: User[]) => {
          this._updateUsers(users);
        });
    }
  }

  private _updateUsersInLocalStorage(users: User[]): void {
    LocalStorageService.setItem(USER_LOCAL_STORAGE_KEY, users);
  }

  private _updateUsers(users: User[]) {
    this._users$$.next(users);
    this._updateUsersInLocalStorage(users);
  }
}
