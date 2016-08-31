// @flow
import React, { PropTypes } from 'react'
import locals from '../styles/TodoItem.less'

const TodoItem = ({ text }: { text: string }) => (
  <li className={locals.todoItem}>{text}</li>
)

TodoItem.propTypes = {
  text: PropTypes.string,
}

export default TodoItem
