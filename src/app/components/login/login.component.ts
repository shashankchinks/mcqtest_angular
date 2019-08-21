import { Component, OnInit } from '@angular/core';
import { StudentDetails } from 'src/app/models/student-details';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public studentDetails: StudentDetails;
  constructor(private loginService: LoginService, private router: Router) { 
    this.studentDetails = new StudentDetails();
  }

  ngOnInit() {
  }

  public submitDetails(){
    this.loginService.postData(this.studentDetails).subscribe(res => {
      console.log(res);
      this.router.navigate(['/instruction']);
    },error=>{
      console.log(error);
      alert('Something went wrong');
    });
  }
}
