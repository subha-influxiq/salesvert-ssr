import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public subscribeForm: FormGroup;

  constructor( public fb: FormBuilder, public http: HttpClient, private router: Router) {
    this.subscribeForm = this.fb.group({
        name:['', Validators.required],
       email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
       phone: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9\+\-\ ]/)])],
       message: ['', Validators.required]

    })

   }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
  doSubmit(){
    console.log(this.subscribeForm.value);
    for (let i in this.subscribeForm.controls) {
      this.subscribeForm.controls[i].markAsTouched();
    }
    if (this.subscribeForm.valid) {
      let link = 'http://166.62.39.137:5001/salesverthomedetails';
      // let link = '';
      let data = {data: this.subscribeForm.value};
      this.http.post(link, data)
          .subscribe(res => {
  
            let result: any = {};
            result = res;
            console.log(result);
            if (result.status == 'success') {
  
              this.subscribeForm.reset();
              // this.successmodal = true;
              setTimeout(()=>{
  
              },2000);
           }
         })
      }
  }

  
}
