import React from "react"
import TodoItem from "components/TodoItem/TodoItem"
import { StyledTodoListWrapper } from "components/TodoList/TodoList.styles"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

const TodoList = ({ id, todos, onDelete, onUpdate }) => {
  const totalListVariant = {
    hidden: {
      y: -250,
      opacity: 0
    },
    visible: {
      y: -10,
      delay: 2,
      opacity: 1,
      duration: 2,
      type: 'spring',
      stiffness: 120
    }
  }

  todos.sort((a, b) => {
    if (b.priority !== a.priority) {
      return b.priority - a.priority
    }
    return a.task.localeCompare(b.task)
  })

  return (
    <StyledTodoListWrapper data-testid={id}>
      {todos.map(todo => (
        <motion.div variants={totalListVariant}
                    initial="hidden"
                    animate="visible"
                    key={todo.id}>
          <TodoItem
            onUpdate={onUpdate}
            onDelete={() => onDelete(todo.id)}
            todo={todo}
          />
        </motion.div>

      ))}
    </StyledTodoListWrapper>
  )
}


TodoList.propTypes = {
  id: PropTypes.string,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool,
      id: PropTypes.number,
      priority: PropTypes.number,
      task: PropTypes.string
    })
  ),
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func
}

export default TodoList


