import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String = 'http://loiane.com';
  cursoAngular: boolean = true;

  urlImage = 'http://lorempixel.com/400/200/nature/';

  constructor() { }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  ngOnInit() {
  }

}
