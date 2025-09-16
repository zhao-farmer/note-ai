import DefaultTheme from 'vitepress/theme'
// 导入设置的样式
import './custom.css'

import Fancyapps from "@fancyapps/ui/dist/fancybox/fancybox.umd";
import '@fancyapps/ui/dist/fancybox/fancybox.css'

Fancyapps.Fancybox.bind('[data-fancybox="gallery"]');


export default{
    ...DefaultTheme,
}