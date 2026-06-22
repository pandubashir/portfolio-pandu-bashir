export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex items-center justify-between px-6 md:px-12 z-100 border-b border-white/8 bg-[#080b12]/75 backdrop-blur-2xl">
      <div className="text-base font-bold tracking-wide">
        Pandu Bashir Alamin<span className="text-accent">.</span>
      </div>
      <ul className="hidden md:flex gap-9 list-none">
        {[
          { href: '#hero', label: 'Home' },
          { href: '#skills', label: 'Skills' },
          { href: '#about', label: 'About' },
          { href: '#projects', label: 'Projects' },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="no-underline text-muted2 text-sm font-medium tracking-wide transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-2.5">
        <a
          href="https://www.linkedin.com/in/pandu-bashir-alamin-a357a8331/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
          className="w-8.5 h-8.5 rounded-[9px] border border-white/8 flex items-center justify-center text-muted2 no-underline text-sm transition-all bg-white/4 hover:bg-accent/10 hover:border-accent/40 hover:text-accent"
        >
          in
        </a>
        <a
          href="mailto:pandubashir@gmail.com"
          title="Email"
          className="w-8.5 h-8.5 rounded-[9px] border border-white/8 flex items-center justify-center text-muted2 no-underline text-sm transition-all bg-white/4 hover:bg-accent/10 hover:border-accent/40 hover:text-accent"
        >
          ✉
        </a>
      </div>
    </header>
  )
}
