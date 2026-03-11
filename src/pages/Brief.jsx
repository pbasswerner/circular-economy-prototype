import { useNavigate } from 'react-router-dom'
import { ArrowRightIcon, CheckIcon } from '../components/UI'

/* ── Shared section label style ── */
function SectionLabel({ children }) {
  return (
    <p style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '10px',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: 'var(--color-freedom-trail-red)',
      marginBottom: 8,
    }}>{children}</p>
  )
}

/* ── Callout block ── */
function Callout({ children, color = 'blue' }) {
  const accent = color === 'red' ? 'var(--color-freedom-trail-red)' : 'var(--color-optimistic-blue)'
  return (
    <div style={{
      borderLeft: `4px solid ${accent}`,
      background: 'var(--color-gray-bg)',
      borderRadius: '0 var(--radius-md) var(--radius-md) 0',
      padding: 'var(--space-md) var(--space-lg)',
    }}>
      {children}
    </div>
  )
}

/* ── Validate tag ── */
function ValidateTag({ children }) {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '9px',
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      background: '#FFF8E7',
      color: '#8B6914',
      border: '1px solid #F0D080',
      borderRadius: 'var(--radius-sm)',
      padding: '2px 7px',
      marginTop: 8,
    }}>{children}</span>
  )
}

/* ── Section divider ── */
function SectionDivider() {
  return <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: 'var(--space-2xl) 0' }} />
}

