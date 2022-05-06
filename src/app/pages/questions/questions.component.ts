/*import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/Question';
import { QuestionService } from '../../shared/services/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questionsObject?: Array<Question>;
  chosenQuestion?: Question;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.questionService.loadQuestionMeta('__credits.json').subscribe((data: Array<Question>) => {
      this.questionObject = data;
    })
  }

  loadQuestion(questionObject: Question) {
    this.chosenQuestion = questionObject;
  }

}
*/

import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/Question';
import { Image } from '../../shared/models/Image';
import { GalleryService } from '../../shared/services/gallery.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  galleryObject?: Array<Image>;
  chosenQuestion?: Question;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.galleryService.loadImageMeta('__credits.json').subscribe((data: Array<Image>) => {
      this.galleryObject = data;
    })
  }

  loadImage(questionObject: Question) {
    this.chosenQuestion = questionObject;
  }

}
