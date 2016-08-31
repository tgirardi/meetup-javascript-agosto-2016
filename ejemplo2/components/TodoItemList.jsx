// @flow
import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

const TodoItemList = ({ items }: { items: Array<Object> }) => (
  <ul>
    {
      items.map((item: Object) => (
        <TodoItem text={item.text} key={item.key} />
      ))
    }
  </ul>
)

TodoItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}

export default TodoItemList
