import { useEffect, useRef } from "react"

const useEventListener =  (
  eventType,
  callback,
  element = null
) =>  {
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    if (element == null) return
    const handler = e => callbackRef.current(e)
    element.addEventListener(eventType, handler)

    return () => element.removeEventListener(eventType, handler)
  }, [eventType, element])


  return callbackRef;

}

export default useEventListener;