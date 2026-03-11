import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ProgressBar, Button, Tag, Divider,
  MapPinIcon, CalendarIcon, ShirtIcon, CheckIcon,
  ArrowRightIcon, BookmarkIcon, TrainIcon, StarIcon
} from '../components/UI'

const STEPS = ['Select Item', 'Browse Options', 'Filter & Explore', 'Confirmed']

const SERVICES = [
  {
    id: 1,
    name: 'JP Mending Circle',
    type: 'Mending Circle',
    address: 'Loring-Greenough House, Jamaica Plain',
    mbta: 'Green St · 4 min walk',
    nextDate: 'Thu, Mar 20 · 6:30–8:30 PM',
    accepts: ['Clothing', 'Textiles', 'Accessories'],
    cost: 'Free',
    skillShare: true,
    notes: 'Community mending night. Bring your own needle & thread or borrow from the group. Great for beginners.',
    rating: 4.9, reviews: 18,
    highlight: true,
  },
  {
    id: 2,
    name: 'Looptworks Boston Swap',
    type: 'Clothing Swap',
    address: 'The Yard, South End',
    mbta: 'Prudential · 6 min walk',
    nextDate: 'Sat, Mar 29 · 11 AM–3 PM',
    accepts: ['Clothing', 'Shoes', 'Accessories'],
    cost: 'Free (bring 3 items to swap)',
    skillShare: false,
    notes: 'Bring clothes you no longer wear; take home items you love. No cash exchanged.',
    rating: 4.5, reviews: 34,
    highlight: false,
  },
  {
    id: 3,
    name: 'Stitch & Alter — Alterations & Repair',
    type: 'Tailor / Alteration Shop',
    address: '402 Harvard St, Brookline',
    mbta: 'Coolidge Corner · 7 min walk',
    nextDate: 'Mon–Sat · 10 AM–7 PM',
    accepts: ['All clothing', 'Denim', 'Outerwear', 'Formal wear'],
    cost: '$8–$20 per repair',
    skillShare: false,
    notes: 'Expert tailors. Torn seams typically repaired same-day. Before/after photos on request.',
    rating: 4.7, reviews: 89,
    highlight: false,
  },
  {
    id: 4,
    name: 'Goodwill Donation — Newbury St',
    type: 'Donation Drop-Off',
    address: '95 Newbury St, Back Bay',
    mbta: 'Hynes Convention Ctr · 3 min walk',
    nextDate: 'Daily · 9 AM–8 PM',
    accepts: ['Clothing', 'Shoes', 'Housewares'],
    cost: 'Free',
    skillShare: false,
    notes: 'Items in good condition accepted. Damaged items may be refused but can be directed to textile recycling.',
    rating: 4.2, reviews: 156,
    highlight: false,
  },
]

export default function FlowB() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null)
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div style={{ padding: 'var(--space-xl) 0 var(--space-2xl)' }}>
      <div className="container">

        {/* Back link */}
        <button onClick={() => navigate('/')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px',
          textTransform: 'uppercase', letterSpacing: '0.1em',
          color: 'var(--color-gray-mid)',
          display: 'flex', alignItems: 'center', gap: 6,
          marginBottom: 'var(--space-lg)',
        }}>← Back to scenarios</button>

        {/* Flow header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)', marginBottom: 'var(--space-sm)' }}>
          <div style={{
            background: 'var(--color-freedom-trail-red)',
            borderRadius: 'var(--radius-sm)',
            width: 44, height: 44,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <ShirtIcon size={22} />
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-freedom-trail-red)' }}>Flow B</p>
            <h2 style={{ fontSize: '22px' }}>Old Shirt → Mend or Donate</h2>
          </div>
        </div>

        <ProgressBar steps={STEPS} current={step} />
        <Divider />

        {step === 0 && <StepItemB onNext={(item) => { setSelectedItem(item); setStep(1) }} />}
        {step === 1 && <StepBrowseB item={selectedItem} services={SERVICES} onSelect={(s) => { setSelectedService(s); setStep(2) }} />}
        {step === 2 && <StepFilterB service={selectedService} services={SERVICES} onSelect={(s) => { setSelectedService(s); setStep(3) }} />}
        {step === 3 && <StepConfirmedB service={selectedService} onBack={() => setStep(0)} />}
      </div>
    </div>
  )
}

/* ── Step 0 ── */
function StepItemB({ onNext }) {
  const [intent, setIntent] = useState(null)
  const intents = [
    { id: 'mend', label: 'Mend it myself', desc: 'Find skill-share workshops and mending circles', icon: '🧵' },
    { id: 'tailor', label: 'Get it professionally repaired', desc: 'Find a tailor or alteration shop', icon: '✂️' },
    { id: 'swap', label: 'Swap it', desc: 'Trade for something you\'ll actually wear', icon: '🔄' },
    { id: 'donate', label: 'Donate it', desc: 'Find a drop-off near the T', icon: '🎁' },
  ]

  return (
    <div>
      <h3 style={{ fontSize: '16px', marginBottom: 8 }}>What do you want to do with this shirt?</h3>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: 'var(--space-xl)' }}>
        Choose an intent to see the best options near you.
      </p>

      {/* Jordan's situation */}
      <div style={{
        background: 'var(--color-gray-bg)',
        borderLeft: '4px solid var(--color-freedom-trail-red)',
        borderRadius: '0 var(--radius-md) var(--radius-md) 0',
        padding: 'var(--space-md) var(--space-lg)',
        marginBottom: 'var(--space-xl)',
      }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-mid)', marginBottom: 4 }}>
          Jordan's situation
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
          "I have a button-down with a torn seam. I could learn to fix it myself,
          or find someone nearby who can. I really don't want to throw it away."
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
        {intents.map(opt => (
          <div
            key={opt.id}
            onClick={() => setIntent(opt.id)}
            style={{
              background: 'var(--color-snow-white)',
              border: intent === opt.id ? '2px solid var(--color-freedom-trail-red)' : '2px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-lg)',
              cursor: 'pointer',
              transition: 'all var(--transition)',
              boxShadow: intent === opt.id ? 'var(--shadow-hover)' : 'var(--shadow-card)',
            }}
            onMouseEnter={e => {
              if (intent !== opt.id) e.currentTarget.style.borderColor = 'var(--color-freedom-trail-red)'
            }}
            onMouseLeave={e => {
              if (intent !== opt.id) e.currentTarget.style.borderColor = 'var(--color-border)'
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 8 }}>{opt.icon}</div>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 6 }}>{opt.label}</h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-secondary)' }}>{opt.desc}</p>
          </div>
        ))}
      </div>

      <Button
        variant="accent"
        onClick={() => onNext(intent || 'mend')}
        disabled={!intent}
        icon={<ArrowRightIcon />}
      >
        See options
      </Button>
    </div>
  )
}

