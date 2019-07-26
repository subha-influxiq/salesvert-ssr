import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { from } from 'rxjs';
@Component({
  selector: 'app-nms-funnel-doctors',
  templateUrl: './nms-funnel-doctors.component.html',
  styleUrls: ['./nms-funnel-doctors.component.css']
})

export class NmsFunnelDoctorsComponent implements OnInit {
  nmsfunnelUrl: SafeResourceUrl;
  constructor( private sanitizer: DomSanitizer) {
    this.nmsfunnelUrl = this.sanitizer.bypassSecurityTrustResourceUrl("DomSanitizer");
  }

  ngOnInit() {
  }

}
