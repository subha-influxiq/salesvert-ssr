import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public subscribeForm: FormGroup;

  constructor( public fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
       fullName:['', Validators.required],
       email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
       phone: ['', Validators.compose([Validators.required, Validators.pattern(/[0-9\+\-\ ]/)])],
       message: ['', Validators.required]

    })

   }

  ngOnInit() {
  }
  doSubmit(){
    console.log(this.subscribeForm.value)
  }
}
