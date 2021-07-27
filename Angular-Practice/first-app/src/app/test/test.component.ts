import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData: any;
  @Output() public childEvent = new EventEmitter();
  public name = "Coder";
  public user = "";
  public displayName = false;
  public myId = "testId"; //property
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-denger": this.hasError,
    "text-special": this.isSpecial
  }

  public color = "red";
  public colors = ["red", "green", "yellow"];
  public date = new Date();

  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    console.log('Hello World!!', event)
    this.hasError = !this.hasError
  }

  setUsername(value: any) {
    this.name = value
  }

  setDisplayName(event: any){
    this.displayName = !this.displayName
  }

  changeColor(value: any){
    this.color=value
  }

  fireEvent() {
    this.childEvent.emit('Hey Codder!!')
  }

}
