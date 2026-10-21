import Image from 'next/image'
import {
  siClaude, siCypress, siDocker, siGithubactions, siGooglecloud, siNextdotjs, siOpenjdk,
  siPostgresql, siPrisma, siPython, siReact, siTypescript, siVite, siVitest, siVuedotjs,
} from 'simple-icons'
import { FlipWords } from '@/components/flip-words'
import { Spotlight } from '@/components/spotlight'
import { Timeline, type TimelineItem } from '@/components/timeline'

const links = [
  { label: 'GitHub', href: 'https://github.com/anders2410' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anders-holt-knudsen-0924b9175/' },
  { label: 'Email', href: 'mailto:andhk11@gmail.com' },
]

const icons: Record<string, string> = {
  TypeScript: siTypescript.path,
  React: siReact.path,
  'Vue.js': siVuedotjs.path,
  'Next.js': siNextdotjs.path,
  Vite: siVite.path,
  Prisma: siPrisma.path,
  Vitest: siVitest.path,
  Python: siPython.path,
  PostgreSQL: siPostgresql.path,
  Java: siOpenjdk.path,
  Docker: siDocker.path,
  'GitHub Actions': siGithubactions.path,
  'Google Cloud': siGooglecloud.path,
  Cypress: siCypress.path,
  'Claude Code': siClaude.path,
}

const stack = ['TypeScript', 'Vite', 'Nitro', 'Prisma', 'PostgreSQL', 'Python', 'Docker', 'GitHub Actions', 'Google Cloud', 'Claude Code']

const bento = [
  {
    name: 'Frontend',
    text: 'My home turf. I build fast, intuitive interfaces with Vite, Nitro, TypeScript and Prisma at Hakio, and have shipped production code in both React and Vue. I keep up with the tooling around it, from Next.js to Vitest.',
    chips: ['TypeScript', 'React', 'Vue.js', 'Next.js', 'Vite', 'Nitro', 'Prisma', 'Vitest'],
    span: 'md:col-span-2',
  },
  {
    name: 'Backend',
    text: 'Reliable, scalable services in TypeScript and Python on PostgreSQL. Java is where I started, and it still shapes how I think about types and structure.',
    chips: ['TypeScript', 'Python', 'PostgreSQL', 'Java'],
    span: '',
  },
  {
    name: 'DevOps',
    text: 'I own the path to production: containers with Docker, automated pipelines in GitHub Actions, and infrastructure on Google Cloud Platform. Cypress covers the browser tests.',
    chips: ['Docker', 'GitHub Actions', 'Google Cloud', 'Cypress'],
    span: '',
  },
  {
    name: 'Leadership',
    text: 'As Team Lead I set technical direction and keep the team shipping, while staying hands-on in the code. Lifelong learning is the part of the job I value most, so I treat it as a team habit, not just a personal one.',
    chips: ['Team Lead', 'Technical Leadership'],
    span: 'md:col-span-2',
  },
  {
    name: 'AI & Claude Code',
    text: 'I drive the AI agenda at Hakio and am a frontrunner in how we adopt and use it. My focus is weaving AI deeply into existing workflows and making success with it repeatable, not a one-off. I use it to keep learning and to level up myself and my colleagues.',
    chips: ['Claude Code', 'AI workflows', 'Team enablement'],
    span: 'md:col-span-3',
  },
]

const experience: TimelineItem[] = [
  {
    role: 'Team Lead',
    org: 'Hakio',
    period: 'Dec 2025 – present',
    text: 'Team and technical leadership, and driving the AI agenda across the company.',
  },
  {
    role: 'Software Engineer',
    org: 'Hakio',
    period: 'Oct 2023 – Dec 2025',
    text: 'Built and maintained a high-performance web app that helps customers manage inventory and streamline planning. Full stack, plus DevOps on Docker, GitHub Actions and Google Cloud.',
  },
  {
    role: 'Frontend Developer',
    org: 'Raptor Services',
    period: 'Aug 2022 – Oct 2023',
    text: 'Frontend solutions in TypeScript and Vue.js for a company building personalized customer experiences.',
  },
  {
    role: 'Full-stack Developer',
    org: 'Styrelsen for It og Læring',
    period: 'Sep 2020 – Aug 2022',
    text: 'Agile team on React, TypeScript, Cypress, Java and PostgreSQL. Mostly frontend, backend whenever needed.',
  },
]

const years = Math.floor((Date.now() - new Date('2020-09-01').getTime()) / 3.156e10)

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="reveal border-t border-line py-20">
    <h2 className="mb-10 font-mono text-sm text-accent">{title}</h2>
    {children}
  </section>
)

