import { Component } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'werbSijur-mvp';
  size: NzButtonSize = 'large';
  isCollapsed = false;
}
