import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
    server: {
  	port: 8080, //默认启动时的端口号
  	open: true, //自动打开默认浏览器
  	cors: true, //允许跨域
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 路径别名
    }
  }
})
