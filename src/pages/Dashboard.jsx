import { useState } from "react";
import {
  Search,
  Bell,
  Package,
  AlertTriangle,
  Clock3,
  CheckCircle2,
  Download,
  Filter,
  MapPin,
} from "lucide-react";
const data = [
  [
    "CT-2048",
    "Shanghai, China",
    "Rotterdam, Netherlands",
    "Ocean freight",
    "Oct 26, 08:40",
    "Low",
    "On track",
  ],
  [
    "CT-2047",
    "Lagos, Nigeria",
    "Antwerp, Belgium",
    "Ocean freight",
    "Oct 24, 14:15",
    "Elevated",
    "Attention",
  ],
  [
    "CT-2046",
    "Singapore",
    "Hamburg, Germany",
    "Ocean freight",
    "Oct 27, 06:20",
    "Low",
    "On track",
  ],
  [
    "CT-2045",
    "Nairobi, Kenya",
    "Marseille, France",
    "Air freight",
    "Oct 23, 11:30",
    "Moderate",
    "Review",
  ],
  [
    "CT-2044",
    "Mumbai, India",
    "Felixstowe, UK",
    "Ocean freight",
    "Oct 29, 17:00",
    "Low",
    "On track",
  ],
];
export default function Dashboard() {
  const [q, setQ] = useState(""),
    [filter, setFilter] = useState("All shipments"),
    [selected, setSelected] = useState("");
  const shown = data.filter(
    (s) =>
      (filter === "All shipments" ||
        (filter === "Elevated risk"
          ? s[5] === "Elevated"
          : s[6] !== "On track")) &&
      s.join(" ").toLowerCase().includes(q.toLowerCase()),
  );
  function exportCsv() {
    const csv = [
      "ID,Origin,Destination,Mode,ETA,Risk,Status",
      ...shown.map((s) => s.map((v) => `"${v}"`).join(",")),
    ].join("\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = "Logisentra-shipments.csv";
    a.click();
  }
  return (
    <main className="wrap dashboard">
      <div className="dashhead">
        <div>
          <p className="eyebrow">OPERATIONS / OVERVIEW</p>
          <h1>Good afternoon.</h1>
          <p className="muted">Here’s a snapshot of your shipment network.</p>
        </div>
        <button
          className="iconbutton"
          onClick={() => alert("You’re all caught up.")}
        >
          <Bell />
        </button>
      </div>
      <section className="dashbanner">
        <small>● NETWORK SNAPSHOT</small>
        <h2>
          Visibility across every
          <br />
          critical milestone.
        </h2>
        <p>
          Review shipment records and focus on exceptions that may need
          attention.
        </p>
      </section>
      <div className="dashmetrics">
        {[
          ["Shipments tracked", "2,481", Package],
          ["Needs attention", "18", AlertTriangle],
          ["On-time forecast", "96.8%", Clock3],
          ["Resolved exceptions", "142", CheckCircle2],
        ].map(([n, v, I]) => (
          <article key={n}>
            <span>
              {n}
              <I />
            </span>
            <b>{v}</b>
            <small>Illustrative reporting data</small>
          </article>
        ))}
      </div>
      <section className="dashbody">
        <div className="tablecard">
          <div className="tablehead">
            <div>
              <h2>Shipment overview</h2>
              <p>Recent records across your network</p>
            </div>
            <button className="export" onClick={exportCsv}>
              <Download /> Export CSV
            </button>
          </div>
          <div className="tablefilters">
            <label>
              <Search />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search shipments"
              />
            </label>
            <label>
              <Filter />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option>All shipments</option>
                <option>Elevated risk</option>
                <option>Needs review</option>
              </select>
            </label>
          </div>
          <div className="tableoverflow">
            <table>
              <thead>
                <tr>
                  <th>SHIPMENT</th>
                  <th>ROUTE</th>
                  <th>ETA</th>
                  <th>RISK</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {shown.map((s) => (
                  <tr
                    key={s[0]}
                    onClick={() => setSelected(selected === s[0] ? "" : s[0])}
                  >
                    <td>
                      <b>{s[0]}</b>
                      <small>{s[3]}</small>
                    </td>
                    <td>
                      {s[1]}
                      <br />
                      <span>→ {s[2]}</span>
                    </td>
                    <td>{s[4]}</td>
                    <td>
                      <em
                        className={
                          s[5] === "Elevated"
                            ? "high"
                            : s[5] === "Moderate"
                              ? "mid"
                              : "low"
                        }
                      >
                        {s[5]}
                      </em>
                    </td>
                    <td>{s[6]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {selected && (
            <p className="detail">
              Selected {selected}. Connect a verified logistics data source to
              display live milestones.
            </p>
          )}
        </div>
        <aside className="riskcard">
          <h2>Risk signals</h2>
          <p>Items to review</p>
          {[
            ["Port congestion", "Rotterdam · Route condition", AlertTriangle],
            ["ETA variance", "Lagos → Antwerp · Schedule", Clock3],
            ["Milestone recorded", "Singapore → Hamburg", CheckCircle2],
          ].map(([t, d, I]) => (
            <div className="riskitem" key={t}>
              <I />
              <div>
                <b>{t}</b>
                <small>{d}</small>
              </div>
            </div>
          ))}
          <div className="riskfoot">
            <MapPin /> Review records in context
          </div>
        </aside>
      </section>
      <p className="muted footnote">
        Illustrative workspace data · Not connected to live carrier or port
        feeds.
      </p>
    </main>
  );
}
