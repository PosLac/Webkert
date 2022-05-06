import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Image } from '../../../shared/models/Image';
import { Comment } from '../../../shared/models/Comment';
import { GalleryService } from '../../../shared/services/gallery.service';
import { Question } from 'src/app/shared/models/Question';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit, OnChanges {

  @Input() questionInput?: Question;
  loadedImage?: string;
  comments: Array<Comment> = [];

  commentsForm = this.createForm({
    username: '',
    comment: '',
    date: new Date()
  });

  constructor(private fb: FormBuilder, private router: Router, private galleryService: GalleryService) { }

  ngOnChanges(): void {
    if (this.questionInput?.id) {
      this.galleryService.loadImage(this.questionInput?.id + '.png').subscribe(data => {
        let reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          this.loadedImage = reader.result as string;
        }
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
        this.commentsForm.get('date')?.setValue(new Date());
        this.comments.push({ ...this.commentsForm.value });
        this.router.navigateByUrl('/gallery/successful/' + this.commentsForm.get('username')?.value);
      }
    }
  }

}