export default function Brief() {
  const navigate = useNavigate()

  return (
    <div>

      {/* ── Hero ── */}
      <section style={{
        background: 'var(--color-charles-blue)',
        padding: 'var(--space-2xl) 0',
      }}>
        <div className="container">
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.16em',
            color: 'var(--color-freedom-trail-red)',
            marginBottom: 'var(--space-md)',
          }}>Stakeholder Brief · March 11, 2025</p>
          <h1 style={{
            fontSize: 'clamp(26px, 5vw, 44px)',
            color: 'var(--color-snow-white)',
            marginBottom: 'var(--space-md)',
            lineHeight: 1.1,
          }}>
            Boston Circular<br />Economy Tool
          </h1>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '17px',
            color: '#b8ccd9',
            lineHeight: 1.7,
            maxWidth: 520,
            marginBottom: 'var(--space-xl)',
          }}>
            Validate assumptions and align on scope before development begins.
            Prepared by Paula (Product &amp; UX).
          </p>
          <div style={{
            display: 'inline-flex',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 'var(--radius-md)',
            padding: '8px 16px',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#8fa8bd',
            }}>Purpose: stakeholder alignment</span>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div style={{ padding: 'var(--space-2xl) 0' }}>
        <div className="container" style={{ maxWidth: 760 }}>

          {/* ── Who We're Building For ── */}
          <SectionLabel>Who We're Building For</SectionLabel>
          <h2 style={{ fontSize: '22px', marginBottom: 'var(--space-lg)' }}>The Persona</h2>

          <div style={{
            background: 'var(--color-charles-blue)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-xl)',
            marginBottom: 'var(--space-xl)',
          }}>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{
                width: 56, height: 56, flexShrink: 0,
                background: 'var(--color-freedom-trail-red)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 26,
              }}>👤</div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <p style={{
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '10px', textTransform: 'uppercase',
                  letterSpacing: '0.12em', color: '#8fa8bd', marginBottom: 4,
                }}>Primary Persona</p>
                <h3 style={{
                  fontSize: '18px', color: 'var(--color-snow-white)',
                  marginBottom: 'var(--space-md)',
                }}>Jordan Reyes — The Eco-Conscious Commuter</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-md)' }}>
                  {[
                    { label: 'Who she is', text: 'Boston resident, MBTA commuter, no car. College student or young professional.' },
                    { label: 'What she wants', text: 'To repair or responsibly dispose of items without the usual friction.' },
                    { label: 'What she does now', text: 'Relies on Google, Buy Nothing groups, and word of mouth.' },
                    { label: 'Key insight', text: 'Already motivated — just missing the on-ramp to find services.' },
                  ].map(d => (
                    <div key={d.label} style={{
                      background: 'rgba(255,255,255,0.06)',
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--space-md)',
                    }}>
                      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-freedom-trail-red)', marginBottom: 4 }}>{d.label}</p>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: '#b8ccd9', lineHeight: 1.6 }}>{d.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <SectionDivider />

          {/* ── Problem Statement ── */}
          <SectionLabel>Problem Statement</SectionLabel>
          <h2 style={{ fontSize: '22px', marginBottom: 'var(--space-lg)' }}>The Gap</h2>

          <Callout color="red">
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'var(--color-text-primary)',
              fontStyle: 'italic',
              marginBottom: 'var(--space-md)',
            }}>
              "Boston residents who want to repair or donate items can't easily find the services
              that already exist. Biggest barriers are transportation without a car, lack of
              specialized vocabulary like 'repair cafe,' or confidence that small repairs are
              worth pursuing."
            </p>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-charles-blue)',
            }}>The services exist. The awareness and accessibility don't.</p>
            <ValidateTag>To validate with City: are there documented service deserts by neighborhood?</ValidateTag>
          </Callout>

          <SectionDivider />

          {/* ── Measuring Success ── */}
          <SectionLabel>Measuring Success</SectionLabel>
          <h2 style={{ fontSize: '22px', marginBottom: 'var(--space-lg)' }}>How We'd Know It's Working</h2>

          <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 'var(--space-md)' }}>
            {[
              { metric: 'Connections made (user → service)', why: 'Directly measurable; proves utility' },
              { metric: 'Item categories most searched', why: 'Reveals unmet demand; informs City programs' },
              { metric: 'Geographic distribution of searches', why: 'Identifies equity gaps by neighborhood' },
              { metric: 'Year-1 partner services listed', why: 'Shows ecosystem coverage' },
            ].map((row, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                borderBottom: i < 3 ? '1px solid var(--color-border)' : 'none',
                background: i % 2 === 0 ? 'var(--color-snow-white)' : 'var(--color-gray-bg)',
              }}>
                <div style={{ padding: '12px 16px', borderRight: '1px solid var(--color-border)' }}>
                  {i === 0 && <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-mid)', marginBottom: 6 }}>Metric</p>}
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-primary)' }}>{row.metric}</p>
                </div>
                <div style={{ padding: '12px 16px' }}>
                  {i === 0 && <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-mid)', marginBottom: 6 }}>Why It Matters</p>}
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>{row.why}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout color="blue">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: 6 }}>
              <strong>Note:</strong> We cannot track whether items are actually repaired — only that a connection was made.
              Actual diversion data would require partner reporting or follow-up surveys.
            </p>
            <ValidateTag>To validate: What reporting cadence works for the City? What data do they already collect?</ValidateTag>
          </Callout>

          <SectionDivider />

          {/* ── Current Workflow ── */}
          <SectionLabel>Current State</SectionLabel>
          <h2 style={{ fontSize: '22px', marginBottom: 8 }}>What Jordan Does Today</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', fontSize: '15px', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
            When her toaster breaks:
          </p>

          <div style={{ marginBottom: 'var(--space-lg)' }}>
            {[
              'Tries basic troubleshooting (unplug, replug).',
              'Searches "toaster repair Boston" — results skew toward large appliance shops; feels like overkill.',
              'Feels uncertain: Is this worth the money? Will they even take a toaster?',
              'If already eco-conscious: searches "repair cafe", finds Somerville or Cambridge location.',
              'If not: gives up and throws the toaster out, feeling vaguely guilty.',
            ].map((step, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: 'var(--space-md)',
                alignItems: 'flex-start',
                padding: '10px 0',
                borderBottom: i < 4 ? '1px solid var(--color-border)' : 'none',
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                  background: i === 3 ? 'var(--color-optimistic-blue)' : 'var(--color-gray-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '11px',
                    color: i === 3 ? 'white' : 'var(--color-gray-mid)',
                  }}>{i + 1}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: i === 3 ? 'var(--color-text-primary)' : 'var(--color-text-secondary)', lineHeight: 1.6, paddingTop: 4 }}>
                  {step}
                </p>
              </div>
            ))}
          </div>

          <Callout color="blue">
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-charles-blue)', marginBottom: 4 }}>The Gap</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              Step 4 requires insider vocabulary. Most residents never get there.
            </p>
          </Callout>

          <SectionDivider />

          {/* ── Friction Points ── */}
          <SectionLabel>Friction Points</SectionLabel>
          <h2 style={{ fontSize: '22px', marginBottom: 'var(--space-lg)' }}>What Gets in the Way</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 'var(--space-xl)' }}>
            {[
              { label: 'Discoverability', text: 'Services aren\'t indexed by item type, only by business category.' },
              { label: 'Cost uncertainty', text: 'No way to assess repair viability before making contact.' },
              { label: 'Emotional barrier', text: 'Small repairs feel frivolous; residents self-screen out.' },
              { label: 'Geographic opacity', text: 'No clear picture of what\'s accessible by T vs. requires a car.' },
              { label: 'Service freshness', text: 'Events like Fix-It Cafes have irregular schedules not reflected in Google.' },
            ].map(f => (
              <div key={f.label} style={{
                display: 'flex', gap: 'var(--space-md)',
                background: 'var(--color-gray-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%', flexShrink: 0, marginTop: 6,
                  background: 'var(--color-freedom-trail-red)',
                }} />
                <div>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-primary)' }}>{f.label}: </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>{f.text}</span>
                </div>
              </div>
            ))}
          </div>

          <SectionDivider />

          {/* ── Prototype User Flows ── */}
          <SectionLabel>Prototype Scope</SectionLabel>
          <h2 style={{ fontSize: '22px', marginBottom: 'var(--space-lg)' }}>User Flows We're Testing</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)', marginBottom: 'var(--space-xl)' }}>
            {[
              {
                color: 'var(--color-optimistic-blue)',
                label: 'Flow A',
                title: 'Broken Toaster → Repair',
                steps: [
                  'Jordan types "toaster" or selects "small appliance".',
                  'App shows repair services and Fix-It Cafes within MBTA range, sorted by next available date.',
                  'Each listing shows: item types accepted, cost range, walk-in vs. appointment.',
                  'Jordan selects Repair Cafe Somerville, sees next event is Saturday.',
                  'Jordan saves the listing or gets a reminder.',
                ],
                validate: 'To validate: do users want reminders?',
              },
              {
                color: 'var(--color-freedom-trail-red)',
                label: 'Flow B',
                title: 'Old Shirt → Mending',
                steps: [
                  'Jordan selects "clothing" or "textiles".',
                  'App shows mending services, tailors, and clothing swap events nearby.',
                  '"Learn to fix it myself" filter → surfaces skill-share workshops.',
                  'Jordan finds a mending circle in JP, confirms it\'s MBTA-accessible.',
                  'App shows what to bring and what to expect.',
                ],
                validate: null,
              },
            ].map(flow => (
              <div key={flow.label} style={{
                border: '2px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-card)',
              }}>
                <div style={{ background: flow.color, padding: '16px var(--space-lg)' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.7)', marginBottom: 2 }}>{flow.label}</p>
                  <h3 style={{ fontSize: '16px', color: 'white' }}>{flow.title}</h3>
                </div>
                <div style={{ padding: 'var(--space-lg)' }}>
                  {flow.steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0', borderBottom: i < flow.steps.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                      <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--color-gray-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '9px', color: 'var(--color-gray-mid)' }}>{i + 1}</span>
                      </div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{step}</p>
                    </div>
                  ))}
                  {flow.validate && <ValidateTag>{flow.validate}</ValidateTag>}
                </div>
              </div>
            ))}
          </div>

          <SectionDivider />

          {/* ── Questions to Validate ── */}
          <SectionLabel>Open Questions</SectionLabel>
          <h2 style={{ fontSize: '22px', marginBottom: 'var(--space-lg)' }}>Questions to Validate With the City</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 'var(--space-xl)' }}>
            {[
              'What neighborhood-level data exists on repair service coverage vs. demand?',
              'Can we access the City\'s circular economy directory programmatically, or is it only available as a PDF?',
              'Would the City be interested in a database for these services? If so, are there preferences for integrating with City infrastructure in the future?',
              'What does the City already measure around waste diversion for textiles and electronics?',
              'Who are the power users (repair cafe organizers, Fix-It Cafe hosts) we should interview first? Do you have contacts to connect us with?',
            ].map((q, i) => (
              <div key={i} style={{
                display: 'flex', gap: 'var(--space-md)',
                padding: 'var(--space-md)',
                background: '#FFF8E7',
                border: '1px solid #F0D080',
                borderRadius: 'var(--radius-md)',
                alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: 14, flexShrink: 0, marginTop: 2 }}>❓</span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-primary)', lineHeight: 1.6 }}>{q}</p>
              </div>
            ))}
          </div>

          <SectionDivider />

          {/* ── Next Steps ── */}
          <SectionLabel>Next Steps</SectionLabel>
          <h2 style={{ fontSize: '22px', marginBottom: 'var(--space-lg)' }}>Roadmap</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginBottom: 'var(--space-2xl)' }}>
            {[
              { n: '0', title: 'Prototype', desc: 'Low-fidelity flows for toaster and clothing use cases' },
              { n: '1', title: 'User interviews', desc: '5–6 sessions with Boston residents + 2–3 service providers. Goal: validate friction points, flow assumptions using the prototype.' },
              { n: '2', title: 'Service audit', desc: 'Map existing repair/mending services by neighborhood against MBTA access to identify deserts.' },
              { n: '3', title: 'Refine flows and prototype based on findings from User Research', desc: 'Implement a second prototype with user feedback, test with at least 6 potential users. Use this to inform final development features for v1' },
              { n: '4', title: 'Partner outreach', desc: 'Identify 8–10 anchor services willing to maintain their own listings.' },
              { n: '5', title: 'Metrics alignment', desc: 'Agree with City on what data would be useful to collect and report on after Year 1.' },
            ].map(step => (
              <div key={step.n} style={{
                display: 'flex', gap: 'var(--space-lg)',
                background: 'var(--color-snow-white)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-md)',
                alignItems: 'flex-start',
                boxShadow: 'var(--shadow-card)',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                  background: 'var(--color-charles-blue)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '14px', color: 'white' }}>{step.n}</span>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-primary)', marginBottom: 4 }}>{step.title}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div style={{
            background: 'var(--color-charles-blue)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-xl)',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '10px', textTransform: 'uppercase',
              letterSpacing: '0.14em', color: 'var(--color-freedom-trail-red)',
              marginBottom: 12,
            }}>Step 3 of the roadmap</p>
            <h2 style={{ fontSize: '24px', color: 'var(--color-snow-white)', marginBottom: 12 }}>
              Ready to see the prototype?
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '15px',
              color: '#b8ccd9', lineHeight: 1.7,
              maxWidth: 460, margin: '0 auto var(--space-xl)',
            }}>
              Walk through two real user flows based on research with Boston residents —
              fully clickable, MBTA-accessible results only.
            </p>
            <button
              onClick={() => navigate('/prototype')}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '14px 32px',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                cursor: 'pointer',
                background: 'var(--color-freedom-trail-red)',
                color: 'white',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                transition: 'all var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Enter prototype <ArrowRightIcon size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