/* ── Step 1 ── */
function StepBrowseB({ item, services, onSelect }) {
  const intentLabels = { mend: 'Mend it myself', tailor: 'Get it repaired', swap: 'Swap it', donate: 'Donate it' }
  const filtered = item === 'mend'
    ? services.filter(s => s.type === 'Mending Circle')
    : item === 'tailor'
    ? services.filter(s => s.type === 'Tailor / Alteration Shop')
    : item === 'swap'
    ? services.filter(s => s.type === 'Clothing Swap')
    : item === 'donate'
    ? services.filter(s => s.type === 'Donation Drop-Off')
    : services

  return (
    <div>
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <h3 style={{ fontSize: '16px', marginBottom: 4 }}>
          Results for: <span style={{ color: 'var(--color-freedom-trail-red)' }}>{intentLabels[item] || 'Clothing options'}</span>
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', fontSize: '14px' }}>
          {filtered.length} options found · sorted by next available date
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {filtered.map(s => (
          <div
            key={s.id}
            onClick={() => onSelect(s)}
            style={{
              background: 'var(--color-snow-white)',
              border: s.highlight ? '2px solid var(--color-freedom-trail-red)' : '2px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-lg)',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-card)',
              transition: 'all 200ms ease',
              position: 'relative',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--color-freedom-trail-red)'
              e.currentTarget.style.boxShadow = 'var(--shadow-hover)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = s.highlight ? 'var(--color-freedom-trail-red)' : 'var(--color-border)'
              e.currentTarget.style.boxShadow = 'var(--shadow-card)'
            }}
          >
            {s.highlight && (
              <div style={{
                position: 'absolute', top: -1, right: 16,
                background: 'var(--color-freedom-trail-red)',
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
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 8 }}>
                  <Tag color="red">{s.type}</Tag>
                  {s.skillShare && <Tag color="green">Learn to mend</Tag>}
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 4 }}>{s.name}</h4>

                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 6 }}>
                  {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= Math.round(s.rating)} size={12} />)}
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-gray-mid)', marginLeft: 4 }}>
                    {s.rating} ({s.reviews})
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 4 }}>
                  <MapPinIcon size={14} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-secondary)' }}>{s.address}</span>
                </div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  background: '#FDECEA', borderRadius: 'var(--radius-sm)',
                  padding: '3px 8px',
                }}>
                  <TrainIcon size={11} />
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--color-freedom-trail-red)' }}>
                    {s.mbta}
                  </span>
                </div>
              </div>

              <div style={{ minWidth: 160 }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-mid)', marginBottom: 4 }}>Next available</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                  <CalendarIcon size={14} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600 }}>{s.nextDate}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-mid)', marginBottom: 4 }}>Cost</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px' }}>{s.cost}</p>
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

/* ── Step 2 — Details + Confirm ── */
function applyFilter(services, filter) {
  if (filter === 'free') return services.filter(s => s.cost.startsWith('Free'))
  if (filter === 'skill') return services.filter(s => s.skillShare)
  // "This week" = services with regular/daily hours (no specific calendar date)
  if (filter === 'today') return services.filter(s => /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun|Daily)[^,]/i.test(s.nextDate))
  return services
}

