// MOCKUP B: Architectural Gallery — Clean, spatial, museum-like, products as art
export default function MockupB() {
  return (
    <div style={{ fontFamily: "'Tenor Sans', sans-serif", margin: 0, padding: 0 }}>
      {/* NAV — ultra minimal */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '24px 60px',
        background: 'rgba(252,250,246,0.9)', backdropFilter: 'blur(20px)',
      }}>
        <span style={{ fontFamily: "'Forum', serif", fontSize: 18, letterSpacing: 8, color: '#1a1a1a' }}>
          DELHI BRASS
        </span>
        <div style={{ display: 'flex', gap: 40 }}>
          {['LIGHTING','GATES','RAILINGS','PROJECTS','ABOUT','TRADE'].map(l => (
            <span key={l} style={{ fontSize: 10, letterSpacing: 3, color: '#999', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
      </nav>

      {/* HERO — Full-bleed image, almost no text, art gallery feel */}
      <section style={{
        height: '100vh', position: 'relative', overflow: 'hidden',
        background: '#f8f5f0',
      }}>
        {/* Center: large product image area */}
        <div style={{
          position: 'absolute', top: '12%', left: '15%', right: '15%', bottom: '12%',
          background: 'linear-gradient(180deg, #eae5dc 0%, #ddd5c8 100%)',
          borderRadius: 4,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#aaa098', fontSize: 12, letterSpacing: 3,
        }}>
          [ FULL-WIDTH CHANDELIER IN ARCHITECTURAL SPACE ]
        </div>

        {/* Minimal text bottom-left */}
        <div style={{
          position: 'absolute', bottom: 60, left: 60, zIndex: 2,
        }}>
          <h1 style={{
            fontFamily: "'Forum', serif", fontSize: 48, fontWeight: 400,
            color: '#1a1a1a', letterSpacing: 6, lineHeight: 1.2, margin: 0,
          }}>
            Light, forged.
          </h1>
          <p style={{ fontSize: 13, color: '#888', letterSpacing: 2, marginTop: 12 }}>
            Bespoke chandeliers &amp; architectural metalwork — since 1947
          </p>
        </div>

        {/* Minimal CTA bottom-right */}
        <div style={{ position: 'absolute', bottom: 60, right: 60 }}>
          <span style={{
            fontSize: 10, letterSpacing: 3, color: '#1a1a1a',
            borderBottom: '1px solid #1a1a1a', paddingBottom: 4, cursor: 'pointer',
          }}>
            VIEW COLLECTIONS &rarr;
          </span>
        </div>
      </section>

      {/* SECTION 2 — Products as gallery pieces */}
      <section style={{ background: '#fcfaf6', padding: '140px 60px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <p style={{ fontSize: 10, letterSpacing: 5, color: '#aaa', marginBottom: 12 }}>COLLECTIONS</p>
            <h2 style={{ fontFamily: "'Forum', serif", fontSize: 32, letterSpacing: 6, fontWeight: 400, color: '#1a1a1a' }}>
              Four disciplines, one craft.
            </h2>
          </div>

          {/* Gallery grid — asymmetric, museum-like */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '300px 300px', gap: 20 }}>
            <div style={{
              gridRow: '1 / 3', background: '#eae5dc', borderRadius: 4,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              padding: 32, position: 'relative',
            }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb0a0', fontSize: 11, letterSpacing: 2 }}>
                [ CHANDELIER — LARGE ]
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span style={{ fontFamily: "'Forum', serif", fontSize: 20, letterSpacing: 4, color: '#2a2218' }}>LIGHTING</span>
                <p style={{ fontSize: 11, color: '#8a7e6e', marginTop: 6 }}>42 pieces</p>
              </div>
            </div>
            <div style={{
              background: '#e4ddd4', borderRadius: 4,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              padding: 24, position: 'relative',
            }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb0a0', fontSize: 11, letterSpacing: 2 }}>
                [ GATE ]
              </div>
              <span style={{ fontFamily: "'Forum', serif", fontSize: 16, letterSpacing: 4, color: '#2a2218', position: 'relative', zIndex: 2 }}>GATES</span>
            </div>
            <div style={{
              background: '#dfd8ce', borderRadius: 4,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              padding: 24, position: 'relative',
            }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb0a0', fontSize: 11, letterSpacing: 2 }}>
                [ RAILING ]
              </div>
              <span style={{ fontFamily: "'Forum', serif", fontSize: 16, letterSpacing: 4, color: '#2a2218', position: 'relative', zIndex: 2 }}>RAILINGS</span>
            </div>
            <div style={{
              gridColumn: '2 / 4', background: '#e8e2d8', borderRadius: 4,
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              padding: 24, position: 'relative',
            }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb0a0', fontSize: 11, letterSpacing: 2 }}>
                [ BESPOKE INSTALLATION ]
              </div>
              <span style={{ fontFamily: "'Forum', serif", fontSize: 16, letterSpacing: 4, color: '#2a2218', position: 'relative', zIndex: 2 }}>BESPOKE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Label */}
      <div style={{
        position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)',
        background: '#1a1a1a', color: '#fcfaf6', padding: '10px 24px',
        borderRadius: 8, fontSize: 12, letterSpacing: 2, zIndex: 200,
      }}>
        B — ARCHITECTURAL GALLERY
      </div>
    </div>
  );
}
