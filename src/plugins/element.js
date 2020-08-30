import Vue from 'vue'
//花括号表示按需导入
import { Button, Form, FormItem, Input, Message } from 'element-ui'
//导入后需使用
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
//Message必须全局挂载
Vue.prototype.$message = Message
