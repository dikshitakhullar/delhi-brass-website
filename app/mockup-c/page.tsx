// MOCKUP C: Modern Indian Luxury — Warm, confident, Nicobar/Good Earth energy for metalwork
export default function MockupC() {
  return (
    <div style={{ fontFamily: "'Tenor Sans', sans-serif", margin: 0, padding: 0 }}>
      {/* NAV — warm cream with confident dark text */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px 48px',
        background: '#1c1916', borderBottom: '1px solid rgba(220,201,155,0.1)',
      }}>
        <span style={{ fontFamily: "'Forum', serif", fontSize: 20, letterSpacing: 6, color: '#f0e8dc' }}>
          DELHI BRASS
        </span>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {['LIGHTING','GATES','RAILINGS','PROJECTS','ABOUT'].map(l => (
            <span key={l} style={{ fontSize: 10, letterSpacing: 3, color: '#8a8070', cursor: 'pointer' }}>{l}</span>
          ))}
          <span style={{
            fontSize: 10, letterSpacing: 3, color: '#1c1916',
            background: '#dcc99b', padding: '8px 20px', cursor: 'pointer',
          }}>
            TRADE
          </span>
        </div>
      </nav>

      {/* HERO — Full-bleed product photo, warm dark overlay, bold serif tagline */}
      <section style={{
        height: '100vh', position: 'relative', overflow: 'hidden',
        background: '#1c1916',
      }}>
        {/* Warm ambient background simulating a lifestyle shot */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, #2a221a 0%, #1c1610 40%, #181210 100%)',
        }} />
        <div style={{
          position: 'absolute', top: '5%', left: '30%', width: '50%', height: '80%',
          background: 'radial-gradient(ellipse, rgba(200,170,110,0.1) 0%, transparent 70%)',
        }} />

        {/* Product image placeholder */}
        <div style={{
          position: 'absolute', top: '8%', right: '5%', width: '55%', height: '84%',
          borderRadius: 8, overflow: 'hidden',
          background: 'linear-gradient(180deg, #2a2218 0%, #1a1610 100%)',
          border: '1px solid rgba(220,201,155,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#555040', fontSize: 11, letterSpacing: 2,
        }}>
          [ LIFESTYLE: CHANDELIER IN WARM ROOM ]
        </div>

        {/* Text — left side, vertically centered */}
        <div style={{
          position: 'absolute', top: 0, left: 0, bottom: 0, width: '42%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '0 80px',
          zIndex: 2,
        }}>
          <p style={{ fontSize: 11, letterSpacing: 5, color: '#dcc99b', marginBottom: 20 }}>
            HANDCRAFTED IN INDIA SINCE 1947
          </p>
          <h1 style={{
            fontFamily: "'Forum', serif", fontSize: 56, fontWeight: 400,
            color: '#f5f0e8', letterSpacing: 3, lineHeight: 1.15, margin: 0,
          }}>
            Illuminate<br/>
            with<br/>
            intention.
          </h1>
          <p style={{
            fontSize: 14, color: '#9a8e7e', lineHeight: 1.8,
            maxWidth: 380, marginTop: 28,
          }}>
            Chandeliers, gates &amp; bespoke metalwork — three generations
            of Delhi&apos;s finest craftsmen, one uncompromising standard.
          </p>
          <div style={{ display: 'flex', gap: 16, marginTop: 36 }}>
            <span style={{
              padding: '14px 36px', background: '#dcc99b', color: '#1c1916',
              fontSize: 11, letterSpacing: 3, cursor: 'pointer', borderRadius: 2,
            }}>
              SHOP NOW
            </span>
            <span style={{
              padding: '14px 36px', border: '1px solid rgba(220,201,155,0.3)', color: '#dcc99b',
              fontSize: 11, letterSpacing: 3, cursor: 'pointer', borderRadius: 2,
            }}>
              OUR CRAFT
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Warm cream section with categories */}
      <section style={{ background: '#f5f0e6', padding: '100px 48px', color: '#2a2218' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontFamily: "'Forum', serif", fontSize: 36, letterSpacing: 5, fontWeight: 400, color: '#2a2218' }}>
              Shop by Category
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { name: 'Chandeliers', count: '42 pieces' },
              { name: 'Gates', count: '120+ designs' },
              { name: 'Railings', count: '80+ designs' },
              { name: 'Bespoke', count: 'Made to order' },
            ].map(c => (
              <div key={c.name} style={{
                background: '#ece6da', borderRadius: 12, overflow: 'hidden',
                cursor: 'pointer', transition: 'transform 0.3s',
              }}>
                <div style={{
                  aspectRatio: '3/4', background: 'linear-gradient(180deg, #ddd5c5 0%, #d0c8b8 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#b0a898', fontSize: 11, letterSpacing: 2,
                }}>
                  [ {c.name.toUpperCase()} IMAGE ]
                </div>
                <div style={{ padding: '20px 20px 24px' }}>
                  <span style={{ fontFamily: "'Forum', serif", fontSize: 18, letterSpacing: 3, color: '#2a2218' }}>{c.name}</span>
                  <p style={{ fontSize: 12, color: '#8a7e6e', marginTop: 6 }}>{c.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Dark section for contrast */}
      <section style={{ background: '#1c1916', padding: '100px 48px', color: '#f5f0e8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: 4, color: '#dcc99b', marginBottom: 12 }}>OUR HERITAGE</p>
            <h2 style={{ fontFamily: "'Forum', serif", fontSize: 40, letterSpacing: 4, fontWeight: 400, lineHeight: 1.2, marginBottom: 24 }}>
              Three generations.<br/>One craft.
            </h2>
            <p style={{ fontSize: 14, color: '#8a8070', lineHeight: 1.8, maxWidth: 440 }}>
              Founded in 1947 by K.L. Khullar with just Rs 10, Delhi Brass has grown into
              India&apos;s most distinguished metalwork atelier. From our factory in Gurgaon,
              we serve the country&apos;s finest homes, hotels, and developers.
            </p>
            <span style={{
              display: 'inline-block', marginTop: 28, fontSize: 11, letterSpacing: 3,
              color: '#dcc99b', borderBottom: '1px solid rgba(220,201,155,0.3)',
              paddingBottom: 4, cursor: 'pointer',
            }}>
              READ OUR STORY &rarr;
            </span>
          </div>
          <div style={{
            aspectRatio: '4/3', background: 'linear-gradient(135deg, #2a2218 0%, #1a1610 100%)',
            borderRadius: 8, border: '1px solid rgba(220,201,155,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#555040', fontSize: 11, letterSpacing: 2,
          }}>
            [ FACTORY / HERITAGE PHOTO ]
          </div>
        </div>
      </section>

      {/* Label */}
      <div style={{
        position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)',
        background: '#dcc99b', color: '#1c1916', padding: '10px 24px',
        borderRadius: 8, fontSize: 12, letterSpacing: 2, zIndex: 200,
        fontWeight: 600,
      }}>
        C — MODERN INDIAN LUXURY
      </div>
    </div>
  );
}
