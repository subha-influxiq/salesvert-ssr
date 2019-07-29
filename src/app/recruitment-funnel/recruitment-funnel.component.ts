import { Component, OnInit, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-recruitment-funnel',
  templateUrl: './recruitment-funnel.component.html',
  styleUrls: ['./recruitment-funnel.component.css']
})
export class RecruitmentFunnelComponent implements OnInit {
  recruitUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
  this.recruitUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://nexmedsolutions.net/recruitment-funnel");
  }

  ngOnInit() {
  }

}
