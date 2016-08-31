// @flow
import React from 'react'
import { render } from 'react-dom'
import TodoItemList from './components/TodoItemList'

render(
  <TodoItemList
    items={[
      { key: 1, text: 'leche' },
      { key: 2, text: 'huevos' },
      { key: 3, text: 'queso' },
    ]}
  />,
  document.getElementById('root')
)
