import { MuiThemeProvider } from "@material-ui/core"
import store from 'store'
import React from "react"
import GlobalStyle from "config/globalStyle"
import TodoList from "components/TodoList/TodoList"
import TodoSummary from "components/TodoSummary/TodoSummary"
import theme from "config/theme"
import useTodoList from "../hooks/useTodoList"
import AddTodo from "components/AddTodo/AddTodo"
import { StyledAppWrapper } from "pages/App.styles"

export const App = () => {
  const {
    addTodo,
    deleteTodo,
    getNextTodoId,
    todos,
    updateTodo,
  } = useTodoList(store.get("todos"))

  const hasTodos = todos.length > 0

  return (
    <>
      <GlobalStyle/>
      <MuiThemeProvider theme={theme}>
        <StyledAppWrapper>
          {hasTodos && (
            <TodoList
              onDelete={deleteTodo}
              onUpdate={updateTodo}
              todos={todos}
            />
          )}
          <AddTodo
            getId={getNextTodoId}
            onAdd={addTodo}
          />
          <TodoSummary todos={todos}/>
        </StyledAppWrapper>
      </MuiThemeProvider>
    </>
  )
}


