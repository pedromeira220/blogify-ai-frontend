import React from 'react'
import { Logo } from '../Logo'

export const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="max-w-6xl mx-auto py-12 px-8 flex items-center justify-between">
        <Logo />
        <span className="text-gray-500 text-base">
          Projeto para a EXPO bentinho
        </span>
      </div>
    </footer>
  )
}
