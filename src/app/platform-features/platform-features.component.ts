import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-platform-features',
  templateUrl: './platform-features.component.html',
  styleUrls: ['./platform-features.component.css']
})
export class PlatformFeaturesComponent implements OnInit {

  constructor(private readonly meta: MetaService) { }

  ngOnInit() {
    this.meta.setTitle('Salesvert | Features');
    this.meta.setTag('og:description', 'Salesvert | Features');
    this.meta.setTag('og:title', 'Salesvert | Features');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/sv_logo.png');
  }

}
