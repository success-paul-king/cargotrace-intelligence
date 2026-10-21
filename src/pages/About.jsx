import { Link } from 'react-router-dom';
import {
  ArrowRight, ArrowUpRight, Activity, Boxes, ChartNoAxesCombined, Check,
  CircleAlert, Clock3, Database, Eye, GitBranch, Globe2, Layers3, MapPinned,
  ShieldCheck, Target, Truck, Users, Workflow
} from 'lucide-react';

const capabilities = [
  { icon: Eye, number: '01', title: 'See every shipment in context', text: 'Bring shipment status, planned routes, milestones, and estimated arrival information into a clearer operational view. Instead of chasing updates across disconnected tools, teams can start from a shared picture of what is moving and where attention may be needed.' },
  { icon: CircleAlert, number: '02', title: 'Recognize risk earlier', text: 'Surface exceptions such as potential delays, route disruption, schedule variance, and missing milestones. Risk indicators help teams distinguish routine movement from shipments that may need investigation or intervention.' },
  { icon: ChartNoAxesCombined, number: '03', title: 'Understand route performance', text: 'Compare routes and movement patterns to see where delays recur, how reliably schedules are being met, and which parts of an operation may deserve a closer look. Historical and current information can turn isolated incidents into useful operational learning.' },
  { icon: Workflow, number: '04', title: 'Coordinate the next action', text: 'Give teams a structured way to review exceptions, understand why they matter, assign attention, and communicate the next step. The goal is not another dashboard to watch; it is a clearer path from signal to decision.' },
];

const audiences = [
  { icon: Truck, title: 'Freight forwarders', text: 'Keep track of moving shipments, spot exceptions, and give customers clearer updates when plans change.' },
  { icon: Boxes, title: 'Logistics operations teams', text: 'Prioritize daily work, coordinate responses, and reduce time spent manually assembling shipment information.' },
  { icon: Globe2, title: 'Supply-chain leaders', text: 'Understand recurring disruption patterns and gain a broader view of service reliability and operational exposure.' },
  { icon: Users, title: 'Operations analysts', text: 'Turn shipment and route data into useful comparisons, reports, and evidence for process improvement.' },
];

const flow = [
  ['Collect', 'Bring relevant shipment, route, milestone, and operational information together.'],
  ['Interpret', 'Organize the information around status, exceptions, timing, and potential impact.'],
  ['Prioritize', 'Identify which situations need review first, based on their urgency and operational context.'],
  ['Respond', 'Use the shared view to investigate, coordinate with the right people, and decide on next steps.'],
];

