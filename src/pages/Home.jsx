import { useNavigate } from 'react-router-dom'
import { WrenchIcon, ShirtIcon, ArrowRightIcon, TrainIcon } from '../components/UI'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      {/* Hero */}
      <section style={{
        background: 'var(--color-charles-blue)',
        padding: 'var(--space-2xl) 0 var(--space-xl)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Red accent stripe */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 6, background: 'var(--color-freedom-trail-red)',
        }} />
        <div className="container">
          <div style={{ maxWidth: 620 }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: 'var(--color-freedom-trail-red)',
              marginBottom: 'var(--space-md)',
            }}>Boston Circular Economy Tool</p>
            <h1 style={{
              fontSize: 'clamp(28px, 5vw, 46px)',
              color: 'var(--color-snow-white)',
              marginBottom: 'var(--space-lg)',
              lineHeight: 1.1,
            }}>
              Repair it.<br />
              <span style={{ color: '#8fa8bd' }}>Don't trash it.</span>
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              color: '#b8ccd9',
              lineHeight: 1.7,
              marginBottom: 'var(--space-xl)',
              maxWidth: 480,
            }}>
              Connect Boston residents to repair services, mending circles,
              and donation options — all reachable by the T.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 'var(--radius-md)',
              padding: '10px 16px',
            }}>
              <TrainIcon size={15} />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#8fa8bd',
              }}>MBTA-accessible results only</span>
            </div>
          </div>
        </div>
      </section>

      {/* Prototype notice */}
      <div style={{
        background: '#FFF8E7',
        borderBottom: '1px solid #F0D080',
        padding: '10px 0',
      }}>
        <div className="container">
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            color: '#8B6914',
          }}>
            🔬 Prototype — Click a scenario below to walk through a user flow
          </p>
        </div>
      </div>

      {/* Flow chooser */}
      <section style={{ padding: 'var(--space-2xl) 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '20px', marginBottom: 8 }}>Choose a scenario</h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-xl)',
            fontSize: '15px',
          }}>
            Two real user journeys, based on research with Boston residents.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            <FlowCard
              icon={<WrenchIcon size={28} />}
              accentColor="var(--color-optimistic-blue)"
              label="Flow A"
              title="Broken Toaster"
              subtitle="Repair a small appliance"
              persona="Jordan's toaster stopped working. She wants to repair it — not throw it away."
              steps={['Search by item', 'Browse repair options', 'See details', 'Save a listing']}
              onClick={() => navigate('/flow-a')}
            />
            <FlowCard
              icon={<ShirtIcon size={28} />}
              accentColor="var(--color-freedom-trail-red)"
              label="Flow B"
              title="Old Shirt"
              subtitle="Mend or donate clothing"
              persona="Jordan has a shirt with a torn seam. She wants to mend it or find it a new home."
              steps={['Search by item', 'Browse mending & swaps', 'Filter by T access', 'Find event details']}
              onClick={() => navigate('/flow-b')}
            />
          </div>
        </div>
      </section>

      {/* Persona callout */}
      <section style={{
        background: 'var(--color-gray-bg)',
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--space-xl) 0',
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            gap: 'var(--space-lg)',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}>
            <div style={{
              width: 48, height: 48, flexShrink: 0,
              background: 'var(--color-charles-blue)',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 22 }}>👤</span>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-gray-mid)',
                marginBottom: 4,
              }}>Primary Persona</p>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: 8,
              }}>Jordan Reyes — The Eco-Conscious Commuter</h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                maxWidth: 600,
              }}>
                Boston resident, MBTA commuter, no car. College student or young professional.
                Already motivated to repair and reuse — just missing the on-ramp to find services.
                Currently relies on Google, Buy Nothing groups, and word of mouth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FlowCard({ icon, accentColor, label, title, subtitle, persona, steps, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'var(--color-snow-white)',
        border: '2px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'all 200ms ease',
        boxShadow: 'var(--shadow-card)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = accentColor
        e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--color-border)'
        e.currentTarget.style.boxShadow = 'var(--shadow-card)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Card header band */}
      <div style={{
        background: accentColor,
        padding: '20px var(--space-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
      }}>
        <div style={{ color: 'white' }}>{icon}</div>
        <div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1,
          }}>{label}</p>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            color: 'white',
            marginTop: 2,
          }}>{title}</h3>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: 'var(--space-lg)' }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--color-gray-mid)',
          marginBottom: 8,
        }}>{subtitle}</p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.6,
          marginBottom: 'var(--space-lg)',
        }}>
          {persona}
        </p>

        {/* Steps list */}
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 0',
              borderBottom: i < steps.length - 1 ? '1px solid var(--color-border)' : 'none',
            }}>
              <div style={{
                width: 20, height: 20, borderRadius: '50%',
                background: 'var(--color-gray-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '9px',
                  color: 'var(--color-gray-mid)',
                }}>{i + 1}</span>
              </div>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'var(--color-text-secondary)',
              }}>{step}</span>
            </div>
          ))}
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: accentColor,
        }}>
          Start flow <ArrowRightIcon size={14} />
        </div>
      </div>
    </div>
  )
}
