import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { from } from 'rxjs';
@Component({
  selector: 'app-aspire-landing',
  templateUrl: './aspire-landing.component.html',
  styleUrls: ['./aspire-landing.component.css']
})
export class AspireLandingComponent implements OnInit {
    safeUrl: SafeResourceUrl;
  constructor( private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://aspire.lampconsulting.com/landing");
  }

  ngOnInit() {
  }

}
