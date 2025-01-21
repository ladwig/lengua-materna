'use client';

import { Noise } from '@/components/ui/noise'

export default function Hero() {
  return (
    <section className="h-screen w-full bg-black flex items-center justify-center relative">
      <div className="flex flex-col items-center z-10">
        <h1 className="text-white text-6xl mb-4">
          lengua materna
        </h1>
        <p className="text-white text-xl tracking-widest uppercase">
          Kill the silence
        </p>
      </div>
      <Noise
        patternSize={75}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={35}
      />
      {/* Video background will be added here later */}
    </section>
  )
} 