import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {

  constructor(private httpClient: HttpClient) { }
  
  loadJoke(){
    return this.httpClient.get<Joke>('https://api.chucknorris.io/jokes/random?category=dev');
  }
}

export interface Joke {
	categories: string[];
	created_at: string;
	icon_url: string;
	id: string;
	updated_at: string;
	url: string;
	value: string;
}