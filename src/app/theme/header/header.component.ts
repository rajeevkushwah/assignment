import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { ThemeService } from '../theme.service';

import * as moment from 'moment';

@Component({
  selector: 'app-header',
  providers: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit {
  
  constructor(
  
  ) { }

  ngOnInit() {
   

  }


}
