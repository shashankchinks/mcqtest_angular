import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InstructionPageComponent } from './components/instruction-page/instruction-page.component';
import { QuestionPageComponent } from './components/question-page/question-page.component';
import { ThankyouPageComponent } from './components/thankyou-page/thankyou-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NgxLoadingModule } from 'ngx-loading';
import { AllQuestionsComponent } from './components/all-questions/all-questions.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    InstructionPageComponent,
    QuestionPageComponent,
    ThankyouPageComponent,
    AboutUsComponent,
    ContactUsComponent,
    AllQuestionsComponent,
    QuestionDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

