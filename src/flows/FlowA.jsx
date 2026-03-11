import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ProgressBar, Button, Tag, Divider,
  MapPinIcon, CalendarIcon, WrenchIcon, CheckIcon,
  ArrowRightIcon, BookmarkIcon, TrainIcon, StarIcon
} from '../components/UI'

const STEPS = ['Select Item', 'Browse Results', 'View Details', 'Saved']

const SERVICES = [
  {
    id: 1,
    name: 'Repair Café Somerville',
    type: 'Repair Café',
    address: '167 Holland St, Somerville',
    mbta: 'Davis Sq · 8 min walk',
    nextDate: 'Sat, Mar 15 · 10 AM–1 PM',
    accepts: ['Small appliances', 'Electronics', 'Clothing', 'Bikes'],
    cost: 'Free (donations welcome)',
    notes: 'Walk-in only. Bring your broken item and a repair volunteer will help you fix it yourself.',
    rating: 4.8, reviews: 42,
    highlight: true,
  },
  {
    id: 2,
    name: 'Boston Center for the Arts Fix-It Clinic',
    type: 'Fix-It Clinic',
    address: '539 Tremont St, South End',
    mbta: 'Back Bay · 12 min walk',
    nextDate: 'Sun, Mar 23 · 1 PM–4 PM',
    accepts: ['Small appliances', 'Lamps', 'Toys', 'Electronics'],
    cost: 'Free',
    notes: 'Volunteer repair technicians from MIT and Northeastern lead repair sessions.',
    rating: 4.6, reviews: 28,
    highlight: false,
  },
  {
    id: 3,
    name: 'JP Appliance Repair',
    type: 'Repair Shop',
    address: '765 Centre St, Jamaica Plain',
    mbta: 'Green St · 5 min walk',
    nextDate: 'Mon–Sat · 9 AM–6 PM',
    accepts: ['Small appliances', 'Large appliances'],
    cost: '$25 diagnostic + parts',
    notes: 'Locally owned shop. Call ahead or walk in. Toasters typically repaired same day.',
    rating: 4.4, reviews: 61,
    highlight: false,
  },
]

export default function FlowA() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedService, setSelectedService] = useState(null)
  const [saved, setSaved] = useState(false)

  return (
    <div style={{ padding: 'var(--space-xl) 0 var(--space-2xl)' }}>
      <div className="container">

        {/* Back link */}
        <button onClick={() => navigate('/')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--color-gray-mid)',
          display: 'flex', alignItems: 'center', gap: 6,
          marginBottom: 'var(--space-lg)',
        }}>
          ← Back to scenarios
        </button>

        {/* Flow header */}
        <div style={{
          display: 'flex', alignItems: 'flex-start',
          gap: 'var(--space-md)',
          marginBottom: 'var(--space-sm)',
        }}>
          <div style={{
            background: 'var(--color-optimistic-blue)',
            borderRadius: 'var(--radius-sm)',
            width: 44, height: 44,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <WrenchIcon size={22} />
          </div>
          <div>
            <p style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: '10px', textTransform: 'uppercase',
              letterSpacing: '0.14em', color: 'var(--color-optimistic-blue)',
            }}>Flow A</p>
            <h2 style={{ fontSize: '22px' }}>Broken Toaster → Repair</h2>
          </div>
        </div>

        <ProgressBar steps={STEPS} current={step} />

        <Divider />

        {/* ── Step 0: Select Item ── */}
        {step === 0 && <StepSelectItem onNext={(item) => { setSelectedItem(item); setStep(1) }} />}

        {/* ── Step 1: Browse Results ── */}
        {step === 1 && (
          <StepBrowse
            item={selectedItem}
            services={SERVICES}
            onSelect={(s) => { setSelectedService(s); setStep(2) }}
          />
        )}

        {/* ── Step 2: View Details ── */}
        {step === 2 && (
          <StepDetails
            service={selectedService}
            item={selectedItem}
            onSave={() => { setSaved(true); setStep(3) }}
            onBack={() => setStep(1)}
          />
        )}

        {/* ── Step 3: Saved ── */}
        {step === 3 && (
          <StepSaved service={selectedService} onBack={() => setStep(0)} />
        )}
      </div>
    </div>
  )
}

