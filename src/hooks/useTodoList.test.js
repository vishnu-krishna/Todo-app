import { act, renderHook } from '@testing-library/react-hooks'
import useTodoList from "./useTodoList"


describe("useTodoList hook", () => {

  const sampleTodos = [
    { id: 2, task: "Testing1", completed: false, priority: 1 },
    { id: 4, task: "Testing2", completed: true, priority: 2 },
  ]

  it("should addTodo", () => {
    const result = renderHook(() => useTodoList()).result
    const addTodo = (...args) => result.current.addTodo(...args)

    act(() => addTodo(sampleTodos[0]))
    expect(result.current.todos).toEqual([ sampleTodos[0] ])
  })

  it("should deleteTodo", () => {
    const result = renderHook(() => useTodoList([ ...sampleTodos ])).result
    const deleteTodo = (...args) => result.current.deleteTodo(...args)

    act(() => deleteTodo(sampleTodos[0].id))
    expect(result.current.todos).toEqual([ sampleTodos[1] ])
  })

  it("should getNextTodoId", () => {
    const result = renderHook(() => useTodoList(sampleTodos)).result
    const getNextTodoId = (...args) => result.current.getNextTodoId(...args)

    expect(getNextTodoId())
      .toBe(5)
  })

  it("should getNextTodoId for first ID", () => {
    const result = renderHook(() => useTodoList()).result
    const getNextTodoId = (...args) => result.current.getNextTodoId(...args)

    expect(getNextTodoId())
      .toBe(1)
  })

  it("should updateTodo", () => {
    const result = renderHook(() => useTodoList(sampleTodos)).result
    const updateTodo = (...args) => result.current.updateTodo(...args)

    act(() => updateTodo({ ...sampleTodos[0], completed: true }))
    expect(result.current.todos)
      .toEqual([
        { ...sampleTodos[0], completed: true },
        sampleTodos[1]
      ])
  })

  it("should ignore call to updateTodo on missing todo", () => {
    const result = renderHook(() => useTodoList(sampleTodos)).result
    const updateTodo = (...args) => result.current.updateTodo(...args)

    act(() => updateTodo({ ...sampleTodos[0], completed: true, id: 99 }))
    expect(result.current.todos)
      .toEqual(sampleTodos)
  })

})
