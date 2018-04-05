import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit, OnChanges { 

  @Input() value: number = 0;

  @Output() changeValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("init")
  }

  ngOnChanges(){
    console.log("change")
  }

  increases(){
    this.value++;
    this.changeValue.emit({newValue: this.value})
  }

  decrements(){
    this.value--;
    this.changeValue.emit({newValue: this.value})
  }

}
