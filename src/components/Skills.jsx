import { motion } from 'framer-motion'
import { stagger, fadeUp } from './motion'

const groups = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'HTML/CSS', 'C/C++', 'SQL', 'Bash'],
  },
  {
    label: 'Frameworks',
    skills: ['React', 'Node.js', 'Flask'],
  },
  {
    label: 'Data & Reporting',
    skills: ['Power BI', 'REST APIs', 'ETL Automation', 'Excel / Power Query'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'VS Code', 'Linux (Ubuntu)', 'Microsoft 365', 'Azure'],
  },
  {
    label: 'Currently Learning',
    skills: ['C# / .NET', 'Azure (deeper)'],
    accent: true,
  },
]

export default function Skills() {
  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <motion.div
        className="section-inner"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p variants={fadeUp} className="section-label">Skills</motion.p>
        <motion.h2 variants={fadeUp} className="section-heading">
          What I work with.
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {groups.map(({ label, skills, accent }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="card p-6"
              style={accent ? { borderColor: 'rgba(79,142,247,0.28)' } : {}}
            >
              <p
                className="font-mono text-xs uppercase tracking-widest mb-4"
                style={{ color: accent ? 'var(--accent2)' : 'var(--accent)' }}
              >
                {label}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
