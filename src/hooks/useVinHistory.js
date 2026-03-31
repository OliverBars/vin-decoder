import { useState, useEffect } from 'react'

const STORAGE_KEY = 'vin_history'
const MAX_ITEMS = 3

export function useVinHistory() {
  const [history, setHistory] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
  }, [history])

  function addToHistory(vin) {
    setHistory((prev) => {
      const filtered = prev.filter((item) => item !== vin)
      return [vin, ...filtered].slice(0, MAX_ITEMS)
    })
  }

  return { history, addToHistory }
}
