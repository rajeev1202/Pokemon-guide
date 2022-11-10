import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  forkJoin } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class AppService  {

  url = 'https://pokeapi.co/api/v2/pokemon';
  count = 0;

  constructor(private http: HttpClient) {

  }


  public makeHttpGetRequest(url: string) {
    return this.http.request('GET', url)
  }


  getPokemons(successCB: any, errorCB: any) {
    if (this.url) {
      this.http.get(this.url).pipe(tap((x: any) => { this.url = x.next, this.count = x.count }),
        switchMap((x: any) => forkJoin(x.results.map(x => this.http.request('GET', x.url))))).subscribe(
          (response: any) => {
            successCB(response)
          },
          (error: any) => {
            errorCB(error)
          })
    }



  }



}

