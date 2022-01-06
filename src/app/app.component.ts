import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  public num1!:number;
  public num2!:number;
  public result!:number;

  ngOnInit() {
   this.result = 0;
  }

  add(){
    this.result = this.num1+this.num2;
  }
  mult(){
    this.result = this.num1*this.num2;
  }
  divide(){
    this.result = this.num1/this.num2;
  }
  subt(){
    this.result = this.num1-this.num2;
  }
}
