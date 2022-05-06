// redux入口文件
import { createStore } from "redux";

// 1.引入reducer
import reducer from "./reducer";

// 2.创建仓库，保存reducer返回的数据
const store = createStore(reducer)

// 3.导出store
export default store