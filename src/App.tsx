import { FC } from 'react'
import HomePage from './presentation/pages/HomePage'

const App: FC = () => {
  return (
    <div className="relative min-h-screen bg-firm-bg">
      <div className="grain-overlay" aria-hidden="true" />
      <HomePage />
    </div>
  )
}

export default App
