import React from 'react'

export const U_useDisableBodyScroll = (isOpen = false) => {
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
  }, [isOpen])
}
