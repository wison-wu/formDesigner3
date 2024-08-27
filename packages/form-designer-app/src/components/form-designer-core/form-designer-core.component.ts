import {Component, ViewEncapsulation} from '@angular/core';
import {NgClass} from "@angular/common";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-form-designer-core',
  standalone: true,
  imports: [
    NgClass,
    HeaderComponent
  ],
  templateUrl: './form-designer-core.component.html',
  styleUrl: './form-designer-core.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FormDesignerCoreComponent {
  /**
   * 组件显示序号
   */
  listClick: number = 1;
  /**
   * 组件栏数据配置
   */
  compositeList: any = [
    {
      name: "组件",
      img: "./static/zujian.svg",
      type: "compositeList",
      chides: [
        {
          "name": "输入控件",
          chides: [
            {"name": "输入框", "Image": ""},
            {"name": "多行输入框", "Image": ""},
            {"name": "密码输入", "Image": ""},
            {"name": "数字输入", "Image": ""},
            {"name": "评分器", "Image": ""},
          ]
        },
        {
          "name": "布局组件",
          chides: [
            {"name": "输入框", "Image": ""},
            {"name": "多行输入框", "Image": ""},
            {"name": "密码输入", "Image": ""},
            {"name": "数字输入", "Image": ""},
            {"name": "评分器", "Image": ""},
          ]
        }
      ]
    },
    {
      name: "大纲树",
      type: "domList",
      img: "./static/list-outline.svg",
      chides:[
        {
          "name":"表单",
          "svg":"",
          "id":"1",
          chides: [
            {"name":"输入框","svg":"","id":"2"},
            {"name":"多行输入框","svg":"","id":"3"},
            {"name":"表格","svg":"","id":"4",chides:[
                {"name":"输入框","svg":"","id":"5"},
                {"name":"多行输入框","svg":"","id":"6"},
              ]},
          ]
        }
      ]
    },
    {
      name: "历史记录",
      type: "timeliest",
      img: "./static/history.svg",
      chides:[
        {'name':'任务1','creatTime':'1'},
        {'name':'任务2','creatTime':'2'},
        {'name':'任务3','creatTime':'3'},
        {'name':'任务4','creatTime':'4'},
        {'name':'任务5','creatTime':'5'},
      ]
    }
  ];
  /**
   * 组件栏是否浮动
   */
  isFixed: boolean = false;

  /**
   * 赋值打开状态和新增空子项
   * @param list
   * @param count
   * @constructor
   */
  SetListStatAndNewChildes(list:Array<any>, count?:number){
    list.forEach(item => {
      if (!('isSelect' in item)){
        item['isSelect'] = true
      }
      if (count != undefined && count > 1){
        let rowCount:number = 1;
        while (item['chides'].length > count * rowCount ){
          rowCount++
        }
        for (let i = 0; i < rowCount * count - item['chides'].length; i++){
          item['chides'].push({})
        }
      }
    })
    console.log(list)

    return list
  }
  /**
   * 赋值大纲树打开状态值
   * @param list
   * @constructor
   */
  SetThreeChildes(list:Array<any>){
    list.forEach(item =>{
      if (!('chides' in item)){
        item['isSelect'] = true
        if (item['chides'].length > 0){
          this.SetThreeChildes(item['chides'])
        }
      }
    })
    // console.log(JSON.stringify(list,null,2))
    return list
  }
  /**
    时间列表点击序号
   */
  timeListClick:number = 0
}
