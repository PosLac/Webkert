import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Comment } from '../../../shared/models/Comment';
import { QuestionsService } from '../../../shared/services/questions.service';
import { Question } from 'src/app/shared/models/Question';
import { CommentService } from '../../../shared/services/comment.service';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/User';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit, OnChanges {

  @Input() questionInput?: Question;
  loadedImage?: string;
  comments: Array<Comment> = [];
  user?: User;

  commentsForm = this.createForm({
    id: '',
    username: '',
    comment: '',
    date: 0,
    imageId: this.questionInput?.id
  });


  constructor(private fb: FormBuilder,
    private router: Router,
    private questionService: QuestionsService,
    private commentService: CommentService,
    private userService: UserService
    ) { }

  ngOnChanges(): void {
    if (this.questionInput?.id) {
      this.commentsForm.get('imageId')?.setValue(this.questionInput.id);
      this.questionService.loadImage(this.questionInput.image_url).subscribe(data => {
        this.loadedImage = data;
        /* let reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          this.loadedImage = reader.result as string;
        } */
      });
      this.commentService.getCommentsByImageId(this.questionInput.id).subscribe(comments => {
        this.comments = comments;
      })
    }
  }

  ngOnInit(): void {
    
    
  }

  createForm(model: Comment) {
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }

  addComment() {
    if (this.commentsForm.valid) {
      if (this.commentsForm.get('username') && this.commentsForm.get('comment')) {
        this.commentsForm.get('date')?.setValue(new Date().getTime());

        this.commentService.create(this.commentsForm.value).then(_ => {
          this.router.navigateByUrl('/questions/successful/' + this.commentsForm.get('username')?.value);
        }).catch(error => {
          console.error(error);
        });
      }
    }
  }

}
