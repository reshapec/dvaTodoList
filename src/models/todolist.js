
export default {
  namespace: 'todoList',
  state: [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
  ],
  reducers: {
    'add'(state, { payload: addedList }) {
      return [...state, { title: addedList }];
    },
  },
};
