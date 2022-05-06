import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions.component';

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: 'successful', loadChildren: () => import('./successful/successful.module').then(m => m.SuccessfulModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
