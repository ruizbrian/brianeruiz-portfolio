import { motion } from 'framer-motion'
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineGlobeAlt, HiOutlineLocationMarker } from 'react-icons/hi'
import { stagger, fadeUp } from './motion'

const details = [
  {
    icon: <HiOutlineBriefcase size={18} />,
    label: 'Current Role',
    value: 'Data Analyst — Crop Management Company',
  },
  {
    icon: <HiOutlineAcademicCap size={18} />,
    label: 'Education',
    value: 'B.S. Computer Science, Information Systems · CSUB · May 2025 · Honors · 3.67 GPA',
  },
  {
    icon: <HiOutlineGlobeAlt size={18} />,
    label: 'Languages',
    value: 'English & Spanish',
  },
  {
    icon: <HiOutlineLocationMarker size={18} />,
    label: 'Location',
    value: 'Central Valley, CA',
  },
]

export default function About() {
  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
    <motion.div
      className="section-inner"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.p variants={fadeUp} className="section-label">About</motion.p>
      <div className="grid md:grid-cols-[1fr_360px] gap-16 items-start">

        {/* Bio */}
        <motion.div variants={fadeUp}>
          <h2 className="section-heading">
            Building tools that make<br />
            <span style={{ color: 'var(--accent)' }}>real work easier.</span>
          </h2>

          <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            <p>
              I'm a data analyst and systems developer focused on turning repetitive, manual
              processes into automated pipelines. I work best at the intersection of data,
              software, and real-world operations — where the output isn't just a report,
              it's something people actually use every day.
            </p>
            <p>
              At Crop Management Company, I build automation systems, REST API integrations,
              and AI-powered tools that help manage a 10,000+ acre citrus farming operation.
              My work ranges from weekly fleet intelligence reports to AI agents that let
              executives query live farm data in plain English.
            </p>
            <p>
              I care about building things that save people time. If a process can be
              automated, I want to automate it — cleanly, reliably, and without drama.
            </p>
          </div>
        </motion.div>

        {/* Detail cards */}
        <motion.div variants={stagger} className="space-y-3">
          {details.map(({ icon, label, value }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="card p-4 flex gap-3 items-start"
            >
              <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0 }}>
                {icon}
              </span>
              <div>
                <p className="font-mono text-xs mb-1" style={{ color: 'var(--muted)' }}>
                  {label}
                </p>
                <p className="font-body text-sm font-medium" style={{ color: 'var(--ink)' }}>
                  {value}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
    </div>
  )
}
