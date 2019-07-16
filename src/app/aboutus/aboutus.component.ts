import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Selsvert | About');
    this.meta.setTag('og:description', 'Selsvert | About');
    this.meta.setTag('og:title', 'Selsvert | About');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', '../../assets/images/sv_logo.png');
  }

  ngOnInit() {
  }

}
