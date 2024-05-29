import formDesigner from './formDesigner.vue';
import formBuilder from './formBuilder.vue';
import formViewer from './formViewer.vue';
import fancyEditor from './extend/fancyEditor.vue';
import fancyHtml from './extend/fancyHtml.vue';
import fancyText from './extend/fancyText.vue';
import fancyBarCode from './extend/fancyBarCode.vue';
import fancyDialogList from './extend/fancyDialogList.vue';
// import iconDialog from './iconDialog';
// 导入必须得CSS和图标
import '@/assets/style/designer.css';
import '@/assets/iconfont/iconfont.js';
import 'element-plus/dist/index.css';
// 引入所有图标
import * as Icons from '@element-plus/icons-vue';

const plugins = {
  install: (app: any) => {
    app.component('form-designer', formDesigner);
    app.component('form-builder', formBuilder);
    app.component('form-viewer', formViewer);
    app.component('fancy-editor', fancyEditor);
    app.component('fancy-html', fancyHtml);
    app.component('fancy-text', fancyText);
    app.component('fancy-bar-code', fancyBarCode);
    app.component('fancy-dialog-list', fancyDialogList);
    // 循环注册所有图标
    for (const name in Icons) {
      //@ts-ignore
      app.component(name, Icons[name]);
    }
    // app.component('icon-dialog',iconDialog);
  }
};
export default plugins;
