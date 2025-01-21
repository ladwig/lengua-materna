'use client';

import { Noise } from '@/components/ui/noise'
import { PixelTrail } from '@/components/ui/pixel-trail'
import { useScreenSize } from '@/components/hooks/use-screen-size'

export default function Hero() {
  const screenSize = useScreenSize()
  
  return (
    <section className="h-screen w-full bg-black flex items-center justify-center relative">
      <div className="flex flex-col items-center z-20 px-4 text-center">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl mb-4">
          lengua materna
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl tracking-widest uppercase">
          Kill the silence
        </p>
      </div>
      <PixelTrail
        pixelSize={screenSize.lessThan('md') ? 48 : 64}
        fadeDuration={600}
        delay={0}
        className="z-10"
        pixelClassName="rounded-full bg-purple-500/10"
      />
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