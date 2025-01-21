'use client';

import { Noise } from '@/components/ui/noise'
import { PixelTrail } from '@/components/ui/pixel-trail'
import { MorphingText } from '@/components/ui/morphing-text'
import { useScreenSize } from '@/components/hooks/use-screen-size'

export default function Hero() {
  const screenSize = useScreenSize()
  
  const translations = [
    "lengua materna",          // Spanish
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "mother tongue",           // English
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "母語",                    // Japanese
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "Muttersprache",          // German
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "اللغة الأم",             // Arabic
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "langue maternelle",      // French
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "母语",                    // Chinese
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "모국어",                  // Korean
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "lingua madre",           // Italian
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "родной язык",            // Russian
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "mãe língua",             // Portuguese
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "मातृभाषा",                // Hindi
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "modersmål",              // Swedish
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "moedertaal",             // Dutch
    "ʟᴇɴɢᴜᴀ ᴍᴀᴛᴇʀɴᴀ",
    "język ojczysty"          // Polish
  ]
  
  return (
    <section className="h-screen w-full bg-black flex items-center justify-center relative">
      <div className="flex flex-col items-center z-20 px-4 text-center w-full">
        <div className="md:mb-2 w-full">
          <MorphingText 
            texts={translations}
            className="text-white"
          />
        </div>
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