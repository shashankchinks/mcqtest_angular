import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { NextQuestionData } from 'src/app/models/next-question-data';
import { StartTestDetail } from 'src/app/models/start-test-detail';
import { interval } from 'rxjs';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  public questionData:any;
  public isValid:boolean = false;
  public remainingTime:number = 0;
  public nextQuesData: NextQuestionData;
  public userData: StartTestDetail;
  public minutes: number = 0;
  public seconds: number = 59;
  public loading: boolean = false;

  constructor(private loginService:LoginService, public router:Router) {
    console.log(this.loginService.data);
    debugger;
    if(this.loginService.data.isValid == true){
      this.isValid = this.loginService.data.isValid;
      this.questionData = this.loginService.data.data.question;
      this.remainingTime = this.loginService.data.data.remianingTime;
    }else{
      this.isValid = false;
    }

    this.userData = new NextQuestionData();
    this.nextQuesData = new NextQuestionData();
    
  }
  
  public thankYouPage(answer: string){
    this.loading = true;
    this.nextQuesData.answer = answer;
    this.nextQuesData.questionId = this.loginService.data.data.question._id;
    this.nextQuesData.mobile = this.loginService.userdetail.mobile;
    this.nextQuesData.code = this.loginService.userdetail.code;
    this.loginService.nextQuestionData(this.nextQuesData).subscribe(res=>{
      if(res.isValid == true){
        this.isValid = res.isValid;
        this.questionData = res.data.question;
        this.remainingTime = res.data.remianingTime;
        this.loading = false;
      }else{
        this.isValid = false;
        this.loading = false;
      }
    },error=>{
      console.log(error);
      this.loading = false;
    })
    // this.router.navigate(['/last']);
  }

  public nextQuestion(answer:string){
    this.loading = true;
    this.nextQuesData.answer = answer;
    this.nextQuesData.questionId = this.loginService.data.data.question._id;
    this.nextQuesData.mobile = this.loginService.userdetail.mobile;
    this.nextQuesData.code = this.loginService.userdetail.code;
    this.loginService.nextQuestionData(this.nextQuesData).subscribe(res=>{
      if(res.isValid == true){
        this.loading = false;
        this.isValid = res.isValid;
        this.questionData = res.data.question;
        this.remainingTime = res.data.remianingTime;
      }else{
        this.loading = false;
        this.isValid = false;
      }
    },error=>{
      console.log(error);
      this.loading = false;
    })
  }

  ngOnInit() {
    // private startTimer(remainingTime):void{
    //   if(interval){
    //     clearInterval(interval);
    //   }
    //   this.timer = remainingTime;
    //   this.timer = this.timer % 1;
    //   interval = setInterval(()=>{
    //     if(this.timer > 0){
    //       this.timer--;
    //       this.minute = this.timer / 60;
    //       this.minute -= this.minute % 1;
    //     }
    //   },1000);
    // }
    this.minutes = Math.trunc(this.remainingTime / 60);
    
    setInterval(() => { 
      this.seconds = this.seconds - 1;
      
      if(this.minutes < 0){
        this.router.navigate(['/last']);
      }else{
        if(this.seconds < 0){
          this.minutes = this.minutes - 1;
          this.seconds = 59;
        }
      }
     },1000 
    );
  }

}
