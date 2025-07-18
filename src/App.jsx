import { useState } from 'react'
import TheCloud from './components/TheCloud.jsx'
import CloudInput from './components/CloudInput.jsx'
import { analyzeMood } from './analyzeMood'
import './index.css';

function App() {
  const [mood, setMood] = useState('')
  const [advice, setAdvice] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInput = async (input) => {
    const { mood: detectedMood, advice: generatedAdvice } = await analyzeMood(input)
    setMood(detectedMood)
    setAdvice(generatedAdvice)
    setIsSubmitted(true)
  }

  const handleReset = () => {
    setMood('')
    setAdvice('')
    setIsSubmitted(false)
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-2 sm:gap-4 px-2 sm:px-4 relative">
        <TheCloud mood={mood} />
        <CloudInput onSubmit={handleInput} advice={advice} isSubmitted={isSubmitted} mood={mood} onReset={handleReset} />
      </div>
      <a
        href="https://coff.ee/offlinecrush"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 bg-amber-100 hover:bg-amber-200 text-amber-800 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs font-mono shadow-md hover:shadow-lg transition-all duration-300 border border-amber-200 flex items-center gap-1 z-50"
      >
        ☕ buy me coffee
      </a>
    </>
  )
}

export default App