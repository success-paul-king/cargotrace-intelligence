import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Route,
  TrendingUp,
  AlertTriangle,
  Clock3,
  CheckCircle2,
} from "lucide-react";
export default function Home() {
  return (
    <main>
      <section className="hero wrap">
        <div>
          <p className="eyebrow">LOGISTICS INTELLIGENCE, REIMAGINED</p>
          <h1>
            Every shipment has a story.
            <br />
            <span>See what’s next.</span>
          </h1>
          <p className="lead">
            Turn fragmented supply-chain data into clear decisions. Anticipate
            disruptions, understand risk, and move every shipment forward with
            confidence.
          </p>
          <div className="actions">
            <Link className="btn" to="/login">
              Explore the platform <ArrowRight size={16} />
            </Link>
            <Link className="textlink" to="/product">
              Discover the platform <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="trust">
            <span>
              <ShieldCheck /> Risk-aware visibility
            </span>
            <span>
              <Activity /> Decision-ready insights
            </span>
          </div>
        </div>
        <div className="visual">
          <div className="visual-top">
            <span>● NETWORK OVERVIEW</span>
            <span>GLOBAL VIEW</span>
          </div>
          <svg viewBox="0 0 600 300">
            <defs>
              <pattern
                id="dots"
                width="14"
                height="14"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="#27435d" />
              </pattern>
            </defs>
            <rect width="600" height="300" fill="url(#dots)" />
            <g fill="#10283a" stroke="#23485d">
              <path d="M45 70 95 40 150 48 180 80 150 110 130 155 95 150 70 120Z" />
              <path d="M160 175 205 190 215 230 190 280 170 245Z" />
              <path d="M270 70 310 55 340 75 325 110 290 105Z" />
              <path d="M310 130 350 120 380 150 365 205 340 245 315 200Z" />
              <path d="M365 65 420 40 480 55 540 80 565 115 520 135 485 120 450 145 410 110Z" />
            </g>
            <g
              stroke="#22d3ee"
              strokeWidth="2"
              strokeDasharray="5 5"
              fill="none"
            >
              <path d="M100 90Q220 10 300 80T450 90Q500 140 530 205" />
              <path d="M300 80Q270 150 330 175T530 205" />
            </g>
            <g fill="#67e8f9" stroke="#07111d" strokeWidth="4">
              <circle cx="100" cy="90" r="6" />
              <circle cx="300" cy="80" r="6" />
              <circle cx="450" cy="90" r="6" />
              <circle cx="530" cy="205" r="6" />
              <circle cx="330" cy="175" r="6" />
            </g>
            <g fill="#d7f8ff" fontSize="10">
              <text x="75" y="75">
                LOS ANGELES
              </text>
              <text x="270" y="64">
                ROTTERDAM
              </text>
              <text x="425" y="75">
                SHANGHAI
              </text>
              <text x="500" y="225">
                SINGAPORE
              </text>
              <text x="310" y="198">
                LAGOS
              </text>
            </g>
          </svg>
          <div className="visual-stats">
            <div>
              <small>Shipments monitored</small>
              <b>2,481</b>
            </div>
            <div>
              <small>On-time forecast</small>
              <b>96.8%</b>
            </div>
            <div>
              <small>Risk signals</small>
              <b className="cyan">18</b>
            </div>
          </div>
        </div>
      </section>
      <section className="proof">
        <div className="wrap proofline">
          <span>BUILT FOR COMPLEX SUPPLY CHAINS</span>
          <b>Freight forwarders</b>
          <b>Logistics teams</b>
          <b>Supply chain leaders</b>
          <b>Operations analysts</b>
        </div>
      </section>
      <section className="wrap section">
        <div className="sectionhead">
          <div>
            <p className="eyebrow">ONE CLEARER PICTURE</p>
            <h2>
              From uncertainty to <span>forward motion.</span>
            </h2>
          </div>
          <p>
            Know what needs attention, why it matters, and where to act first.
          </p>
        </div>
        <div className="cards">
          <article>
            <div className="icon cyan">
              <ShieldCheck />
            </div>
            <small>01 / RISK INTELLIGENCE</small>
            <h3>See disruption before it spreads.</h3>
            <p>
              Bring shipment status, route conditions, and exception signals
              into one risk-focused view.
            </p>
            <Link to="/product">
              Explore risk engine <ArrowRight />
            </Link>
          </article>
          <article>
            <div className="icon blue">
              <Route />
            </div>
            <small>02 / ROUTE PERFORMANCE</small>
            <h3>Understand every mile.</h3>
            <p>
              Compare route performance, identify recurring delays, and make
              informed planning decisions.
            </p>
            <Link to="/product">
              Explore route analytics <ArrowRight />
            </Link>
          </article>
          <article>
            <div className="icon violet">
              <TrendingUp />
            </div>
            <small>03 / OPERATIONAL CLARITY</small>
            <h3>Turn signals into action.</h3>
            <p>
              Prioritize exceptions with clear context, ownership, and next-step
              recommendations.
            </p>
            <Link to="/product">
              Explore the platform <ArrowRight />
            </Link>
          </article>
        </div>
      </section>
      <section className="band">
        <div className="wrap split">
          <div>
            <p className="eyebrow">BUILT AROUND YOUR WORKFLOW</p>
            <h2>
              One view. Better decisions.
              <br />
              <span>Fewer surprises.</span>
            </h2>
            <p className="muted">
              Bring shipment details, risk indicators, and operational context
              together so your team can spend less time piecing together updates
              and more time acting on them.
            </p>
            <Link className="btn ghost" to="/technology">
              See how it works <ArrowRight />
            </Link>
          </div>
          <div className="signals">
            <div className="signalhead">
              EXCEPTION PRIORITY <small>ILLUSTRATIVE DATA</small>
            </div>
            <div className="signal">
              <AlertTriangle />
              <div>
                <b>Port congestion alert</b>
                <small>Rotterdam · Route condition</small>
              </div>
              <em className="high">Elevated</em>
            </div>
            <div className="signal">
              <Clock3 />
              <div>
                <b>ETA variance detected</b>
                <small>Lagos → Antwerp · Schedule</small>
              </div>
              <em className="mid">Review</em>
            </div>
            <div className="signal">
              <CheckCircle2 />
              <div>
                <b>Documentation verified</b>
                <small>Shanghai → Rotterdam · Cargo</small>
              </div>
              <em className="low">Clear</em>
            </div>
          </div>
        </div>
      </section>
      <section className="wrap section">
        <div className="cta">
          <div>
            <p className="eyebrow">YOUR NEXT MOVE STARTS HERE</p>
            <h2>
              Bring your supply chain
              <br />
              into focus.
            </h2>
            <p>
              See how Logisentra can help your team work with greater clarity.
            </p>
          </div>
          <Link className="btn" to="/contact">
            Talk to our team <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
