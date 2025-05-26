import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from './router'
// 导入ElementPlus icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)

app.use(ElementPlus, {
    locale: zhCn,
  })

app.use(router).mount('#app')
