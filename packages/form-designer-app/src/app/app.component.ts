import { Component, OnInit } from '@angular/core';
import { registerMicroApps, start } from 'qiankun';
import { RouterLink, RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  /**
   * 生命周期狗子
   */
  ngOnInit(){
    registerMicroApps([
      {
        name: 'form-designer-vue-ant',
        entry: 'http://localhost:3002',
        container: '#container',
        activeRule: '/form-designer-vue-ant',
      },
    ]);
    start();
  }
}
