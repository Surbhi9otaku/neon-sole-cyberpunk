import React, { useEffect, useState } from "react";
import "./style.css";

const products = [
  {
  id: "NS-09",
  name: "Tokyo Edition",
  price: "₹12,999",
  tone: "pink",
  image: "/sneaker-ns09.png",
  colors: ["#ff00c8", "#00eaff", "#151515"]
},
{
  id: "NS-08",
  name: "Arctic Core",
  price: "₹11,499",
  tone: "cyan",
  image: "/sneaker-ns08.png",
  colors: ["#5beaff", "#1686b9", "#f3f3f3"]
},
{
  id: "NS-07",
  name: "Neon Strike",
  price: "₹11,999",
  tone: "lime",
  image: "/sneaker-ns07.png",
  colors: ["#b7ff00", "#00d9ff", "#101010"]
}
];

function App() {
  const [cart, setCart] = useState([]);
  const [seconds, setSeconds] = useState(14 * 3600 + 36 * 60 + 12);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => s > 0 ? s - 1 : 24 * 3600), 1000);
    return () => clearInterval(timer);
  }, []);

  const time = (n) => String(Math.floor(n)).padStart(2, "0");
  const addToCart = (product) => {
    setCart(items => [...items, product]);
    setToast(`${product.id} added to your cart`);
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <header className="topbar">
        <a className="logo" href="#home" aria-label="Neon Sole home">NEON<span>//</span>SOLE</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a className="active" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
          <a href="#tech" onClick={() => setMenuOpen(false)}>Technology</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
        <div className="nav-actions">
          <button aria-label="Search" className="icon-button" onClick={() => setToast("Search module coming soon")}>⌕</button>
          <button aria-label="Account" className="icon-button" onClick={() => setToast("Member access coming soon")}>♙</button>
          <button aria-label="Shopping cart" className="cart-button" onClick={() => setToast(cart.length ? `${cart.length} item(s) in cart` : "Your cart is empty")}>♧ <span>{cart.length}</span></button>
          <a className="outline-cta" href="#collection">Secure drop <b>↗</b></a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-backdrop" />
        <div className="hero-grid" />
        <div className="hero-copy">
          <p className="eyebrow"><i /> DROP 03 — TOKYO, 2099</p>
          <h1>OWN THE<br /><span>AFTERDARK.</span></h1>
          <p className="hero-subtitle">NEXT-GEN SNEAKER BRAND. ZERO COMPROMISE.</p>
          <div className="hero-buttons">
            <a className="primary-cta" href="#collection">Explore collection <b>↗</b></a>
            <a className="secondary-cta" href="#tech">Explore tech <span>▷</span></a>
          </div>
          <div className="countdown-wrap">
            <p>LIMITED DROP IN</p>
            <div className="countdown">
              <div><strong>{time(seconds / 86400)}</strong><small>DAYS</small></div>
              <div><strong>{time((seconds % 86400) / 3600)}</strong><small>HOURS</small></div>
              <div><strong>{time((seconds % 3600) / 60)}</strong><small>MINS</small></div>
              <div><strong>{time(seconds % 60)}</strong><small>SECS</small></div>
            </div>
          </div>
        </div>
        <div className="model-tag"><small>MODEL</small><strong>NS-09</strong><span>CYBER RUNNER<br />LIMITED EDITION</span></div>
        <div className="shoe-stage">
          <div className="shoe-glow" />
          <img src="/hero-sneaker.png" alt="Futuristic black sneaker with neon accents" />
          <span className="shoe-cross cross-one">＋</span><span className="shoe-cross cross-two">＋</span>
        </div>
        <div className="tech-callout callout-one"><b>REACTIVE KNIT</b><span>Breathable. Dynamic.<br />Always ahead.</span></div>
        <div className="tech-callout callout-two"><b>IMPACT CORE</b><span>Maximum energy<br />return.</span></div>
        <div className="tech-callout callout-three"><b>ULTRA GRIP</b><span>All-terrain control.</span></div>
        <div className="hero-index"><span>01</span><span className="selected">02</span><span>03</span></div>
      </section>

      <section className="feature-strip" id="tech">
        <div className="feature"><span className="feature-icon">◇</span><div><b>ADAPTIVE FIT</b><p>Moves with you.<br />Engineered for all-day control.</p></div></div>
        <div className="feature"><span className="feature-icon cyan">⬡</span><div><b>IMPACT CORE</b><p>High-rebound cushioning<br />for urban terrain.</p></div></div>
        <div className="feature"><span className="feature-icon">◎</span><div><b>NIGHT VISION</b><p>Reflective details.<br />Built for the afterdark.</p></div></div>
        <div className="feature"><span className="feature-icon pink">▦</span><div><b>LIMITED EDITION</b><p>Only for the bold.<br />Once it’s gone, it’s gone.</p></div></div>
      </section>

      <section className="collection" id="collection">
        <div className="collection-intro">
          <p className="eyebrow"><i /> COLLECTION</p>
          <h2>FEATURED<br />COLLECTION<span>.</span></h2>
          <p className="collection-desc">Street meets the future. Each pair is engineered with cutting-edge technology and inspired by the underground. This isn't just footwear — it's a statement.</p>
          <a className="secondary-cta all-collection" href="#products">View all collection <b>↗</b></a>
        </div>
        <div className="product-grid" id="products">
          {products.map(product => (
            <article className={`product-card ${product.tone}`} key={product.id}>
              <span className="new-tag">NEW</span>
              <div className="product-image"><img src={product.image} alt={`${product.id} ${product.name} sneaker`} /></div>
              <div className="product-info">
                <div><h3>{product.id}</h3><p>{product.name}</p><div className="swatches">{product.colors.map(color => <span key={color} style={{ background: color }} />)}</div></div>
                <div className="product-buy"><strong>{product.price}</strong><button onClick={() => addToCart(product)} aria-label={`Add ${product.id} to cart`}>＋</button></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="about">
        <a className="logo" href="#home">NEON<span>//</span>SOLE</a>
        <p>BUILT FOR A BRIGHTER UNDERGROUND.</p>
        <span>© 2099 NEON//SOLE LABS <b>•</b> TOKYO / EVERYWHERE</span>
      </footer>
      {toast && <div className="toast" role="status">{toast}<button onClick={() => setToast("")}>×</button></div>}
    </main>
  );
}

export default App;
