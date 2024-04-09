import formDesigner from './formDesigner';
import formBuilder from './formBuilder'
import formViewer from './formViewer'
import fancyEditor from './extend/fancyEditor';
import fancyHtml from './extend/fancyHtml.vue';
import fancyText from './extend/fancyText.vue';
import fancyBarCode from 'vue3-barcode';
import fancyDialogList from './extend/fancyDialogList.vue';
// import iconDialog from './iconDialog';

// 引入所有图标
import * as Icons from '@element-plus/icons-vue';

const plugins = {
  install : (app)=> {
    app.component('form-designer',formDesigner);
    app.component('form-builder',formBuilder);
    app.component('form-viewer',formViewer);
    app.component('fancy-editor',fancyEditor);
    app.component('fancy-html',fancyHtml);
    app.component('fancy-text',fancyText);
    app.component('fancy-bar-code',fancyBarCode);
    // 循环注册所有图标
    for(const name in Icons){
      app.component(name,Icons[name]);
    }
    app.component('fancy-dialog-list',fancyDialogList);
    // app.component('icon-dialog',iconDialog);
  }
};
export default plugins;