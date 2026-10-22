import type { Project, Screen } from './content'

function PosScreen() {
  const items = [
    ['Karak tea', '3'],
    ['Chicken shawarma', '18'],
    ['Falafel wrap', '12'],
    ['Mint lemonade', '9'],
    ['Hummus', '14'],
    ['Kunafa', '16'],
  ]
  return (
    <div className="scr scr-pos">
      <div className="scr-bar">
        <span>Table 7</span>
        <span className="scr-chip">Waiter</span>
      </div>
      <div className="scr-tabs">
        <span className="on">Mains</span>
        <span>Drinks</span>
        <span>Sweets</span>
      </div>
      <div className="pos-grid">
        {items.map(([name, price]) => (
          <div key={name} className="pos-item">
            <span>{name}</span>
            <span className="scr-dim">AED {price}</span>
          </div>
        ))}
      </div>
      <div className="pos-order">
        <div className="scr-row">
          <span>3 items</span>
          <strong>AED 39</strong>
        </div>
        <div className="scr-btn">Send to kitchen</div>
      </div>
    </div>
  )
}

function BleScreen() {
  return (
    <div className="scr scr-ble">
      <div className="scr-bar">
        <span>Vitals</span>
        <span className="scr-chip live">
          <i /> Live
        </span>
      </div>
      <p className="scr-dim ble-label">Blood pressure</p>
      <p className="ble-value">
        118<span>/76</span>
      </p>
      <p className="scr-dim">mmHg · updated now</p>
      <svg className="ble-chart" viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden>
        <polyline
          points="0,26 10,24 20,27 30,20 40,22 50,14 60,18 70,12 80,19 90,15 100,21 110,17 120,19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="ble-stats">
        <div>
          <span className="scr-dim">Pulse</span>
          <strong>72 bpm</strong>
        </div>
        <div>
          <span className="scr-dim">Signal</span>
          <strong>−58 dBm</strong>
        </div>
      </div>
      <div className="scr-row scr-device">
        <span>Wearable</span>
        <span className="scr-dim">Connected</span>
      </div>
    </div>
  )
}

function GeScreen() {
  const visits = [
    ['Oil and filter', 'Completed'],
    ['Brake pads', 'Completed'],
    ['AC service', 'Booked'],
  ]
  return (
    <div className="scr scr-ge">
      <div className="scr-bar">
        <span>My car</span>
        <span className="scr-chip">Gold</span>
      </div>
      <div className="ge-car">
        <span className="scr-dim">Plate</span>
        <strong>AD 4 · 21873</strong>
        <div className="ge-points">
          <span className="scr-dim">Loyalty points</span>
          <strong>2,450</strong>
        </div>
      </div>
      <p className="scr-dim ge-head">Service history</p>
      <ul className="ge-list">
        {visits.map(([name, status]) => (
          <li key={name} className="scr-row">
            <span>{name}</span>
            <span className="scr-dim">{status}</span>
          </li>
        ))}
      </ul>
      <div className="scr-btn">Book a service</div>
    </div>
  )
}

const screens: Record<Screen, () => React.JSX.Element> = {
  pos: PosScreen,
  ble: BleScreen,
  ge: GeScreen,
}

export function Phone({ project }: { project: Project }) {
  const Drawn = project.screen ? screens[project.screen] : null
  return (
    <div className="phone">
      <div className="phone-screen">
        {project.screenshot ? (
          <img src={project.screenshot} alt={`${project.name} screenshot`} loading="lazy" />
        ) : (
          Drawn && <Drawn />
        )}
      </div>
    </div>
  )
}
