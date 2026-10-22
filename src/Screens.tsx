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

export function Desktop() {
  return (
    <div className="desktop" aria-hidden>
      <div className="desk-screen">
        <div className="desk-bar">
          <span className="desk-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="desk-url">Operations console</span>
        </div>
        <div className="desk-body">
          <aside className="desk-side">
            <p className="desk-label">Layers</p>
            {['Cameras', 'Radar', 'Zones', 'Targets'].map((layer, i) => (
              <p key={layer} className="desk-layer">
                <i className={i < 3 ? 'on' : ''} />
                {layer}
              </p>
            ))}
            <p className="desk-label">Devices</p>
            {['Gate camera', 'North radar', 'Perimeter camera', 'Lobby camera'].map((d, i) => (
              <p key={d} className="desk-device">
                <span>{d}</span>
                <b className={i === 2 ? 'warn' : ''} />
              </p>
            ))}
          </aside>
          <div className="desk-map">
            <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice">
              <path className="road" d="M0 190 C80 170 140 210 220 170 S340 120 400 140" />
              <path className="road" d="M120 0 C130 80 110 160 150 260" />
              <polygon className="zone" points="190,40 300,30 330,110 230,130" />
              <polygon className="zone alt" points="40,60 120,50 110,120 30,130" />
              <path className="cone" d="M250 200 L200 140 A70 70 0 0 1 280 135 Z" />
              <path className="cone" d="M80 210 L60 150 A60 60 0 0 1 125 160 Z" />
              <circle className="cam" cx="250" cy="200" r="5" />
              <circle className="cam" cx="80" cy="210" r="5" />
              <circle className="target" cx="262" cy="78" r="4" />
              <circle className="target pulse" cx="262" cy="78" r="9" />
              <circle className="target" cx="70" cy="92" r="4" />
            </svg>
          </div>
          <div className="desk-videos">
            {['Camera 01', 'Camera 02'].map((cam) => (
              <div key={cam} className="desk-video">
                <span>
                  <i /> {cam}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="desk-stand" />
    </div>
  )
}