export default function About() {
  return (
    <main className="wrap page aboutpage">
      <section className="abouthero about-hero-detailed">
        <div className="about-copy">
          <p className="eyebrow">ABOUT CARGOTRACE INTELLIGENCE</p>
          <h1>Supply chains move fast.<br /><span>Your decisions should move with clarity.</span></h1>
          <p className="about-intro">CargoTrace Intelligence is a logistics visibility and risk-awareness platform concept designed to help teams understand shipment movement, recognize operational exceptions, and make better-informed decisions across the supply chain.</p>
          <div className="actions">
            <Link className="btn" to="/product">Explore the platform <ArrowRight /></Link>
            <Link className="textlink" to="/contact">Talk to our team <ArrowUpRight /></Link>
          </div>
          <div className="about-proof"><span><Check /> Shipment visibility</span><span><Check /> Risk-aware operations</span><span><Check /> Decision-ready context</span></div>
        </div>
        <div className="about-visual" aria-label="Illustration of connected shipment intelligence">
          <div className="about-visual-head"><span><i /> OPERATIONS INTELLIGENCE</span><span>END-TO-END VIEW</span></div>
          <div className="about-network">
            <div className="network-line line-one" /><div className="network-line line-two" />
            <div className="network-node node-a"><span><MapPinned /></span><b>Shipment</b><small>Movement data</small></div>
            <div className="network-node node-b"><span><Activity /></span><b>Risk signals</b><small>Exceptions</small></div>
            <div className="network-node node-c"><span><Database /></span><b>Context</b><small>Operational detail</small></div>
            <div className="network-center"><GitBranch /><b>CARGOTRACE</b><small>CONNECTED VIEW</small></div>
          </div>
          <div className="about-visual-foot"><span><i className="green-dot" /> SHARED OPERATIONAL PICTURE</span><span>VISIBILITY → ACTION</span></div>
        </div>
      </section>

      <section className="about-definition">
        <div><p className="eyebrow">WHAT THE PLATFORM DOES</p><h2>From scattered updates<br /><span>to a clearer next move.</span></h2></div>
        <div className="about-definition-copy"><p>Modern logistics depends on information coming from many places: shipment records, carrier updates, route plans, delivery milestones, fleet activity, and messages from people on the ground. When that information is fragmented, teams can spend valuable time piecing together what happened instead of deciding what to do about it.</p><p>CargoTrace is designed to bring those signals into one structured view. It helps users follow shipment progress, notice deviations from expectations, compare route performance, and understand which exceptions deserve attention. The result is a more organized foundation for planning, communication, and operational decisions.</p></div>
      </section>

      <section className="section about-capabilities">
        <div className="sectionhead"><div><p className="eyebrow">THE WORKFLOW</p><h2>Four ways to make<br /><span>complexity more manageable.</span></h2></div><p>One connected workflow for understanding what is happening, why it matters, and where to focus next.</p></div>
        <div className="about-capability-list">{capabilities.map(({ icon: Icon, number, title, text }) => <article className="about-capability" key={number}><div className="about-cap-icon"><Icon /></div><div><small>{number} / PLATFORM CAPABILITY</small><h3>{title}</h3></div><p>{text}</p></article>)}</div>
      </section>

      <section className="about-process-band">
        <div className="about-process-intro"><p className="eyebrow">HOW IT FITS TOGETHER</p><h2>A practical path from<br /><span>information to action.</span></h2><p>CargoTrace is designed to support the decisions logistics teams make every day—not to replace their experience or judgment.</p></div>
        <div className="about-flow">{flow.map(([title, text], i) => <article key={title}><span className="about-flow-number">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div>{i < flow.length - 1 && <ArrowRight className="flow-arrow" />}</article>)}</div>
      </section>

      <section className="section about-audience">
        <div className="sectionhead"><div><p className="eyebrow">WHO IT IS FOR</p><h2>Built around the people<br /><span>who keep goods moving.</span></h2></div><p>Different roles need different answers. CargoTrace aims to give each team a clearer operational starting point.</p></div>
        <div className="cards">{audiences.map(({ icon: Icon, title, text }) => <article key={title} className="about-audience-card"><span className="icon"><Icon /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="about-principles">
        <div><p className="eyebrow">OUR PRINCIPLES</p><h2>Useful intelligence.<br /><span>Clear human decisions.</span></h2><p className="muted">Technology is valuable when it helps people understand a situation and act with confidence. The platform is designed around clarity, context, and practical workflows.</p></div>
        <div className="about-principle-list"><article><ShieldCheck /><div><b>Make risk easier to understand</b><p>Present exceptions with enough context to help teams review urgency and potential impact.</p></div></article><article><Layers3 /><div><b>Connect the relevant details</b><p>Bring related shipment and route information together instead of forcing users to jump between disconnected views.</p></div></article><article><Clock3 /><div><b>Help teams focus their time</b><p>Make it easier to spot where attention may be needed, so people can investigate the right issues first.</p></div></article><article><Target /><div><b>Keep people in control</b><p>Support human judgment and coordination; operational decisions remain with the people responsible for them.</p></div></article></div>
      </section>
<section className="section about-leadership">
  <div className="sectionhead">
    <div>
      <p className="eyebrow">OUR LEADERSHIP</p>
      <h2>
        The person building<br />
        <span>CargoTrace.</span>
      </h2>
    </div>
    <p>
      Building a clearer way for logistics teams to understand
      shipment movement, recognize risks, and make informed decisions.
    </p>
  </div>

  <article className="about-founder-card">
    <div className="about-founder-avatar">VP</div>
    <div className="about-founder-content">
      <p className="eyebrow">FOUNDER</p>
      <h3>Vincent Paul Somtochukwu</h3>
      <p>
        Leading the vision behind CargoTrace Intelligence: making
        complex supply-chain information easier to understand and
        helping logistics teams move from fragmented updates to
        clearer operational decisions.
      </p>
    </div>
  </article>
</section>
      <section className="about-honesty"><div className="about-honesty-icon"><Activity /></div><div><p className="eyebrow">A NOTE ON CAPABILITIES</p><h3>Designed for actionable visibility.</h3><p>CargoTrace’s product pages describe the intended platform experience. Live carrier integrations, predictive models, automated alerts, and real-time data processing depend on the underlying services and data connections being implemented and configured. This website does not imply that every integration or automated capability is already active.</p></div></section>

      <section className="section"><div className="cta"><div><p className="eyebrow">SEE YOUR OPERATIONS MORE CLEARLY</p><h2>Let’s talk about your supply chain.</h2><p>Tell us where shipment visibility or exception handling is hardest for your team.</p></div><Link className="btn" to="/contact">Contact us <ArrowRight /></Link></div></section>
    </main>
  );
}
