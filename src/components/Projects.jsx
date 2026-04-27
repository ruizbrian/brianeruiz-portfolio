import { motion } from 'framer-motion'
import { stagger, fadeUp } from './motion'

const projects = [
  {
    num: '01',
    title: 'Weekly Fleet Intelligence Report',
    desc: 'Automated pipeline that pulls equipment data from a REST API, builds a formatted Excel report with conditional formatting, generates an AI-written executive summary using the Gemini API, and delivers it via email every Monday morning. Includes a Flask approval workflow before send.',
    tags: ['Python', 'Flask', 'REST API', 'Gemini AI', 'Excel', 'SMTP'],
  },
  {
    num: '02',
    title: 'Farm Data MCP Proxy',
    desc: 'Flask-based proxy server that bridges a farm management platform with Claude AI via the Model Context Protocol. Lets executives query live farm data — acreage, assets, ownership hierarchy — in plain English. Secured with API key auth and scoped access.',
    tags: ['Python', 'Flask', 'MCP', 'REST API', 'Claude AI', 'API Security'],
  },
  {
    num: '03',
    title: 'ERP Automation Pipelines',
    desc: 'Python scripts that extract, reformat, and import data between a payroll/timekeeping system and the company ERP, replacing a manual weekly process. Handles field mapping, error checking, and generates import-ready files.',
    tags: ['Python', 'ERP Integration', 'ETL', 'Excel / Power Query'],
  },
  {
    num: '04',
    title: 'Ranch Onboarding JotForm Workflow',
    desc: 'Replaced a multi-page paper packet with a digital intake form that collects signatures, uploads documents, and feeds structured data into farm management and operational systems.',
    tags: ['JotForm', 'Process Automation', 'Digital Transformation'],
  },
  {
    num: '05',
    title: 'Internal Web Tools',
    desc: 'A suite of HTML/CSS/JavaScript tools for field and office staff — including a Workday Summary calculator for plastic operations (auto-calculates, print-to-PDF ready) and a frost season windmachine tracker.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Internal Tooling'],
  },
  {
    num: '06',
    title: 'CMC Tracker App',
    desc: 'Internal Flask + SQLite web app for tracking tasks, projects, accomplishments, and wins by week. Used personally to document impact and build a review-ready record of work.',
    tags: ['Python', 'Flask', 'SQLite', 'Vanilla JS'],
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={fadeUp}
      className="card p-6 flex flex-col gap-4 h-full"
      style={{ borderTop: '2px solid var(--accent)', borderRadius: '0 0 12px 12px' }}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="font-mono text-xs"
          style={{ color: 'var(--muted)' }}
        >
          {project.num}
        </span>
      </div>

      <h3
        className="font-display font-bold text-xl leading-tight"
        style={{ color: 'var(--ink)' }}
      >
        {project.title}
      </h3>

      <p
        className="font-body text-sm leading-relaxed flex-1"
        style={{ color: 'var(--muted)' }}
      >
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 pt-2" style={{ borderTop: '1px solid var(--border)' }}>
        {project.tags.map(t => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <motion.div
        className="section-inner"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
      >
        <motion.p variants={fadeUp} className="section-label">Work</motion.p>
        <motion.h2 variants={fadeUp} className="section-heading">
          Things I've built.
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
