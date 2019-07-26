import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-triniti-landing',
  templateUrl: './triniti-landing.component.html',
  styleUrls: ['./triniti-landing.component.css']
})
export class TrinitiLandingComponent implements OnInit {
  safeSrc: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl("https://nexmedsolutions.net/nms-funnel-doctors");
   }

  ngOnInit() {

  }

}
