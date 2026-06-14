"use client"

import { ReactNode, useEffect } from 'react'
import { useThemeStore } from '../store.themStore'

const ThemeProvider = ({children}:{children:ReactNode}) => {
 const {mode}=useThemeStore()
 useEffect(() => {
  const html = document.documentElement
  if (mode === 'dark') {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}, [mode])
  return (
    <div>
{children}
    </div>
  )
}

export default ThemeProvider