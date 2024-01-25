import React from 'react'
import AuthContext from './AuthContext'

type ProvidersProps = {
    children: React.ReactNode
}

function Providers({children}: ProvidersProps) {
  return (
    <AuthContext>
        {children}
    </AuthContext>
  )
}

export default Providers