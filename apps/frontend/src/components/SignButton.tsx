import React from 'react'

type SignButtonProps = {
    children: React.ReactNode
    className?: string
    onSubmit: () => void
}

function SignButton({children: children, className: className, onSubmit: onSubmit}: SignButtonProps) {
  return (
    <button className={className} onClick={onSubmit}>
        {children}
    </button>
  )
}

export default SignButton