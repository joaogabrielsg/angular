import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String = 'http://loiane.com';
  cursoAngular: boolean = true;

  newValue: String = '';
  valueSaved: String = '';

  isMouseOver:boolean = false;

  urlImage = 'http://lorempixel.com/400/200/nature/';

  name:string = 'abc';

  value: number = 20;

  pessoa:any = {
    name: 'def',
    age: 24
  }

  @Input() inputName: string;

  constructor() { }

  getValor(){
    return 1;
  }

  buttonClicked(){
    alert("clicou");
  }

  changeValue(){
    this.value++;
  }

  onKeyUp(event: KeyboardEvent){
    this.newValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(value){
    this.valueSaved = value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  getCurtirCurso(){
    return true;
  }

  onChangeValue(event){
    console.log(event.newValue);
  }

  ngOnInit() {
  }

}