function StepFilterB({ service, services, onSelect }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All options' },
    { id: 'free', label: 'Free only' },
    { id: 'skill', label: 'Learn to mend' },
    { id: 'today', label: 'This week' },
  ]

  const otherServices = applyFilter(services.filter(s => s.id !== service.id), activeFilter)

  return (
    <div>
      <h3 style={{ fontSize: '16px', marginBottom: 8 }}>Filter options</h3>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: 'var(--space-lg)' }}>
        Narrow down by what matters most to Jordan.
      </p>

      {/* Filter chips */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 'var(--space-xl)' }}>
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.07em',
              padding: '8px 16px',
              borderRadius: 'var(--radius-sm)',
              border: activeFilter === f.id ? '2px solid var(--color-freedom-trail-red)' : '2px solid var(--color-border)',
              background: activeFilter === f.id ? '#FDECEA' : 'var(--color-snow-white)',
              color: activeFilter === f.id ? 'var(--color-freedom-trail-red)' : 'var(--color-text-primary)',
              cursor: 'pointer',
              transition: 'all var(--transition)',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Recommended */}
      <div style={{
        background: '#FDECEA',
        border: '2px solid var(--color-freedom-trail-red)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        marginBottom: 'var(--space-xl)',
      }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-freedom-trail-red)', marginBottom: 8 }}>
          ⭐ Recommended for Jordan
        </p>
        <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '17px', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 6 }}>
          {service.name}
        </h4>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)', lineHeight: 1.6 }}>
          {service.notes}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
          {[
            { label: '📍 Location', value: service.address },
            { label: '🚇 MBTA', value: service.mbta },
            { label: '📅 Next date', value: service.nextDate },
            { label: '💰 Cost', value: service.cost },
          ].map(d => (
            <div key={d.label} style={{ background: 'rgba(255,255,255,0.7)', borderRadius: 'var(--radius-sm)', padding: '8px 12px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gray-mid)', marginBottom: 2 }}>{d.label}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: 'var(--color-text-primary)' }}>{d.value}</p>
            </div>
          ))}
        </div>

        {service.skillShare && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#E6F4EA', borderRadius: 'var(--radius-sm)',
            padding: '6px 12px', marginBottom: 'var(--space-md)',
          }}>
            <span>🧵</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#1E7E34' }}>
              Learn to mend — skill-share included
            </span>
          </div>
        )}

        <Button variant="accent" onClick={() => onSelect(service)} icon={<BookmarkIcon size={16} />}>
          Confirm this option
        </Button>
      </div>

      {/* Other options */}
      <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-gray-mid)', marginBottom: 'var(--space-md)' }}>
        Other options
      </h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {otherServices.map(s => (
          <div
            key={s.id}
            onClick={() => onSelect(s)}
            style={{
              background: 'var(--color-gray-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--space-md)',
              cursor: 'pointer',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: 'var(--space-md)',
              transition: 'all var(--transition)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--color-snow-white)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--color-gray-bg)'}
          >
            <div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
                <Tag color="dark">{s.type}</Tag>
              </div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.03em', marginBottom: 2 }}>{s.name}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                {s.mbta} · {s.cost}
              </p>
            </div>
            <ArrowRightIcon size={14} />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Step 3 ── */
function StepConfirmedB({ service, onBack }) {
  return (
    <div style={{ textAlign: 'center', padding: 'var(--space-2xl) 0' }}>
      <div style={{
        width: 64, height: 64,
        background: '#FDECEA',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto var(--space-lg)',
      }}>
        <CheckIcon size={28} color="var(--color-freedom-trail-red)" />
      </div>
      <h3 style={{ fontSize: '22px', marginBottom: 8 }}>You're all set!</h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '15px',
        color: 'var(--color-text-secondary)',
        maxWidth: 420,
        margin: '0 auto var(--space-xl)',
        lineHeight: 1.7,
      }}>
        Jordan is headed to <strong>{service.name}</strong> on {service.nextDate}.
        {service.skillShare ? " She'll learn to mend the seam herself." : " The shirt gets a second life."}
      </p>

      <div style={{
        background: 'var(--color-gray-bg)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        maxWidth: 460,
        margin: '0 auto var(--space-xl)',
        textAlign: 'left',
      }}>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-mid)', marginBottom: 12 }}>
          Impact of this interaction
        </p>
        {[
          { icon: '🧵', text: 'One shirt kept out of landfill' },
          { icon: '💡', text: service.skillShare ? 'Jordan learned a new repair skill' : 'Shirt found a new owner' },
          { icon: '🚇', text: 'No car required — fully T-accessible' },
          { icon: '🌿', text: 'Circular economy connection made' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '8px 0', borderBottom: i < 3 ? '1px solid var(--color-border)' : 'none' }}>
            <span style={{ fontSize: 18 }}>{item.icon}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-text-secondary)' }}>{item.text}</span>
          </div>
        ))}
      </div>

      <Button variant="outline" onClick={onBack}>Try another scenario</Button>
    </div>
  )
}
