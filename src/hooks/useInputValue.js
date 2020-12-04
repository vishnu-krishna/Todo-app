import { useCallback, useState } from "react"

function useInputValue(initialValue) {
  const [ value, setValue ] = useState(initialValue)
  const onChange = useCallback((event) => {
    setValue(event.currentTarget.value)
  }, [])

  return { setValue, value, onChange }
}

export default useInputValue