export default function Home() {
  return (
    <>
      <div className="relative">
        <Spotlight />
        <header className="relative mx-auto flex min-h-[85vh] max-w-5xl flex-col-reverse items-start justify-center gap-10 px-6 py-24 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-4 font-mono text-accent">$ whoami</p>
            <h1 className="text-6xl font-bold leading-[0.95] tracking-tight sm:text-8xl">
              <span className="gradient-text">Anders</span>
              <br />
              Holt Knudsen
            </h1>
            <p className="mt-6 max-w-md text-xl text-muted">
              Software Engineer &amp; Team Lead at Hakio, based in Aarhus.
            </p>
            <p className="mt-2 text-xl text-muted">
              Building with <FlipWords words={stack} />
            </p>
            <nav className="mt-10 flex flex-wrap gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-full border border-line bg-card/60 px-5 py-2 backdrop-blur transition-colors hover:border-accent hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <Image
            src="/img/profile-picture-1.png"
            alt="Anders Holt Knudsen"
            width={224}
            height={224}
            priority
            className="size-40 rounded-3xl object-cover ring-1 ring-line sm:size-56 sm:rotate-3"
          />
        </header>
      </div>

      <main className="mx-auto max-w-5xl px-6">
        <Section id="technologies" title="01 / technologies">
          <p className="mb-10 max-w-prose text-lg leading-relaxed text-muted">
            A full-stack toolbox with a frontend core. These are the tools I work with day to day.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {bento.map((b) => (
              <div
                key={b.name}
                className={`flex flex-col justify-between gap-8 rounded-2xl border border-line bg-card p-6 transition-colors hover:border-accent ${b.span}`}
              >
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{b.name}</h3>
                  <p className="text-muted">{b.text}</p>
                </div>
                <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted">
                  {b.chips.map((c) => (
                    <li key={c} className="flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1">
                      {icons[c] && (
                        <svg viewBox="0 0 24 24" aria-hidden className="size-3.5 fill-current opacity-70">
                          <path d={icons[c]} />
                        </svg>
                      )}
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="02 / experience">
          <Timeline items={experience} />
        </Section>

        <Section id="about" title="03 / about">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
            <div className="max-w-prose">
              <p className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                <span className="gradient-text">{years} years</span> of building software, and still
                learning.
              </p>
              <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  It started with Information Technologies in high school and became a Bachelor in
                  Computer Science in 2020. What keeps me hooked is the learning. Right now that
                  means AI: how to integrate it deeply into existing workflows, and how to make
                  success with it repeatable for a whole team.
                </p>
                <p>
                  Away from the keyboard I travel, and diving has taken me around South-East Asia.
                  My favourite trip was Iran. It taught me about other cultures and religions and
                  gave me a new perspective on the world. At home it is floorball with Team Århus
                  Floorball, plus disc golf, padel and spikeball.
                </p>
              </div>
            </div>
            <Image
              src="/img/anders_desert_view.jpg"
              alt="Anders in the desert"
              width={429}
              height={885}
              className="h-auto w-64 shrink-0 rounded-xl object-cover"
            />
          </div>
        </Section>

        <footer className="border-t border-line py-10 text-center text-muted">
          <a href="mailto:andhk11@gmail.com" className="text-lg hover:text-accent">
            andhk11@gmail.com
          </a>
        </footer>
      </main>
    </>
  )
}
