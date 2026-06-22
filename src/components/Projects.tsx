import { useFadeIn } from '../hooks/useFadeIn'
import { PROJECTS } from '../data/projects'

export function Projects() {
  const label = useFadeIn<HTMLDivElement>()
  const title = useFadeIn<HTMLHeadingElement>()
  const card = useFadeIn<HTMLAnchorElement>()

  return (
    <section id="projects" className="px-6 md:px-20 py-16 md:py-24 relative">
      <div ref={label.ref} className={`${label.className} text-[0.7rem] font-bold tracking-[3px] uppercase text-accent mb-3.5`}>
        Work
      </div>
      <h2 ref={title.ref} className={`${title.className} text-[2rem] md:text-[3.5rem] font-extrabold tracking-[-2px] leading-[1.05]`}>
        My Best Creations.
      </h2>

      {PROJECTS.map((project) => (
        <a
          key={project.url}
          ref={card.ref}
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className={`${card.className} project-card rounded-3xl p-8 md:p-12 mt-8 relative overflow-hidden no-underline block transition-all duration-300 border border-accent/20 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(139,92,246,0.22)]`}
          style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' }}
        >
          <div
            className="absolute rounded-full blur-[80px] pointer-events-none"
            style={{ width: 300, height: 300, background: 'rgba(139,92,246,0.15)', top: -80, right: -80 }}
          />
          <div
            className="absolute rounded-full blur-[80px] pointer-events-none"
            style={{ width: 200, height: 200, background: 'rgba(99,102,241,0.1)', bottom: -40, left: '20%' }}
          />
          <div className="flex gap-2.5 mb-5 items-center flex-wrap relative">
            <span className="text-3xl">{project.emoji}</span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/10 border border-white/15 text-white/80 text-[0.68rem] font-bold px-3 py-1 rounded-full tracking-wide uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-[1.6rem] md:text-[2.2rem] font-extrabold text-white mb-3.5 tracking-[-1px] relative">
            {project.title}
          </h3>
          <p className="text-white/60 text-base mb-9 max-w-[600px] leading-[1.85] relative">{project.desc}</p>
          <div className="inline-flex items-center gap-2.5 text-white font-bold text-[0.88rem] tracking-wide relative">
            <span>View Project</span>
            <div className="project-link-arrow w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-all">
              →
            </div>
          </div>
        </a>
      ))}
    </section>
  )
}
