import { Component, ViewEncapsulation } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-form-designer-core',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './form-designer-core.component.html',
  styleUrl: './form-designer-core.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FormDesignerCoreComponent {
  //TODO 组件显示序号
  listClick:number = 0
  //TODO 组件栏数据配置
  compositeList:any = [
    {
      name:"组件",
      img:"./static/zujian.svg",
      type:"compositeList",
      chides:[
        {"name":"输入控件",
          chides:[
            {"name":"输入框","Image":""},
            {"name":"多行输入框","Image":""},
            {"name":"密码输入","Image":""},
            {"name":"数字输入","Image":""},
            {"name":"评分器","Image":""},
          ]
        },
        {
          "name":"布局组件",
          chides:[
            {"name":"输入框","Image":""},
            {"name":"多行输入框","Image":""},
            {"name":"密码输入","Image":""},
            {"name":"数字输入","Image":""},
            {"name":"评分器","Image":""},
          ]
        }

      ]
    },
    {
      name:"大纲树",
      type:"domList",
      img:"./static/list-outline.svg"
    },
    {
      name:"历史记录",
      type: "timeList",
      img:"./static/history.svg"
    }
  ]
  //TODO 组件栏是否浮动
  isFiexd:boolean = false
}
