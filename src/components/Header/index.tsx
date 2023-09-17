import React from 'react'
import { Logo } from '../Logo'

export const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto py-6 px-8">
        <Logo />
      </div>
    </header>
  )
}
