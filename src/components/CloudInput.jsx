import { useState } from 'react'
import WeatherForecast from './WeatherForecast'

function CloudInput({ onSubmit, advice, isSubmitted, mood, onReset }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() !== '') {
      onSubmit(input.trim())
      setInput('')
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col gap-2 sm:gap-4 w-full max-w-5xl mx-auto px-2 sm:px-0">
        <WeatherForecast mood={mood} advice={advice} />
        <div className="flex justify-end mt-3 sm:mt-6">
          <button
            onClick={onReset}
            className="bg-sky-300 hover:bg-sky-400 text-slate-900 px-3 py-1 rounded-full text-sm font-mono shadow-md transition-colors w-fit"
          >
            ← generate another
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-4 sm:mt-8 max-w-2xl w-full px-2 sm:px-4 mx-auto transition-all duration-300"
    >
      <textarea
        placeholder="☁️ write your thoughts into the cloud... see your forecast..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={6}
        className="w-full h-28 sm:h-36 text-xs sm:text-sm leading-relaxed border-2 border-[#a3c8f4] rounded-xl bg-[#f0f5ff] text-[#3e4a66] font-mono shadow-md hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-[#cddafd] p-3 sm:p-4 resize-none transition-all duration-300 placeholder-[#9aa6c7] mb-3"
      />
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-[#c3b7ff] hover:bg-[#d4c8ff] text-[#2a314b] px-2 py-1 rounded-full text-xs font-mono transition-all duration-300 whitespace-nowrap"
          aria-label="What's the weather?"
        >
          ☁️ what's the weather?
        </button>
      </div>
    </form>
  )
}

export default CloudInput