import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-nexgentesting',
  templateUrl: './nexgentesting.component.html',
  styleUrls: ['./nexgentesting.component.css']
})
export class NexgentestingComponent implements OnInit {

  nexgenUrl: SafeResourceUrl;
  constructor( private sanitizer: DomSanitizer) {
    this.nexgenUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://nexgentesting.com/funnel");
   }

  ngOnInit() {
  }

}
