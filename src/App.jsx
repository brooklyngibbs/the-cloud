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
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 relative">
        <TheCloud mood={mood} />
        <CloudInput onSubmit={handleInput} advice={advice} isSubmitted={isSubmitted} mood={mood} onReset={handleReset} />
      </div>
      <a
        href="https://coff.ee/offlinecrush"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        ☕ hehe
      </a>
    </>
  )
}

export default App