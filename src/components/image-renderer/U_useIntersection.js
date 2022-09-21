import React from 'react'

let listenerCallbacks = new WeakMap()
let observer

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (listenerCallbacks.has(entry.target)) {
      let cb = listenerCallbacks.get(entry.target)

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target)
        listenerCallbacks.delete(entry.target)
        cb()
      }
    }
  })
}

const getIntersectionObserver = () => {
  if (observer === undefined) {
    observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '30px',
      threshold: 0.15,
    })
  }

  return observer
}

export const U_useIntersection = (element, callback) => {
  React.useEffect(() => {
    let target = element.current
    let observer = getIntersectionObserver()

    listenerCallbacks.set(target, callback)
    observer.observe(target)

    return () => {
      listenerCallbacks.delete(target)
      observer.unobserve(target)
    }
  }, [])
}
