'use client';

import { Noise } from '@/components/ui/noise'
import { PixelTrail } from '@/components/ui/pixel-trail'
import { MorphingText } from '@/components/ui/morphing-text'
import { useScreenSize } from '@/components/hooks/use-screen-size'
import Image from 'next/image'
import Link from 'next/link'

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
    <section className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative py-12 md:py-24">
      <div className="flex flex-col items-center z-20 px-4 text-center w-full mb-8 md:mb-12">
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

      <div className="z-20 flex justify-center w-full px-4">
        <Link href="https://lengua-materna.bandcamp.com/album/voyage" target="_blank" rel="noopener noreferrer" className="group block max-w-xs rounded-lg border border-neutral-700 bg-neutral-800/30 p-4 transition-colors hover:border-neutral-500 hover:bg-neutral-700/50">
          <div className="aspect-square w-full relative mb-3 overflow-hidden rounded">
            <Image 
              src="/covers/voyage.jpg" 
              alt="Voyage Album Cover" 
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-neutral-300 transition-colors">Voyage</h3>
          <p className="text-sm text-neutral-400">by Npoint_O</p>
          <p className="text-xs text-neutral-500 mt-2">releases April 28, 2025</p>
          <div className="flex space-x-2 mt-3">
            <span className="inline-block bg-neutral-700 rounded px-2 py-0.5 text-xs font-medium text-neutral-300">Digital</span>
            <span className="inline-block bg-neutral-700 rounded px-2 py-0.5 text-xs font-medium text-neutral-300">Vinyl</span>
          </div>
        </Link>
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