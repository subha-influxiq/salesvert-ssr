import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-compchain-funnel',
  templateUrl: './compchain-funnel.component.html',
  styleUrls: ['./compchain-funnel.component.css']
})
export class CompchainFunnelComponent implements OnInit {

  compcahainUrl: SafeResourceUrl;
  constructor( private sanitizer: DomSanitizer) {
    this.compcahainUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://compchain.influxiq.com/");
  }

  ngOnInit() {
  }

}