/* ── Step 0 ── */
function StepSelectItem({ onNext }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const suggestions = ['Small Appliance', 'Toaster', 'Lamp', 'Laptop', 'Phone', 'Bike', 'Clothing']
  const filtered = query.length > 1
    ? suggestions.filter(s => s.toLowerCase().includes(query.toLowerCase()))
    : suggestions

  return (
    <div>
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <h3 style={{ fontSize: '16px', marginBottom: 8 }}>What do you need to repair?</h3>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: 'var(--space-lg)' }}>
          Type an item or choose a category below.
        </p>

        {/* Search box */}
        <div style={{ position: 'relative', marginBottom: 'var(--space-lg)', maxWidth: 420 }}>
          <div style={{
            position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
            color: 'var(--color-gray-mid)',
          }}>🔍</div>
          <input
            value={query}
            onChange={e => { setQuery(e.target.value); setSelected(null) }}
            placeholder="e.g. toaster, lamp, jacket..."
            style={{
              width: '100%',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              padding: '12px 14px 12px 40px',
              border: '2px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              outline: 'none',
              color: 'var(--color-text-primary)',
              background: 'var(--color-snow-white)',
            }}
            onFocus={e => e.target.style.borderColor = 'var(--color-optimistic-blue)'}
            onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
          />
        </div>

        {/* Category chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {filtered.map(item => (
            <button
              key={item}
              onClick={() => { setSelected(item); setQuery(item) }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                border: selected === item ? '2px solid var(--color-optimistic-blue)' : '2px solid var(--color-border)',
                background: selected === item ? '#E8F3FC' : 'var(--color-snow-white)',
                color: selected === item ? 'var(--color-optimistic-blue)' : 'var(--color-text-primary)',
                cursor: 'pointer',
                transition: 'all var(--transition)',
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Jordan's situation callout */}
      <div style={{
        background: 'var(--color-gray-bg)',
        borderLeft: '4px solid var(--color-optimistic-blue)',
        borderRadius: '0 var(--radius-md) var(--radius-md) 0',
        padding: 'var(--space-md) var(--space-lg)',
        marginBottom: 'var(--space-xl)',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--color-gray-mid)',
          marginBottom: 4,
        }}>Jordan's situation</p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          color: 'var(--color-text-secondary)',
          fontStyle: 'italic',
        }}>
          "My toaster stopped working this morning. I don't want to just throw it out — 
          can I get it fixed somewhere near the T?"
        </p>
      </div>

      <Button
        variant="primary"
        onClick={() => onNext(selected || query || 'Toaster')}
        disabled={!query && !selected}
        icon={<ArrowRightIcon />}
      >
        Find repair options
      </Button>
    </div>
  )
}

