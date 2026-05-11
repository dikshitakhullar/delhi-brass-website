// MOCKUP A: Old-World Atelier — Textured, editorial, warm heritage
export default function MockupA() {
  return (
    <div style={{ fontFamily: "'Tenor Sans', sans-serif", margin: 0, padding: 0 }}>
      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 48px',
        background: 'rgba(245,240,232,0.95)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(180,160,130,0.15)',
      }}>
        <span style={{ fontFamily: "'Forum', serif", fontSize: 20, letterSpacing: 6, color: '#3a3228' }}>
          DELHI BRASS
        </span>
        <div style={{ display: 'flex', gap: 32 }}>
          {['LIGHTING','GATES','RAILINGS','PROJECTS','ABOUT','TRADE'].map(l => (
            <span key={l} style={{ fontSize: 10, letterSpacing: 3, color: '#8a7e6e', cursor: 'pointer' }}>{l}</span>
          ))}
        </div>
      </nav>

      {/* HERO — Full-bleed lifestyle image with editorial overlay */}
      <section style={{
        height: '100vh', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, #2a2218 0%, #1a1610 50%, #0f0c08 100%)',
      }}>
        {/* Simulated warm room photo */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 40% 30%, rgba(220,180,120,0.15) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 60% 60%, rgba(180,140,80,0.08) 0%, transparent 50%)',
        }} />

        {/* Linen texture overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
        }} />

        {/* Content */}
        <div style={{
          position: 'relative', zIndex: 2, height: '100%',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: '0 80px 100px',
        }}>
          <p style={{ fontSize: 11, letterSpacing: 5, color: '#c4a872', marginBottom: 16 }}>
            HERITAGE ATELIER &middot; EST. 1947
          </p>
          <h1 style={{
            fontFamily: "'Forum', serif", fontSize: 72, fontWeight: 400,
            color: '#f5f0e8', letterSpacing: 4, lineHeight: 1.1, maxWidth: 700,
            margin: 0,
          }}>
            Where metal<br />becomes memory.
          </h1>
          <p style={{
            fontSize: 15, color: '#a09585', lineHeight: 1.7,
            maxWidth: 460, marginTop: 24,
          }}>
            Three generations of master craftsmen. Chandeliers, gates &amp; architectural
            metalwork — forged in our Gurgaon factory since 1947.
          </p>
          <div style={{ display: 'flex', gap: 20, marginTop: 32 }}>
            <span style={{
              padding: '14px 36px', background: '#c4a872', color: '#1a1610',
              fontSize: 11, letterSpacing: 3, cursor: 'pointer',
            }}>
              EXPLORE COLLECTIONS
            </span>
            <span style={{
              padding: '14px 36px', border: '1px solid #c4a87255', color: '#c4a872',
              fontSize: 11, letterSpacing: 3, cursor: 'pointer',
            }}>
              OUR STORY
            </span>
          </div>
        </div>

        {/* Chandelier placeholder top-right */}
        <div style={{
          position: 'absolute', top: '10%', right: '8%', width: 400, height: 500,
          border: '1px solid rgba(196,168,114,0.1)', borderRadius: 4,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#555040', fontSize: 11, letterSpacing: 2,
          background: 'linear-gradient(180deg, rgba(196,168,114,0.05) 0%, transparent 100%)',
        }}>
          [ CHANDELIER PHOTO ]
        </div>
      </section>

      {/* SECTION 2 — Warm cream editorial */}
      <section style={{
        background: '#f5f0e8', padding: '120px 80px', color: '#3a3228',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: 4, color: '#8a7e6e', marginBottom: 12 }}>SHOP BY CATEGORY</p>
            <h2 style={{ fontFamily: "'Forum', serif", fontSize: 36, letterSpacing: 4, fontWeight: 400, marginBottom: 24, color: '#2a2218' }}>
              Crafted for spaces<br />that deserve more.
            </h2>
            <p style={{ fontSize: 14, color: '#6a6050', lineHeight: 1.8, maxWidth: 400 }}>
              From statement chandeliers to hand-forged gates — every piece carries the weight of seven decades.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { name: 'LIGHTING', desc: 'Chandeliers & pendants' },
              { name: 'GATES', desc: 'Entry & garden gates' },
              { name: 'RAILINGS', desc: 'Staircases & balconies' },
              { name: 'BESPOKE', desc: 'Custom metalwork' },
            ].map(c => (
              <div key={c.name} style={{
                aspectRatio: '1', background: '#eae4d8', border: '1px solid #d8d0c2',
                borderRadius: 8, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                transition: 'all 0.3s',
              }}>
                <span style={{ fontFamily: "'Forum', serif", fontSize: 14, letterSpacing: 4, color: '#3a3228' }}>{c.name}</span>
                <span style={{ fontSize: 11, color: '#8a7e6e', marginTop: 8 }}>{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Label */}
      <div style={{
        position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)',
        background: '#3a3228', color: '#f5f0e8', padding: '10px 24px',
        borderRadius: 8, fontSize: 12, letterSpacing: 2, zIndex: 200,
      }}>
        A — OLD-WORLD ATELIER
      </div>
    </div>
  );
}
