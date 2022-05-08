import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/shared/models/Question';
import { Image } from '../../shared/models/Image';
import { QuestionsService } from '../../shared/services/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})

export class QuestionsComponent implements OnInit {
  questionsObject?: Array<Image>;
  chosenQuestion?: Question;

  constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questionService.loadImageMeta('__credits.json').subscribe((data: Array<Image>) => {
      this.questionsObject = data;
    })
  }

  loadImage(questionObject: Question) {
    this.chosenQuestion = questionObject;
  }

}
