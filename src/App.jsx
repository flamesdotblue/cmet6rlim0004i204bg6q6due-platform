import React, { useMemo, useState } from "react";

const neoPalette = {
  bg: "#0f0e11",
  surface: "#19181d",
  accent: "#e86c5d",
  accent2: "#f2b134",
  line: "#2a2931",
  text: "#f4efe8",
  muted: "#b6b0a6",
};

const PRODUCTS = [
  // Flash Sheets
  {
    id: "flash-1",
    type: "flash",
    title: "Snake & Peony",
    price: 180,
    size: "Medium",
    colors: ["black", "color"],
    image:
      "https://images.unsplash.com/photo-1543409294-1b2877b75c4f?q=80&w=1200&auto=format&fit=crop",
    tags: ["snake", "flower", "neo-trad"],
  },
  {
    id: "flash-2",
    type: "flash",
    title: "Dagger & Rose",
    price: 160,
    size: "Small",
    colors: ["black", "color"],
    image:
      "https://images.unsplash.com/photo-1551739440-5dd934c7e0f8?q=80&w=1200&auto=format&fit=crop",
    tags: ["dagger", "rose", "classic"],
  },
  {
    id: "flash-3",
    type: "flash",
    title: "Panther Head",
    price: 200,
    size: "Medium",
    colors: ["black"],
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1200&auto=format&fit=crop",
    tags: ["panther", "bold"],
  },
  {
    id: "flash-4",
    type: "flash",
    title: "Lady Head & Chrysanthemum",
    price: 260,
    size: "Large",
    colors: ["color"],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    tags: ["lady", "chrysanthemum", "ornamental"],
  },
  // Prints
  {
    id: "print-1",
    type: "print",
    title: "Neo-Trad Tiger Print",
    price: 40,
    size: "A3",
    colors: ["color"],
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646d18f1c?q=80&w=1200&auto=format&fit=crop",
    tags: ["print", "tiger"],
  },
  {
    id: "print-2",
    type: "print",
    title: "Dagger & Heart Print",
    price: 35,
    size: "A4",
    colors: ["color"],
    image:
      "https://images.unsplash.com/photo-1549558549-415fe4c37b60?q=80&w=1200&auto=format&fit=crop",
    tags: ["print", "dagger", "heart"],
  },
  {
    id: "print-3",
    type: "print",
    title: "Skull & Roses Print",
    price: 45,
    size: "A3",
    colors: ["black"],
    image:
      "https://images.unsplash.com/photo-1517467139951-f5a925c9f9b5?q=80&w=1200&auto=format&fit=crop",
    tags: ["print", "skull"],
  },
];

const SKETCHBOOK = [
  "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526318472351-3a47d2a8076b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544739313-61627ea00c5e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544091061-fff7f79be1d3?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561214078-f3247647fc5e?q=80&w=1200&auto=format&fit=crop",
];

function formatPrice(n) {
  return `$${n.toFixed(2)}`;
}

