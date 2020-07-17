import React from '../../../node_modules/react';
import { connect } from '../../../node_modules/dva';
import AddTodo from '../../components/TodoList/TodoList'

function TodoList({ dispatch, todoList }) {

  function handleAdd(addedList) {
    dispatch({
      type: 'todoList/add',
      payload: addedList,
    });
  }

  return (
    <div>
      <span>待办事项</span>
      <AddTodo
        data = {todoList}
        onAdd = {handleAdd}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  }
};

export default connect(mapStateToProps)(TodoList);
