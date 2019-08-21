import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/services/login.service';
import { StartTestDetail } from 'src/app/models/start-test-detail';
import { Router } from '@angular/router';


@Component({
  selector: 'app-instruction-page',
  templateUrl: './instruction-page.component.html',
  styleUrls: ['./instruction-page.component.css']
})
export class InstructionPageComponent implements OnInit {
  public startTestDetails: StartTestDetail;
  constructor(private loginService:LoginService, private router:Router) { 
    this.startTestDetails = new StartTestDetail();
  }

  ngOnInit() {
  }

  public nexttoQuestion(){
    this.loginService.startTestData(this.startTestDetails).subscribe(res=>{
      this.loginService.data = res;
      this.loginService.userdetail = this.startTestDetails;
      this.router.navigate(['/question']);
    },error=>{
      alert('something went wrong');
    });
  }
}
