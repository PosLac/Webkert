/*import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() questionsObjectInput?: Array<any>;
  @Output() questionObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenQuestion: any;

  constructor() { }

  ngOnChanges() {
    if (this.questionsObjectInput) {
      this.chosenQuestion = this.questionsObjectInput[0];
      this.reload();
    }
  }

  ngOnInit(): void {
       
  }

  reload() {
    this.questionObjectEmitter.emit(this.chosenQuestion);
  }

}
*/
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() galleryObjectInput?: Array<any>;
  @Output() imageObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenImage: any;

  constructor() { }

  ngOnChanges() {
    if (this.galleryObjectInput) {
      this.chosenImage = this.galleryObjectInput[0];
      this.reload();
    }
  }

  ngOnInit(): void {
       
  }

  reload() {
    this.imageObjectEmitter.emit(this.chosenImage);
  }

}
