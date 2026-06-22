import { useFadeIn } from '../hooks/useFadeIn'
import { SKILLS } from '../data/skills'

function ToolCard({ skill }: { skill: (typeof SKILLS)[number] }) {
  return (
    <div className="w-[110px] h-[110px] rounded-[18px] flex flex-col items-center justify-center gap-2.5 flex-shrink-0 cursor-pointer transition-all border border-white/8 bg-white/4 hover:bg-accent/8 hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(139,92,246,0.15)] group">
      {skill.type === 'dev' ? (
        <i className={`${skill.icon} text-[2.4rem] text-muted2 transition-colors group-hover:text-accent`} />
      ) : (
        <span className="text-[2rem]">{skill.emoji}</span>
      )}
      <span className="text-[0.72rem] font-bold text-muted transition-colors tracking-wide group-hover:text-accent">
        {skill.label}
      </span>
    </div>
  )
}

export function Skills() {
  const label = useFadeIn<HTMLDivElement>()
  const title = useFadeIn<HTMLHeadingElement>()
  const doubled = [...SKILLS, ...SKILLS]

  return (
    <section id="skills" className="pb-24 overflow-hidden">
      <div className="text-center mb-8 px-6 md:px-20">
        <div ref={label.ref} className={`${label.className} text-[0.7rem] font-bold tracking-[3px] uppercase text-accent mb-3.5`}>
          Expertise
        </div>
        <h2 ref={title.ref} className={`${title.className} text-[2rem] md:text-[3.5rem] font-extrabold tracking-[-2px] leading-[1.05]`}>
          Tools &amp; Skills
        </h2>
      </div>
      <div className="marquee-wrap overflow-hidden">
        <div className="marquee-track flex gap-4 w-max">
          {doubled.map((skill, i) => (
            <ToolCard key={i} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
