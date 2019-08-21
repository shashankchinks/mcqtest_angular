import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InstructionPageComponent } from './components/instruction-page/instruction-page.component';
import { QuestionPageComponent } from './components/question-page/question-page.component';
import { ThankyouPageComponent } from './components/thankyou-page/thankyou-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AuthGuard } from './guards/auth.guard';
import { AllQuestionsComponent } from './components/all-questions/all-questions.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';

const routes: Routes = [
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'instruction',component:InstructionPageComponent},
  {path:'question',component:QuestionPageComponent},
  {path:'last',component:ThankyouPageComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'allquestions',canActivate:[AuthGuard],children:[{
    path:'',component: AllQuestionsComponent
  },{
    path:'questionDetail',component: QuestionDetailComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
