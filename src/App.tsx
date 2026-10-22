import { useEffect, useState, type ReactNode } from 'react'
import { education, profile, projects, stack, studies, work } from './content'
import portrait from './portrait.jpg'

type Theme = 'light' | 'dark'

const year = new Date().getFullYear()

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => (document.documentElement.dataset.theme as Theme) ?? 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // storage can be blocked; the toggle still works for this visit
    }
  }, [theme])

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))] as const
}

function formatTime(timeZone: string) {
  return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date())
}

function useLocalTime(timeZone: string) {
  const [time, setTime] = useState(() => formatTime(timeZone))

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(timeZone)), 15_000)
    return () => clearInterval(id)
  }, [timeZone])

  return time
}

function Section({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <header className="section-head">
        <span className="mono muted">{index}</span>
        <h2 id={`${id}-title`}>{title}</h2>
      </header>
      {children}
    </section>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const time = useLocalTime(profile.timeZone)

  return (
    <div className="page">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <img className="portrait" src={portrait} alt={profile.name} width={900} height={957} />
          <h1 className="name">{profile.name}</h1>
          <p className="muted">
            {profile.role}, {profile.focus}
          </p>

          <dl className="facts mono">
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Local time</dt>
              <dd>{time} GST</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>
                <span className="dot" aria-hidden /> Open to roles
              </dd>
            </div>
          </dl>

          <nav className="toc mono" aria-label="Sections">
            <a href="#work">01 Work</a>
            <a href="#projects">02 Projects</a>
            <a href="#stack">03 Stack</a>
            <a href="#education">04 Education</a>
            <a href="#contact">05 Contact</a>
          </nav>

          <div className="sidebar-foot mono">
            <a href={profile.resume} download>
              Résumé (PDF)
            </a>
            <button type="button" className="link-button" onClick={toggleTheme}>
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      </aside>

      <main className="content">
        <p className="lede">
          I build software that has to keep up with the real world: live camera feeds, moving maps, wearables streaming
          vitals. Mostly in <em>Flutter</em>, increasingly in <em>React</em>, with enough backend to make the two meet.
          Right now that means a surveillance platform at Etimad in Abu Dhabi.
        </p>

        <Section id="work" index="01" title="Work">
          <ol className="rows">
            {work.map((job) => (
              <li key={job.company}>
                <details className="row" open={job === work[0]}>
                  <summary>
                    <span className="mono muted when">{job.years}</span>
                    <span className="what">
                      <strong>{job.company}</strong>
                      <span className="muted">{job.role}</span>
                    </span>
                    <span className="mono muted where">{job.location}</span>
                  </summary>
                  <div className="row-body">
                    <p>{job.summary}</p>
                    {job.points.length > 0 && (
                      <ul>
                        {job.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" index="02" title="Projects">
          <ol className="projects">
            {projects.map((project, i) => (
              <li key={project.name} className="project">
                <span className="mono muted">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <p className="mono muted tags">
                    {project.kind} · {project.stack.join(', ')}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="subhead mono muted">Practice work, AI/ML course</h3>
          <ul className="studies">
            {studies.map((s) => (
              <li key={s.name}>
                <span>{s.name}</span>
                <span className="muted">{s.note}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="stack" index="03" title="Stack">
          <dl className="stack">
            {stack.map((g) => (
              <div key={g.group}>
                <dt className="mono muted">{g.group}</dt>
                <dd>{g.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="education" index="04" title="Education">
          <ul className="rows plain">
            {education.map((e) => (
              <li key={e.name} className="row static">
                <span className="mono muted when">{e.years}</span>
                <span className="what">
                  <strong>{e.name}</strong>
                  <span className="muted">{e.place}</span>
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" index="05" title="Contact">
          <p className="contact-line">
            The fastest way to reach me is email. I reply within a day.
          </p>
          <a className="email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="links mono">
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </li>
          </ul>
        </Section>

        <footer className="footer mono muted">
          <span>© {year} {profile.name}</span>
          <a href="#top">Back to top ↑</a>
        </footer>
      </main>
    </div>
  )
}