function Nav({ cartCount }) {
  return (
    <div className="sticky top-0 z-40 border-b" style={{ background: neoPalette.bg, borderColor: neoPalette.line }}>
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8 rounded-full" style={{ background: neoPalette.accent2 }} />
          <span className="tracking-widest text-sm" style={{ color: neoPalette.muted }}>NEO TRAD INK</span>
        </a>
        <div className="hidden md:flex items-center gap-6" style={{ color: neoPalette.text }}>
          <a className="hover:opacity-80" href="#designs">See Available Designs</a>
          <a className="hover:opacity-80" href="#prints">Prints</a>
          <a className="hover:opacity-80" href="#sketchbook">Sketchbook</a>
          <a className="hover:opacity-80" href="#booking">Booking</a>
          <a className="hover:opacity-80" href="#contact">Contact</a>
        </div>
        <a href="#cart" className="relative" aria-label="cart">
          <CartIcon color={neoPalette.text} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-xs rounded-full px-1.5 py-0.5" style={{ background: neoPalette.accent, color: neoPalette.text }}>{cartCount}</span>
          )}
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1543248939-ff40856f65d4?q=80&w=1600&auto=format&fit=crop"
          alt="tattoo studio background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight" style={{ color: neoPalette.text }}>Neo‑Traditional Tattoo Studio</h1>
          <p className="mt-4 text-lg" style={{ color: neoPalette.muted }}>
            Bold lines. Lush color. Timeless iconography. Explore available flash, shop prints, or book your next session.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#designs" className="px-5 py-3 rounded-md font-medium" style={{ background: neoPalette.accent, color: neoPalette.text }}>See Available Designs</a>
            <a href="#booking" className="px-5 py-3 rounded-md font-medium border" style={{ borderColor: neoPalette.accent2, color: neoPalette.accent2 }}>Book a Session</a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {SKETCHBOOK.slice(0, 6).map((src, i) => (
            <img key={i} src={src} alt="sketch" className={`rounded-md object-cover h-28 md:h-36 ${i % 3 === 1 ? 'mt-6' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ item, onAdd }) {
  return (
    <div className="group rounded-lg overflow-hidden border flex flex-col" style={{ borderColor: neoPalette.line, background: neoPalette.surface }}>
      <div className="relative">
        <img src={item.image} alt={item.title} className="w-full h-52 object-cover" />
        <div className="absolute bottom-2 left-2 flex gap-1">
          {item.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded" style={{ background: "rgba(0,0,0,0.55)", color: neoPalette.text }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold" style={{ color: neoPalette.text }}>{item.title}</h3>
        <div className="mt-1 text-sm" style={{ color: neoPalette.muted }}>{item.type === 'flash' ? `${item.size} • ${item.colors.join(" / ")}` : `${item.size} art print`}</div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="font-bold" style={{ color: neoPalette.accent2 }}>{formatPrice(item.price)}</div>
          <button onClick={() => onAdd(item)} className="px-3 py-2 rounded-md text-sm font-medium" style={{ background: neoPalette.accent, color: neoPalette.text }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

function Filters({ type, setType, query, setQuery, color, setColor, size, setSize }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Select label="Category" value={type} onChange={(v) => setType(v)} options={[{ label: "Flash", value: "flash" }, { label: "Prints", value: "print" }]} />
      <Select label="Color" value={color} onChange={setColor} options={[{ label: "All", value: "all" }, { label: "Color", value: "color" }, { label: "Black", value: "black" }]} />
      <Select label="Size" value={size} onChange={setSize} options={[{ label: "All", value: "all" }, { label: "Small", value: "Small" }, { label: "Medium", value: "Medium" }, { label: "Large", value: "Large" }, { label: "A4", value: "A4" }, { label: "A3", value: "A3" }]} />
      <div className="relative">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tags or titles" className="px-3 py-2 rounded-md border text-sm w-64" style={{ background: neoPalette.bg, borderColor: neoPalette.line, color: neoPalette.text }} />
        <div className="absolute right-2 top-2.5 opacity-60"><SearchIcon /></div>
      </div>
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="text-sm" style={{ color: neoPalette.muted }}>
      <span className="mr-2">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="px-3 py-2 rounded-md border text-sm" style={{ background: neoPalette.bg, borderColor: neoPalette.line, color: neoPalette.text }}>
        {options.map((o) => (
          <option key={o.value} value={o.value} style={{ color: "black" }}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}

function CartIcon({ color = "#fff" }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 4h-2l-1 2m0 0l2.2 7.7a2 2 0 001.94 1.5H17a2 2 0 001.93-1.5L20 8H6m-2-2h16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="20" r="1.5" fill={color} />
      <circle cx="17" cy="20" r="1.5" fill={color} />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="7" stroke="#999" strokeWidth="1.5"/>
      <path d="M20 20l-3.5-3.5" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function SocialLinks() {
  const items = [
    { label: "Instagram", href: "https://instagram.com", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke={neoPalette.text} strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="4" stroke={neoPalette.text} strokeWidth="1.5"/>
        <circle cx="17.5" cy="6.5" r="1" fill={neoPalette.text}/>
      </svg>
    ) },
    { label: "TikTok", href: "https://tiktok.com", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 4v9.5a3.5 3.5 0 11-3-3.46" stroke={neoPalette.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 6c1.2 1.8 3.1 3 5 3" stroke={neoPalette.text} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ) },
    { label: "Email", href: "mailto:hello@example.com", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke={neoPalette.text} strokeWidth="1.5"/>
        <path d="M4 7l8 6 8-6" stroke={neoPalette.text} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ) },
  ];
  return (
    <div className="flex items-center gap-4">
      {items.map((it) => (
        <a key={it.label} href={it.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-md border text-sm" style={{ borderColor: neoPalette.line, color: neoPalette.text }}>
          {it.icon}
          <span>{it.label}</span>
        </a>
      ))}
    </div>
  );
}

function Cart({ items, onRemove, onCheckout }) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <section id="cart" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold mb-6" style={{ color: neoPalette.text }}>Your Cart</h2>
      {items.length === 0 ? (
        <div className="rounded-md border p-6" style={{ borderColor: neoPalette.line, color: neoPalette.muted }}>
          Your cart is empty.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-3">
            {items.map((it) => (
              <div key={it.id} className="flex items-center gap-4 rounded-md border p-3" style={{ borderColor: neoPalette.line, background: neoPalette.surface }}>
                <img src={it.image} alt={it.title} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-medium" style={{ color: neoPalette.text }}>{it.title}</div>
                  <div className="text-sm" style={{ color: neoPalette.muted }}>{it.type === 'flash' ? 'Flash design' : 'Art print'} • Qty {it.qty}</div>
                </div>
                <div className="font-semibold" style={{ color: neoPalette.accent2 }}>{formatPrice(it.price * it.qty)}</div>
                <button onClick={() => onRemove(it.id)} className="text-sm px-3 py-1 rounded border" style={{ borderColor: neoPalette.line, color: neoPalette.muted }}>Remove</button>
              </div>
            ))}
          </div>
          <div className="rounded-md border p-4 h-fit" style={{ borderColor: neoPalette.line, background: neoPalette.surface }}>
            <div className="flex items-center justify-between mb-2" style={{ color: neoPalette.text }}>
              <span>Subtotal</span>
              <span className="font-bold" style={{ color: neoPalette.accent2 }}>{formatPrice(total)}</span>
            </div>
            <p className="text-sm mb-4" style={{ color: neoPalette.muted }}>Taxes and shipping calculated at checkout. Flash deposits are applied to your final session cost.</p>
            <button onClick={onCheckout} className="w-full px-4 py-2 rounded-md font-semibold" style={{ background: neoPalette.accent, color: neoPalette.text }}>Checkout</button>
          </div>
        </div>
      )}
    </section>
  );
}

function CheckoutModal({ open, onClose, onComplete, total }) {
  const [values, setValues] = useState({ name: "", email: "", note: "" });
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-lg border p-6" style={{ background: neoPalette.surface, borderColor: neoPalette.line }}>
        <h3 className="text-xl font-bold mb-4" style={{ color: neoPalette.text }}>Checkout</h3>
        <div className="space-y-3">
          <input value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} placeholder="Full name" className="w-full px-3 py-2 rounded-md border" style={{ background: neoPalette.bg, borderColor: neoPalette.line, color: neoPalette.text }} />
          <input value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} placeholder="Email" type="email" className="w-full px-3 py-2 rounded-md border" style={{ background: neoPalette.bg, borderColor: neoPalette.line, color: neoPalette.text }} />
          <textarea value={values.note} onChange={(e) => setValues({ ...values, note: e.target.value })} placeholder="Notes (shipping, preferences)" rows={3} className="w-full px-3 py-2 rounded-md border" style={{ background: neoPalette.bg, borderColor: neoPalette.line, color: neoPalette.text }} />
          <div className="flex items-center justify-between mt-2">
            <div style={{ color: neoPalette.muted }}>Total</div>
            <div className="font-bold" style={{ color: neoPalette.accent2 }}>{formatPrice(total)}</div>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-md border" style={{ borderColor: neoPalette.line, color: neoPalette.muted }}>Cancel</button>
          <button onClick={() => onComplete(values)} disabled={!values.name || !values.email} className="px-4 py-2 rounded-md font-semibold disabled:opacity-50" style={{ background: neoPalette.accent, color: neoPalette.text }}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

function Booking() {
  const [values, setValues] = useState({ name: "", email: "", instagram: "", date: "", design: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="booking" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold" style={{ color: neoPalette.text }}>Book a Session</h2>
          <p className="mt-2" style={{ color: neoPalette.muted }}>Fill out the form and I will reach out to confirm your appointment and details. A deposit may be required to secure your date.</p>
          <ul className="mt-4 space-y-2 text-sm" style={{ color: neoPalette.muted }}>
            <li>• Preferred days: Tue–Sat</li>
            <li>• Studio location: Downtown</li>
            <li>• Styles: Neo‑traditional, bold blackwork, classic motifs</li>
          </ul>
        </div>
        <div className="rounded-lg border p-4" style={{ borderColor: neoPalette.line, background: neoPalette.surface }}>
          {submitted ? (
            <div>
              <h3 className="text-xl font-semibold" style={{ color: neoPalette.text }}>Thanks! Your request has been sent.</h3>
              <p className="mt-2" style={{ color: neoPalette.muted }}>I’ll get back to you via email with available times.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3">
              <input required value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} placeholder="Name" className="w-full px-3 py-2 rounded-md border" style={{ background: neoPalette.bg, borderColor: neoPalette.line, color: neoPalette.text }} />
              <input required type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} placeholder="Email" className="w-full px-3 py-2 rounded-md border" style={{ background: neoPalette.bg, borderColor: neoPalette.line, color: neoPalette.text }} />
              <input value={values.instagram} onChange={(e) => setValues({ ...values, instagram: e.target.value })} placeholder="Instagram handle (optional)" className="w-full px-3 py-2 rounded-md border" style={{ background: neoPalette.bg, borderColor: neoPalette.line, color: neoPalette.text }} />
              <input type="date" value={values.date} onChange={(e) => setValues({ ...values, date: e.target.value })} className="w-full px-3 py-2 rounded-md border text-sm" style={{ background: neoPalette.bg, borderColor: neoPalette.line, color: neoPalette.text }} />
              <select value={values.design} onChange={(e) => setValues({ ...values, design: e.target.value })} className="w-full px-3 py-2 rounded-md border text-sm" style={{ background: neoPalette.bg, borderColor: neoPalette.line, color: neoPalette.text }}>
                <option value="">Design interest (optional)</option>
                {PRODUCTS.filter((p) => p.type === 'flash').map((p) => (
                  <option key={p.id} value={p.title} style={{ color: 'black' }}>{p.title}</option>
                ))}
              </select>
              <textarea rows={4} value={values.notes} onChange={(e) => setValues({ ...values, notes: e.target.value })} placeholder="Placement, size, reference notes" className="w-full px-3 py-2 rounded-md border" style={{ background: neoPalette.bg, borderColor: neoPalette.line, color: neoPalette.text }} />
              <button className="w-full px-4 py-2 rounded-md font-semibold" style={{ background: neoPalette.accent, color: neoPalette.text }}>Request Booking</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Sketchbook() {
  return (
    <section id="sketchbook" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-3xl font-bold" style={{ color: neoPalette.text }}>Sketchbook</h2>
        <span className="text-sm" style={{ color: neoPalette.muted }}>Work-in-progress motifs, linework, and color studies</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {SKETCHBOOK.map((src, i) => (
          <img key={i} src={src} alt={`sketch ${i + 1}`} className="rounded-md object-cover aspect-[4/3]" />
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t mt-16" style={{ borderColor: neoPalette.line }}>
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-lg font-bold" style={{ color: neoPalette.text }}>NEO TRAD INK</div>
          <div className="text-sm mt-1" style={{ color: neoPalette.muted }}>© {new Date().getFullYear()} All Rights Reserved</div>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default function App() {
  const [type, setType] = useState("flash");
  const [query, setQuery] = useState("");
  const [color, setColor] = useState("all");
  const [size, setSize] = useState("all");
  const [cart, setCart] = useState([]);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [orderComplete, setOrderComplete] = useState(null);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => p.type === type)
      .filter((p) => (color === "all" ? true : p.colors.includes(color)))
      .filter((p) => (size === "all" ? true : p.size === size))
      .filter((p) => {
        if (!query.trim()) return true;
        const q = query.toLowerCase();
        return p.title.toLowerCase().includes(q) || p.tags.some((t) => t.toLowerCase().includes(q));
      });
  }, [type, query, color, size]);

  function addToCart(item) {
    setCart((prev) => {
      const existing = prev.find((it) => it.id === item.id);
      if (existing) return prev.map((it) => (it.id === item.id ? { ...it, qty: it.qty + 1 } : it));
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((it) => it.id !== id));
  }

  const total = cart.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <div className="min-h-screen" style={{ background: neoPalette.bg }}>
      <div className="scroll-smooth">
        <Nav cartCount={cart.length} />
        <Hero />

        <section id="designs" className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-3xl font-bold" style={{ color: neoPalette.text }}>See Available Designs</h2>
            <a href="#booking" className="hidden md:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border" style={{ borderColor: neoPalette.line, color: neoPalette.muted }}>
              Prefer custom? Start a booking
            </a>
          </div>
          <Filters type={type} setType={setType} query={query} setQuery={setQuery} color={color} setColor={setColor} size={size} setSize={setSize} />
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {filtered.map((item) => (
              <ProductCard key={item.id} item={item} onAdd={addToCart} />
            ))}
          </div>
        </section>

        <section id="prints" className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold" style={{ color: neoPalette.text }}>Prints</h2>
            <span className="text-sm" style={{ color: neoPalette.muted }}>Gallery quality giclée paper</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRODUCTS.filter((p) => p.type === "print").map((item) => (
              <ProductCard key={item.id} item={item} onAdd={addToCart} />
            ))}
          </div>
        </section>

        <Sketchbook />

        <Cart items={cart} onRemove={removeFromCart} onCheckout={() => setOpenCheckout(true)} />

        <Booking />

        <Footer />
      </div>

      <CheckoutModal
        open={openCheckout}
        onClose={() => setOpenCheckout(false)}
        total={total}
        onComplete={(vals) => {
          setOpenCheckout(false);
          setOrderComplete({ id: Math.random().toString(36).slice(2, 8).toUpperCase(), email: vals.email, total });
          setCart([]);
        }}
      />

      {orderComplete && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 rounded-md border px-4 py-3" style={{ background: neoPalette.surface, borderColor: neoPalette.line, color: neoPalette.text }}>
          Order {orderComplete.id} confirmed. Receipt sent to {orderComplete.email}. Total {formatPrice(orderComplete.total)}
          <button className="ml-3 underline" onClick={() => setOrderComplete(null)} style={{ color: neoPalette.accent2 }}>Dismiss</button>
        </div>
      )}
    </div>
  );
}