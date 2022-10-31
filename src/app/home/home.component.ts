import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
//bring api service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(

    private apiService:ApiService

  ) { }

  ngOnInit(): void {
  }

  //again, a new one
  CallARobot(){
  //do it not LOCAL
    this.apiService.testGet().subscribe((response=>{
      let _response;
      _response = response;
      let x = JSON.parse(JSON.stringify(response));
      alert(x.greetings);//Finally, we parsed an stringify json
    }))
    /*
    var response = this.apiService.testGet();
    console.log(response);
    alert(response);
    --pretty local way--*/
    //this.apiService.localTest();
  
  }

  CallNotARobot(){
    this.apiService.testGetPlus().subscribe((response=>{
      let _response;
      _response = response;
      let y = JSON.parse(JSON.stringify(response));
      alert(y.greetingsTwo);
    }))
  }

}
