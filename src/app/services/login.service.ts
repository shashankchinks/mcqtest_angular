import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { StudentDetails } from '../models/student-details';
import { Observable } from 'rxjs';
import { StartTestDetail } from '../models/start-test-detail';
import { NextQuestionData } from '../models/next-question-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers: HttpHeaders;
  private host: string;
  public data: any;
  public userdetail: StartTestDetail;

  constructor(private httpclient:HttpClient) {
    this.headers = new HttpHeaders({"content-Type" : "application/json"});
    this.host = "http://newstein.in:8000/";
   }

   public postData(request:StudentDetails):Observable<any>{
    let url:string = this.host+"tests/book";
    return this.httpclient.post<any>(url,request,{headers:this.headers});
  }

  public startTestData(request:StartTestDetail):Observable<any>{
    let url: string = this.host+"tests/start";
    return this.httpclient.post<any>(url,request,{headers:this.headers});
  }

  public nextQuestionData(request:NextQuestionData):Observable<any>{
    console.log(request);
    let url: string = this.host+"tests/submit";
    return this.httpclient.post<any>(url,request,{headers:this.headers});
  }

  // http://newstein.in:8000/questions

}
