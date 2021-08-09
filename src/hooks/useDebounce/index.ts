import { useEffect, useCallback, useRef } from 'react'
import _ from 'lodash'

const useIsMounted = () => {
  const isMountedRef = useRef(true)
  useEffect(() => {
    return () => {
      isMountedRef.current = false
    }
  }, [])
  return () => isMountedRef.current
}

function useDebounce(cb: any, delay: number) {
  const options = {
    leading: false,
    trailing: true,
  }
  const inputsRef = useRef(cb)
  const isMounted = useIsMounted()
  useEffect(() => {
    inputsRef.current = { cb, delay }
  })

  return useCallback(
    _.debounce(
      (...args) => {
        if (inputsRef.current.delay === delay && isMounted()) inputsRef.current.cb(...args)
      },
      delay,
      options
    ),
    [delay, _.debounce]
  )
}

export default useDebounce
