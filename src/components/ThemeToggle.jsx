import { motion } from 'framer-motion'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

export default function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light'

  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        padding: '5px 10px 5px 8px',
        borderRadius: 100,
        border: '1px solid var(--border)',
        background: 'var(--card-bg)',
        cursor: 'pointer',
        transition: 'border-color 0.2s ease, background-color 0.35s ease',
      }}
    >
      {/* Sun icon */}
      <HiOutlineSun
        size={13}
        style={{
          color: isLight ? 'var(--accent)' : 'var(--muted)',
          transition: 'color 0.3s ease',
          flexShrink: 0,
        }}
      />

      {/* Slider track */}
      <span
        style={{
          position: 'relative',
          width: 32,
          height: 18,
          borderRadius: 9,
          background: isLight ? 'var(--accent)' : 'rgba(79,142,247,0.2)',
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
          transition: 'background-color 0.3s ease',
        }}
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 38 }}
          style={{
            position: 'absolute',
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: '#fff',
            left: isLight ? 17 : 3,
            boxShadow: isLight ? '0 0 6px rgba(46,110,240,0.5)' : '0 0 6px rgba(79,142,247,0.4)',
          }}
        />
      </span>

      {/* Moon icon */}
      <HiOutlineMoon
        size={13}
        style={{
          color: isLight ? 'var(--muted)' : 'var(--accent)',
          transition: 'color 0.3s ease',
          flexShrink: 0,
        }}
      />
    </button>
  )
}
