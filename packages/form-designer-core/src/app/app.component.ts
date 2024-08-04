import { Component, } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'form-designer-core';
  //TODO 组件显示序号
  listClick:number = 0
  //TODO 组件栏数据配置
  compositeList:any = [
    {
      name:"组件",
      img:"./static/zujian.svg",
      Chides:[
        {"Name":"输入框","Image":""},
        {"Name":"多行输入框","Image":""},
        {"Name":"密码输入","Image":""},
        {"Name":"数字输入","Image":""},
        {"Name":"评分器","Image":""},
      ]
    },
    {
      name:"大纲树",
      img:"./static/list-outline.svg"
    },
    {
      name:"历史记录",
      img:"./static/history.svg"
    }
  ]
  //TODO 组件栏是否浮动
  isFiexd:boolean = false

}
