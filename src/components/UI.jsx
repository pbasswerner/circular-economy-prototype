import React from 'react'

/* ─── Site Header ─── */
export function SiteHeader({ onHome }) {
  return (
    <header style={{
      background: 'var(--color-charles-blue)',
      borderBottom: '4px solid var(--color-freedom-trail-red)',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px var(--space-lg)' }}>
        <button onClick={onHome} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: 36, height: 36, background: 'var(--color-freedom-trail-red)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px', color: 'white', lineHeight: 1, paddingBottom: '2px' }}>B</span>
          </div>
          <div style={{ textAlign: 'left' }}>
            <div className="header-subtitle" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gray-light)', lineHeight: 1 }}>City of Boston</div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-snow-white)', lineHeight: 1.2 }}>Circular Economy Tool</div>
          </div>
        </button>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#8fa8bd', background: 'rgba(255,255,255,0.07)', padding: '4px 10px', borderRadius: 'var(--radius-sm)' }}>Prototype</span>
      </div>
    </header>
  )
}

/* ─── Progress Bar ─── */
export function ProgressBar({ steps, current }) {
  return (
    <div style={{ padding: '16px 0 0' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {steps.map((label, i) => {
          const done = i < current
          const active = i === current
          return (
            <React.Fragment key={i}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: done ? 'var(--color-optimistic-blue)' : active ? 'var(--color-charles-blue)' : 'var(--color-gray-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--transition)', flexShrink: 0 }}>
                  {done
                    ? <CheckIcon size={14} color="white" />
                    : <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '11px', color: active ? 'white' : 'var(--color-gray-mid)' }}>{i + 1}</span>
                  }
                </div>
                <span className="step-label" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', color: active ? 'var(--color-charles-blue)' : done ? 'var(--color-optimistic-blue)' : 'var(--color-gray-mid)', marginTop: 4, textAlign: 'center', maxWidth: 72, lineHeight: 1.2 }}>{label}</span>
              </div>
              {i < steps.length - 1 && (
                <div style={{ height: 2, flex: 0.4, background: done ? 'var(--color-optimistic-blue)' : 'var(--color-gray-light)', marginBottom: 22, transition: 'background var(--transition)' }} />
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

/* ─── Button ─── */
export function Button({ children, onClick, variant = 'primary', disabled = false, icon, style: extra = {} }) {
  const base = { fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '12px 24px', borderRadius: 'var(--radius-sm)', border: 'none', cursor: disabled ? 'not-allowed' : 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all var(--transition)', opacity: disabled ? 0.45 : 1 }
  const variants = {
    primary: { background: 'var(--color-charles-blue)', color: 'var(--color-snow-white)' },
    accent:  { background: 'var(--color-freedom-trail-red)', color: 'var(--color-snow-white)' },
    outline: { background: 'transparent', color: 'var(--color-charles-blue)', border: '2px solid var(--color-charles-blue)' },
  }
  return <button onClick={disabled ? undefined : onClick} className={variant === 'primary' || variant === 'accent' ? 'btn-mobile-full' : ''} style={{ ...base, ...variants[variant], ...extra }}>{icon && <span style={{ display: 'flex' }}>{icon}</span>}{children}</button>
}

/* ─── Tag ─── */
export function Tag({ children, color = 'blue' }) {
  const colors = { blue: { bg: '#E8F3FC', text: 'var(--color-optimistic-blue)' }, red: { bg: '#FDECEA', text: 'var(--color-freedom-trail-red)' }, dark: { bg: 'var(--color-gray-light)', text: 'var(--color-gray-dark)' }, green: { bg: '#E6F4EA', text: '#1E7E34' } }
  const c = colors[color] || colors.blue
  return <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: 'var(--radius-sm)', background: c.bg, color: c.text, display: 'inline-block' }}>{children}</span>
}

/* ─── Divider ─── */
export function Divider() {
  return <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 'var(--space-lg) 0' }} />
}

/* ─── Icons ─── */
export function CheckIcon({ size = 16, color = 'currentColor' }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4.5" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
export function MapPinIcon({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" fill="var(--color-freedom-trail-red)"/></svg>
}
export function CalendarIcon({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
}
export function WrenchIcon({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
export function ShirtIcon({ size = 20 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
export function ArrowRightIcon({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
export function BookmarkIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
export function TrainIcon({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M4 12h16M12 2v10M8 19l-2 3M16 19l2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
}
export function StarIcon({ filled = false, size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={filled ? 'var(--color-freedom-trail-red)' : 'none'}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="var(--color-freedom-trail-red)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
}
