import { Component, OnInit } from '@angular/core';
import { BadRquest } from '../model/bad-request';
import { FizzBuzzResponse } from '../model/fizz-buzz-response';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  minStr: string;
  maxStr: string;
  showErrorMessage: boolean;
  fizzBuzzResponse: FizzBuzzResponse;
  badRequest: BadRquest;

  constructor(private homeService: HomeService) { 
  }
  
  ngOnInit(): void {
    this.showErrorMessage = false;
  }
  
  generateCode(){

    if(this.minStr && this.maxStr && !isNaN(+this.minStr) && !isNaN(+this.maxStr)){
      this.homeService
        .generateCode(parseInt(this.minStr), parseInt(this.maxStr))
        .subscribe(response => {
          this.fizzBuzzResponse = response;
          this.showErrorMessage = false;
        }, error => {
          this.badRequest = error.error;
          this.showErrorMessage = true;
        });
    } else {
      alert("Parameters must be numbers");
    }
  }
}
