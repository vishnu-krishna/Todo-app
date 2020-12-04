import { act, renderHook } from '@testing-library/react-hooks'
import useInputValue from "./useInputValue"

describe("useInputValue hook", () => {
  it("should set onChange", () => {
    const result = renderHook(() => useInputValue("")).result
    const onChange = (...args) => result.current.onChange(...args)

    act(() => onChange({ currentTarget: { value: "This" } }))
    expect(result.current.value).toBe("This")
  })

  it("should set value based on setValue", () => {
    const result = renderHook(() => useInputValue("")).result
    const setValue = (...args) => result.current.setValue(...args)

    act(() => setValue("This"))
    expect(result.current.value).toBe("This")
  })

})
