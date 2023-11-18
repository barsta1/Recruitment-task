import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly _httpClient = inject(HttpClient);

  fetchWithLocalStorageCheck(apiUrl: string, localStorageItemKey: string, currentDataSubject$$: BehaviorSubject<any[]>, updateCallback: (data: any[]) => void): void {
    const storedTodos = LocalStorageService.getItem(localStorageItemKey);
    if (storedTodos?.length) {
      currentDataSubject$$.next(storedTodos);
    } else {
      this._httpClient.get(apiUrl)
        .pipe(tap((data: any[]) => updateCallback(data)))
        .subscribe((data: any[]) => {
          currentDataSubject$$.next(data);
        });
    }
  }
}
