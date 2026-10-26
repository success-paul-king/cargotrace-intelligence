import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Route, Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";
export default function Login() {
  const [mode, setMode] = useState("login"),
    [show, setShow] = useState(false),
    [done, setDone] = useState(false),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [name, setName] = useState("");
  const go = useNavigate();
  return (
    <main className="auth">
      <section className="authvisual">
        <div className="authmark">
          <Route />
        </div>
        <p className="eyebrow">LOGISENTRA INTELLIGENCE</p>
        <h2>
          See the whole journey.
          <br />
          <span>Act with confidence.</span>
        </h2>
        <p>
          Shipment visibility and risk context, designed around the decisions
          your team makes every day.
        </p>
        <small>
          <ShieldCheck /> A clearer view of your operation
        </small>
      </section>
      <section className="authside">
        {done ? (
          <div className="authform">
            <p className="eyebrow">WELCOME ABOARD</p>
            <h1>
              {mode === "login"
                ? "You’re signed in."
                : "Your workspace is ready."}
            </h1>
            <p className="muted">
              This is a frontend account flow. No account or password was sent
              to a server.
            </p>
            <button className="btn" onClick={() => go("/dashboard")}>
              Open workspace <ArrowRight />
            </button>
            <button className="textbutton" onClick={() => setDone(false)}>
              Return to form
            </button>
          </div>
        ) : (
          <div className="authform">
            <Link to="/" className="back">
              ← Back to home
            </Link>
            <p className="eyebrow">
              {mode === "login" ? "WELCOME BACK" : "GET STARTED"}
            </p>
            <h1>
              {mode === "login"
                ? "Sign in to Logisentra"
                : "Create your workspace"}
            </h1>
            <p className="muted">
              {mode === "login"
                ? "Access your logistics workspace and operational overview."
                : "Start building a clearer picture of your supply chain."}
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              {mode === "signup" && (
                <label>
                  Full name
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                  />
                </label>
              )}
              <label>
                Work email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@company.com"
                />
              </label>
              <label>
                Password
                <span className="password">
                  <input
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="6"
                    required
                    placeholder="Enter your password"
                  />
                  <button type="button" onClick={() => setShow(!show)}>
                    {show ? <EyeOff /> : <Eye />}
                  </button>
                </span>
              </label>
              {mode === "login" && (
                <div className="formaux">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      alert("Please contact the team for account assistance.")
                    }
                  >
                    Forgot password?
                  </button>
                </div>
              )}
              <button className="btn full" type="submit">
                {mode === "login" ? "Sign in" : "Create account"} <ArrowRight />
              </button>
            </form>
            <p className="toggle">
              {mode === "login"
                ? "New to Logisentra?"
                : "Already have an account?"}{" "}
              <button
                onClick={() => setMode(mode === "login" ? "signup" : "login")}
              >
                {mode === "login" ? "Get started" : "Sign in"}
              </button>
            </p>
            <p className="authlegal">
              By continuing, you agree to our{" "}
              <Link to="/legal">Terms and Privacy Policy</Link>.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
