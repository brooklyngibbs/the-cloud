function WeatherForecast({ mood, advice }) {
  const weatherIcons = {
    sun: '☀️',
    rain: '🌧️',
    snow: '❄️',
    lightning: '⚡',
    rainbow: '🌈',
    wind: '💨',
    fog: '🌫️',
  }

  const weatherLabels = {
    sun: 'SUNNY',
    rain: 'RAINY',
    snow: 'SNOWY',
    lightning: 'STORMY',
    rainbow: 'RAINBOW',
    wind: 'WINDY',
    fog: 'FOGGY',
  }

  const outlookKeywords = {
    sun: ['radiant', 'glowing', 'warming'],
    rain: ['cleansing', 'refreshing', 'nourishing'],
    snow: ['peaceful', 'crystalline', 'softening'],
    lightning: ['energizing', 'powerful', 'transforming'],
    rainbow: ['colorful', 'hopeful', 'magical'],
    wind: ['shifting', 'flowing', 'changing'],
    fog: ['mysterious', 'introspective', 'clearing'],
  }

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 px-4">
      <div className="border-[3px] border-[#a0bfff] bg-gradient-to-r from-[#f8fbff] via-[#f0f4ff] to-[#e8f0ff] rounded-[6px] shadow-[4px_4px_0px_#a0bfff] overflow-hidden font-mono">
        {/* Header Bar */}
        <div className="flex justify-between items-center bg-gradient-to-r from-[#bfd9ff] to-[#d4e7ff] text-[#2a314b] px-6 py-3 border-b-[3px] border-[#a0bfff]">
          <span className="text-base font-bold">🌤️ emotional_forecast.txt</span>
        </div>

        {/* Horizontal Forecast Layout */}
        <div className="flex items-stretch">
          {/* Left Section - Current Weather */}
          <div className="flex-1 bg-gradient-to-br from-[#f0f4ff] to-[#e8f0ff] p-6 flex flex-col items-center justify-start text-center border-r-[2px] border-[#c4d7ff]">
          <p className="text-xs font-semibold text-[#6b7aa0] tracking-widest mb-4 text-center">
              current emotional climate
          </p>
            <div className="flex flex-col items-center justify-center flex-grow">
              <div className="text-6xl mb-4 drop-shadow-lg">
                {weatherIcons[mood] || '☁️'}
              </div>
              <h1 className="text-3xl font-bold text-[#2a314b] tracking-wide">
                {weatherLabels[mood] || 'CLOUDY'}
              </h1>
            </div>
          </div>

          {/* Center Section - Whimsical Wisdom */}
          <div className="flex-[2] bg-gradient-to-br from-white via-[#f8fbff] to-[#f0f4ff] flex flex-col items-center border-r-[2px] border-[#c4d7ff]">
            <p className="text-xs font-semibold text-[#6b7aa0] tracking-widest text-center mb-4">
              advice for the weather
            </p>

            {/* Wrapper to center advice box vertically */}
            <div className="flex flex-col items-center justify-center flex-grow w-full px-4">
              <div className="relative bg-gradient-to-br from-white via-[#f8fbff] to-[#f0f4ff] rounded-xl p-6 w-full max-w-sm">

                {/* Quote styling */}
                <div className="text-center">
                  <span className="text-2xl text-[#a0bfff] opacity-60">"</span>
                  <p className="text-base italic text-[#3a435e] leading-relaxed font-serif px-2">
                    {advice}
                  </p>
                  <span className="text-2xl text-[#a0bfff] opacity-60">"</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Extended Forecast */}
          <div className="flex-1 bg-gradient-to-br from-[#f0f4ff] to-[#e8f0ff] p-4">
            <p className="text-xs font-semibold text-[#6b7aa0] tracking-widest mb-4 text-center">
              extended outlook
            </p>
            
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-[#fff0e8] to-[#ffe7da] border-[2px] border-[#ffcfb8] rounded-lg p-2 shadow-[1px_1px_0px_#ffcfb8]">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-xs text-[#a07a6b] uppercase tracking-wider">next hour</p>
                    <p className="text-sm text-[#4b3a2a] font-bold">{outlookKeywords[mood]?.[0] || 'shifting'}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#f0ffe8] to-[#e7ffda] border-[2px] border-[#cfffb8] rounded-lg p-2 shadow-[1px_1px_0px_#cfffb8]">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-xs text-[#7aa06b] uppercase tracking-wider">today</p>
                    <p className="text-sm text-[#3a4b2a] font-bold">{outlookKeywords[mood]?.[1] || 'flowing'}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#e8f0ff] to-[#dae7ff] border-[2px] border-[#b8d0ff] rounded-lg p-2 shadow-[1px_1px_0px_#b8d0ff]">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-xs text-[#6b7aa0] uppercase tracking-wider">tomorrow</p>
                    <p className="text-sm text-[#2a314b] font-bold">{outlookKeywords[mood]?.[2] || 'evolving'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WeatherForecast