/* ── Step 1 ── */
function StepBrowse({ item, services, onSelect }) {
  const [filterT, setFilterT] = useState(false)
  const displayed = filterT ? services.filter(s => Boolean(s.mbta)) : services

  return (
    <div>
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h3 style={{ fontSize: '16px', marginBottom: 4 }}>
              Repair options for: <span style={{ color: 'var(--color-optimistic-blue)' }}>{item}</span>
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
              {displayed.length} services found near you, sorted by next available date.
            </p>
          </div>
          <label style={{
            display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            color: filterT ? 'var(--color-optimistic-blue)' : 'var(--color-gray-mid)',
          }}>
            <input
              type="checkbox"
              checked={filterT}
              onChange={e => setFilterT(e.target.checked)}
              style={{ accentColor: 'var(--color-optimistic-blue)', width: 16, height: 16 }}
            />
            <TrainIcon size={14} /> T-accessible only
          </label>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {displayed.map(s => (
          <div
            key={s.id}
            onClick={() => onSelect(s)}
            style={{
              background: 'var(--color-snow-white)',
              border: s.highlight ? '2px solid var(--color-optimistic-blue)' : '2px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-lg)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-card)',
              transition: 'all 200ms ease',
              position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-optimistic-blue)'
              e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = s.highlight ? 'var(--color-optimistic-blue)' : 'var(--color-border)'
              e.currentTarget.style.boxShadow = 'var(--shadow-card)'
            }}
          >
            {s.highlight && (
              <div style={{
                position: 'absolute', top: -1, right: 16,
                background: 'var(--color-optimistic-blue)',
                color: 'white',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '9px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                padding: '3px 10px',
                borderRadius: '0 0 var(--radius-sm) var(--radius-sm)',
              }}>Best Match</div>
            )}

            <div style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 200 }}>
                <Tag color="blue">{s.type}</Tag>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  marginTop: 8, marginBottom: 4,
                }}>{s.name}</h4>

                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 4 }}>
                  {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= Math.round(s.rating)} size={12} />)}
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-gray-mid)', marginLeft: 4 }}>
                    {s.rating} ({s.reviews} reviews)
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 4 }}>
                  <MapPinIcon size={14} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-secondary)' }}>
                    {s.address}
                  </span>
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  background: '#E8F3FC', borderRadius: 'var(--radius-sm)',
                  padding: '3px 8px', marginBottom: 8,
                }}>
                  <TrainIcon size={11} />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--color-optimistic-blue)' }}>
                    {s.mbta}
                  </span>
                </div>
              </div>

              <div style={{ minWidth: 160 }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-mid)', marginBottom: 4 }}>Next available</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                  <CalendarIcon size={14} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    {s.nextDate}
                  </span>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-mid)', marginBottom: 4 }}>Cost</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-primary)' }}>{s.cost}</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap' }}>
              {s.accepts.map(a => <Tag key={a} color="dark">{a}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Step 2 ── */
function StepDetails({ service, item, onSave, onBack }) {
  return (
    <div>
      <button onClick={onBack} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px',
        textTransform: 'uppercase', letterSpacing: '0.1em',
        color: 'var(--color-gray-mid)', display: 'flex', alignItems: 'center', gap: 6,
        marginBottom: 'var(--space-lg)',
      }}>← Back to results</button>

      <Tag color="blue">{service.type}</Tag>
      <h3 style={{ fontSize: '22px', margin: '8px 0 4px' }}>{service.name}</h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 'var(--space-lg)' }}>
        {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= Math.round(service.rating)} size={14} />)}
        <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-gray-mid)', marginLeft: 4 }}>
          {service.rating} · {service.reviews} reviews
        </span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
        {[
          { label: 'Address', value: service.address, icon: '📍' },
          { label: 'MBTA Access', value: service.mbta, icon: '🚇' },
          { label: 'Next Date / Hours', value: service.nextDate, icon: '📅' },
          { label: 'Cost', value: service.cost, icon: '💰' },
        ].map(d => (
          <div key={d.label} style={{
            background: 'var(--color-gray-bg)',
            borderRadius: 'var(--radius-md)',
            padding: 'var(--space-md)',
          }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-mid)', marginBottom: 4 }}>
              {d.icon} {d.label}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>{d.value}</p>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <h4 style={{ fontSize: '13px', marginBottom: 8 }}>About this service</h4>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
          {service.notes}
        </p>
      </div>

      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <h4 style={{ fontSize: '13px', marginBottom: 8 }}>Accepts these items</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {service.accepts.map(a => <Tag key={a} color="dark">{a}</Tag>)}
        </div>
      </div>

      {/* CTA */}
      <div style={{
        background: '#E8F3FC',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start',
        marginBottom: 'var(--space-xl)',
      }}>
        <span style={{ fontSize: 24 }}>💡</span>
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--color-charles-blue)', marginBottom: 4 }}>
            What to bring
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
            Bring your {item?.toLowerCase() || 'item'}, any detached parts, and — if you have it — the original manual.
            Repair cafés work best when you stay and participate in the fix.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
        <Button variant="primary" onClick={onSave} icon={<BookmarkIcon size={16} />}>
          Save this listing
        </Button>
        <Button variant="outline" onClick={() => {}}>
          Get directions
        </Button>
      </div>
    </div>
  )
}

/* ── Step 3 ── */
function StepSaved({ service, onBack }) {
  return (
    <div style={{ textAlign: 'center', padding: 'var(--space-2xl) 0' }}>
      <div style={{
        width: 64, height: 64,
        background: '#E6F4EA',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto var(--space-lg)',
      }}>
        <CheckIcon size={28} color="#1E7E34" />
      </div>
      <h3 style={{ fontSize: '22px', marginBottom: 8 }}>Listing Saved!</h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '15px',
        color: 'var(--color-text-secondary)',
        maxWidth: 400,
        margin: '0 auto var(--space-xl)',
        lineHeight: 1.7,
      }}>
        <strong>{service.name}</strong> has been saved to Jordan's list.
        She'll get a reminder before the next event on {service.nextDate}.
      </p>

      <div style={{
        background: 'var(--color-gray-bg)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        maxWidth: 420,
        margin: '0 auto var(--space-xl)',
        textAlign: 'left',
      }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-mid)', marginBottom: 8 }}>
          What happens next
        </p>
        {[
          'Jordan visits Repair Café Somerville on Saturday',
          'A volunteer helps her diagnose the toaster',
          'They fix it together — she learns a new skill',
          'The toaster stays out of the landfill',
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '6px 0', borderBottom: i < 3 ? '1px solid var(--color-border)' : 'none' }}>
            <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#E6F4EA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
              <CheckIcon size={10} color="#1E7E34" />
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-secondary)' }}>{item}</span>
          </div>
        ))}
      </div>

      <Button variant="outline" onClick={onBack}>Try another scenario</Button>
    </div>
  )
}
