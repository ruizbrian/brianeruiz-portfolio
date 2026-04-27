import { motion } from 'framer-motion'
import { stagger, fadeUp } from './motion'

const jobs = [
  {
    company:  'Crop Management Company',
    title:    'Data Analyst',
    period:   'May 2025 – Present',
    location: 'Delano, CA',
    desc:     'Building automation systems, API integrations, and AI-powered tools for a large-scale citrus farming operation managing 10,000+ acres.',
  },
  {
    company:  'Kern Medical Hospital Authority',
    title:    'Information System Specialist I',
    period:   'Aug 2024 – May 2025',
    location: 'Bakersfield, CA',
    desc:     'IT support, device deployment, user account management, and infrastructure maintenance for a hospital system.',
  },
]

export default function Experience() {
  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <motion.div
        className="section-inner"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.p variants={fadeUp} className="section-label">Experience</motion.p>
        <motion.h2 variants={fadeUp} className="section-heading">
          Where I've worked.
        </motion.h2>

        <motion.div variants={stagger} className="relative max-w-2xl">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              variants={fadeUp}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Timeline line + dot */}
              <div className="relative flex flex-col items-center" style={{ width: 15 }}>
                <div className="timeline-dot" />
                {i < jobs.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Content */}
              <div className="pb-4">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3
                    className="font-display font-bold text-xl"
                    style={{ color: 'var(--ink)' }}
                  >
                    {job.company}
                  </h3>
                  <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                    {job.location}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="font-body font-semibold text-sm"
                    style={{ color: 'var(--accent2)' }}
                  >
                    {job.title}
                  </span>
                  <span className="font-mono text-xs" style={{ color: 'var(--muted)' }}>
                    {job.period}
                  </span>
                </div>

                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--muted)' }}
                >
                  {job.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
