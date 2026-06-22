import { useEffect, useRef, useState } from 'react'
import { TRACKS } from '../data/tracks'

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void
    YT?: any
  }
}

export function MusicPlayer() {
  const [open, setOpen] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [nowTitle, setNowTitle] = useState('-')

  const playersRef = useRef<any[]>([])
  const apiReadyRef = useRef(false)
  const pendingPlayRef = useRef(false)
  const userInteractedRef = useRef(false)
  const currentTrackRef = useRef(0)

  useEffect(() => {
    currentTrackRef.current = currentTrack
  }, [currentTrack])

  function playTrack(idx: number) {
    const players = playersRef.current
    const prev = currentTrackRef.current
    if (players[prev]?.stopVideo) players[prev].stopVideo()

    currentTrackRef.current = idx
    setCurrentTrack(idx)

    if (players[idx]?.playVideo) players[idx].playVideo()
    setNowTitle(TRACKS[idx].name)
    setIsPlaying(true)
  }

  function togglePlay() {
    const players = playersRef.current
    const idx = currentTrackRef.current
    if (!players.length || !players[idx]) return

    if (isPlaying) {
      if (players[idx].pauseVideo) players[idx].pauseVideo()
      setIsPlaying(false)
    } else {
      if (players[idx].playVideo) players[idx].playVideo()
      setNowTitle(TRACKS[idx].name)
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    window.onYouTubeIframeAPIReady = function () {
      TRACKS.forEach((t, i) => {
        playersRef.current[i] = new window.YT!.Player(`yt-${i}`, {
          videoId: t.ytId,
          playerVars: { autoplay: 0, controls: 0 },
          events: {
            onStateChange: function (e: any) {
              if (e.data === window.YT!.PlayerState.ENDED) {
                playTrack((i + 1) % TRACKS.length)
              }
            },
          },
        })
      })
      apiReadyRef.current = true
      if (pendingPlayRef.current) {
        setTimeout(() => playTrack(currentTrackRef.current), 500)
        pendingPlayRef.current = false
      }
    }

    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(script)

    function onFirstInteract() {
      if (userInteractedRef.current) return
      userInteractedRef.current = true
      document.removeEventListener('click', onFirstInteract)
      document.removeEventListener('touchstart', onFirstInteract)
      window.removeEventListener('scroll', onFirstInteract)
      if (apiReadyRef.current) {
        setTimeout(() => playTrack(currentTrackRef.current), 300)
      } else {
        pendingPlayRef.current = true
      }
    }

    document.addEventListener('click', onFirstInteract)
    document.addEventListener('touchstart', onFirstInteract)
    window.addEventListener('scroll', onFirstInteract, { passive: true })

    return () => {
      document.removeEventListener('click', onFirstInteract)
      document.removeEventListener('touchstart', onFirstInteract)
      window.removeEventListener('scroll', onFirstInteract)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div
        className={`fixed bottom-23 right-7 w-[300px] rounded-[22px] z-998 overflow-hidden border border-accent/20 bg-[#0a0814]/92 backdrop-blur-3xl shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-all duration-400 ${
          open ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95 pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)' }}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-4.5">
            <span className="text-[0.72rem] font-extrabold tracking-[3px] text-accent">🎵 STREAM</span>
            <button
              onClick={() => setOpen(false)}
              className="bg-transparent border-none text-muted cursor-pointer text-base"
            >
              ✕
            </button>
          </div>
          <div className="bg-accent/12 border border-accent/20 rounded-2xl p-3 flex items-center gap-3 mb-3.5">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-[1.1rem] flex-shrink-0 disc ${isPlaying ? 'spinning' : ''}`}
              style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))' }}
            >
              💿
            </div>
            <div>
              <div className="text-[0.58rem] tracking-[2px] text-accent font-bold">NOW PLAYING</div>
              <div className="text-[0.85rem] font-semibold text-white/95">{nowTitle}</div>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 mb-3.5">
            {TRACKS.map((t, i) => (
              <div
                key={t.ytId}
                onClick={() => playTrack(i)}
                className="flex items-center gap-3 px-2.5 py-2 rounded-xl cursor-pointer transition-colors hover:bg-white/5"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                  style={{ background: t.grad }}
                >
                  {t.icon}
                </div>
                <div className="flex-1">
                  <div className="text-[0.82rem] font-semibold text-white/90">{t.name}</div>
                  <div className="text-[0.7rem] text-muted">{t.sub}</div>
                </div>
                {currentTrack === i && <span className="text-accent text-xs">▶</span>}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 pt-3.5 border-t border-white/6">
            <button
              onClick={() => playTrack((currentTrack - 1 + TRACKS.length) % TRACKS.length)}
              className="bg-white/7 border-none text-white w-9 h-9 rounded-full cursor-pointer text-[0.95rem] transition-all flex items-center justify-center hover:bg-accent/20 hover:text-accent"
            >
              ⏮
            </button>
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full text-white text-[1.1rem] shadow-[0_4px_20px_rgba(139,92,246,0.4)] border-none cursor-pointer flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))' }}
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button
              onClick={() => playTrack((currentTrack + 1) % TRACKS.length)}
              className="bg-white/7 border-none text-white w-9 h-9 rounded-full cursor-pointer text-[0.95rem] transition-all flex items-center justify-center hover:bg-accent/20 hover:text-accent"
            >
              ⏭
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-7 right-7 w-[54px] h-[54px] rounded-full border-none cursor-pointer flex items-center justify-center text-[1.3rem] z-999 shadow-[0_8px_32px_rgba(139,92,246,0.4)] transition-all hover:scale-110"
        style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent2))' }}
      >
        🎵
      </button>

      <div style={{ display: 'none' }}>
        <div id="yt-0" />
        <div id="yt-1" />
      </div>
    </>
  )
}
