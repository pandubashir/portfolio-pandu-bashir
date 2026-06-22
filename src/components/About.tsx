import { useFadeIn } from '../hooks/useFadeIn'
import { EDUCATION, FOCUS_AREAS } from '../data/about'

export function About() {
  const label = useFadeIn<HTMLDivElement>()
  const title = useFadeIn<HTMLHeadingElement>()
  const text = useFadeIn<HTMLParagraphElement>()
  const grid = useFadeIn<HTMLDivElement>()

  return (
    <section id="about" className="px-6 md:px-20 py-16 md:py-24 relative">
      <div ref={label.ref} className={`${label.className} text-[0.7rem] font-bold tracking-[3px] uppercase text-accent mb-3.5`}>
        Who I Am
      </div>
      <h2 ref={title.ref} className={`${title.className} text-[2rem] md:text-[3.5rem] font-extrabold tracking-[-2px] mb-12 leading-[1.05]`}>
        About me.
      </h2>
      <p
        ref={text.ref}
        className={`${text.className} text-[1.05rem] text-muted2 leading-[1.9] pl-5 border-l-2 border-accent mb-10`}
      >
        Software Engineer with an interest in Data Science and Data Analysis. Passionate about
        building functional and user-oriented digital solutions while continuously improving
        technical skills. Interested in developing applications, working with data, and solving
        real-world problems through technology.
      </p>
      <div ref={grid.ref} className={`${grid.className} grid grid-cols-1 md:grid-cols-2 gap-6`}>
        <div className="glass rounded-[20px] p-7">
          <div className="text-base font-bold mb-5">🎓 Education</div>
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className={`flex gap-4 py-4 ${i < EDUCATION.length - 1 ? 'border-b border-white/8' : ''}`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-accent mt-2 flex-shrink-0 shadow-[0_0_12px_rgba(167,139,250,0.5)]" />
              <div>
                <div className="text-sm font-bold mb-1">{edu.school}</div>
                <div className="text-[0.78rem] text-muted">{edu.year}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass rounded-[20px] p-7">
          <div className="text-base font-bold mb-5">⚡ Focus Areas</div>
          {FOCUS_AREAS.map((area, i) => (
            <div
              key={area}
              className={`flex items-center gap-2.5 py-2.5 ${i < FOCUS_AREAS.length - 1 ? 'border-b border-white/8' : ''}`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(167,139,250,0.6)] flex-shrink-0" />
              <span className="text-[0.88rem] text-muted2">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
