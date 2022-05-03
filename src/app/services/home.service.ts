import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FizzBuzzResponse } from '../model/fizz-buzz-response';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  generateCode(min: number, max: number): Observable<FizzBuzzResponse> {
    return this.httpClient.get<FizzBuzzResponse>(`intraway/api/fizzbuzz/${min}/${max}`);
  }
}