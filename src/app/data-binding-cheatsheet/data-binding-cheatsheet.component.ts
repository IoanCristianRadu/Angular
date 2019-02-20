import { Component, OnInit, NgModule } from '@angular/core';

@NgModule()

@Component({
  selector: 'app-data-binding-cheatsheet',
  templateUrl: './data-binding-cheatsheet.component.html',
  styleUrls: ['./data-binding-cheatsheet.component.css']
})
export class DataBindingCheatsheetComponent implements OnInit {

  name = "Binding examples";
  number = 10;
  booleanValue = true;
  myVariable = '';
  myVariable2 = 'Stuff';
  fruits = ['banana', 'pineapple', 'apple'];
  myNgModel = '';

  constructor(){
    setTimeout(() => {
      this.booleanValue = false;
    }, 2000)
  }

  ngOnInit() {
  }

  myFunction(){
      this.myVariable = this.myVariable + " You clicked! "
  }

  onTypeLetter(event: any){
      this.name = (<HTMLInputElement>event.target).value;
      console.log(event);
  }

  changeBooleanValue(){
    this.booleanValue = !this.booleanValue;
  }

  getColor(){
    return this.booleanValue == true ? 'green' : 'red';
  }

}
