import { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import {
  Route as RouteIcon,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Package,
  Truck,
  ChartNoAxesCombined,
  Globe2,
  Check,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
import Technology from "./pages/Technology.jsx";
import Pricing from "./pages/Pricing.jsx";
import Blog from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import Careers from "./pages/Careers.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import Legal from "./pages/Legal.jsx";
import Dashboard from "./pages/Dashboard.jsx";
const nav = [
  ["Home", "/"],
  ["Product", "/product"],
  ["Technology", "/technology"],
  ["Pricing", "/pricing"],
  ["Blog", "/blog"],
  ["About", "/about"],
  ["Careers", "/careers"],
];
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <Link className="brand" to="/">
        <span className="logo">
          <RouteIcon />
        </span>
        <span>
          Logisentra <b>Intelligence</b>
          <small>SEE THE WHOLE JOURNEY</small>
        </span>
      </Link>
      <button className="mobile" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      <nav className={open ? "nav open" : "nav"}>
        {nav.map(([n, p]) => (
          <NavLink key={p} to={p} onClick={() => setOpen(false)}>
            {n}
          </NavLink>
        ))}
        <Link to="/login" onClick={() => setOpen(false)}>
          Log in
        </Link>
        <Link className="btn small" to="/login">
          Get started <ArrowUpRight size={15} />
        </Link>
      </nav>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <div className="footerline">
        <Link className="brand" to="/">
          <span className="logo">
            <RouteIcon />
          </span>
          <span>
            Logisentra <b>Intelligence</b>
            <small>SEE THE WHOLE JOURNEY</small>
          </span>
        </Link>
        <span>Clarity for every mile.</span>
      </div>
      <div className="footerline bottom">
        <span>© 2026 Logisentra Intelligence</span>
        <span>
          <Link to="/contact">Contact</Link>
          <Link to="/legal">Privacy & Terms</Link>
        </span>
      </div>
    </footer>
  );
}
function Shell({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Shell>
            <Home />
          </Shell>
        }
      />
      <Route
        path="/product"
        element={
          <Shell>
            <Product />
          </Shell>
        }
      />
      <Route
        path="/technology"
        element={
          <Shell>
            <Technology />
          </Shell>
        }
      />
      <Route
        path="/pricing"
        element={
          <Shell>
            <Pricing />
          </Shell>
        }
      />
      <Route
        path="/blog"
        element={
          <Shell>
            <Blog />
          </Shell>
        }
      />
      <Route
        path="/about"
        element={
          <Shell>
            <About />
          </Shell>
        }
      />
      <Route
        path="/careers"
        element={
          <Shell>
            <Careers />
          </Shell>
        }
      />
      <Route
        path="/login"
        element={
          <Shell>
            <Login />
          </Shell>
        }
      />
      <Route
        path="/contact"
        element={
          <Shell>
            <Contact />
          </Shell>
        }
      />
      <Route
        path="/legal"
        element={
          <Shell>
            <Legal />
          </Shell>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Shell>
            <Dashboard />
          </Shell>
        }
      />
      <Route
        path="*"
        element={
          <Shell>
            <main className="wrap section">
              <h1>Page not found.</h1>
              <Link className="btn" to="/">
                Return home <ArrowRight />
              </Link>
            </main>
          </Shell>
        }
      />
    </Routes>
  );
}
