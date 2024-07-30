import { Component, OnInit } from '@angular/core';
import { registerMicroApps, start } from 'qiankun';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
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
        name: 'ant-design-vue', // app name registered
        entry: '//localhost:7100',
        container: '#yourContainer',
        activeRule: '/yourActiveRule',
      },
    ]);
    start();
  }
}
