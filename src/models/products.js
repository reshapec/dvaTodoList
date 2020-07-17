// dva 通过 model 的概念把一个领域的模型管理起来，
// 包含同步更新 state 的 reducers，
// 处理异步逻辑的 effects，
// 订阅数据源的 subscriptions

// namespace 表示在全局 state 上的 key
// state 是初始值，在这里是空数组
// reducers 等同于 redux 里的 reducer，接收 action，同步更新 state
import { delay } from 'dva/saga';

export default {
    namespace: 'products',
    state: [ { name: 'dva', id: 1 }, { name: 'antd', id: 2 } ],
    reducers: {
      'delete'(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
    effects: {
      *deleteAfter1Second(action, { call, put }) {
        yield call(delay, 3000);
        yield put({ type: 'delete' });
      },
    },
  };
