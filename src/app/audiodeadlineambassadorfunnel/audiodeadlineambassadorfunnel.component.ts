import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { from } from 'rxjs';
@Component({
  selector: 'app-audiodeadlineambassadorfunnel',
  templateUrl: './audiodeadlineambassadorfunnel.component.html',
  styleUrls: ['./audiodeadlineambassadorfunnel.component.css']
})
export class AudiodeadlineambassadorfunnelComponent implements OnInit {

  ambassaderUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    this.ambassaderUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://development.audiodeadline.com/ambassador-opportunity");
  }

  ngOnInit() {
  }

}
