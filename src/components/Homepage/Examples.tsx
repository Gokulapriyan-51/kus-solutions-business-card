import examples from '@/data/examples.json';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import {
  FiCode,
  FiDatabase,
  FiCpu,
  FiServer,
  FiLayers,
  FiCloud,
} from 'react-icons/fi';
import { MdRocketLaunch } from 'react-icons/md';

const techIcons: Record<string, JSX.Element> = {
  'node.js': <FiServer className="text-green-400" />,
  'nestjs': <FiServer className="text-red-400" />,
  'react': <FiCode className="text-cyan-400" />,
  'vue.js': <FiLayers className="text-green-400" />,
  'typescript': <FiCode className="text-blue-400" />,
  'mongodb': <FiDatabase className="text-green-400" />,
  'postgresql': <FiDatabase className="text-blue-400" />,
  'docker': <FiCpu className="text-sky-400" />,
  'mqtt': <FiCpu className="text-lime-400" />,
  'auth0': <FiCloud className="text-yellow-400" />,
  'jwt': <FiCloud className="text-pink-400" />,
};

const getTechIcon = (tech: string) =>
  techIcons[tech.toLowerCase()] || <FiCode className="text-gray-400" />;

export default function HomepageExamples() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from('.project-card', {
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative isolate z-50 bg-[#0b0f19] py-24"
    >
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 bg-primary/10 blur-3xl rounded-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
            <MdRocketLaunch />
            Featured Projects
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-white">
            Technical Portfolio
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-400">
            Enterprise-grade systems built with scalability, security, and performance in mind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {examples
            .filter(p => p.title && p.text)
            .map((project, index) => (
              <div
                key={index}
                className="project-card relative flex h-full flex-col rounded-2xl border border-gray-700/60 bg-gradient-to-br from-gray-800 to-gray-900 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
              >
                {/* Index */}
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark font-bold text-white shadow-lg">
                  #{index + 1}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-300">
                  {project.text}
                </p>

                {/* Tech stack */}
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag: string, i: number) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/70 px-3 py-1.5 text-xs text-gray-200"
                      >
                        {getTechIcon(tag)}
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
