import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies — Refunds, Exchanges & Installation",
};

const WA = "919810088181";

export default function PoliciesPage() {
  return (
    <main style={{ background: "#f8f5f0", minHeight: "100vh" }}>
      <section style={{ paddingTop: "clamp(100px, 12vw, 140px)", paddingBottom: "clamp(60px, 8vw, 100px)", paddingLeft: "clamp(20px, 4vw, 60px)", paddingRight: "clamp(20px, 4vw, 60px)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-forum), serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 400, color: "#1a1a1a", letterSpacing: 4, marginBottom: 48 }}>
            Policies
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: 20, letterSpacing: 3, fontWeight: 400, color: "#2a2218", marginBottom: 12 }}>Made to Order</h2>
              <p style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.8 }}>
                Every Delhi Brass product is handcrafted specifically for you. Because each piece is made to order
                with custom specifications — size, finish, material, and configuration — we are unable to offer
                refunds or exchanges on completed orders.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: 20, letterSpacing: 3, fontWeight: 400, color: "#2a2218", marginBottom: 12 }}>Quality Guarantee</h2>
              <p style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.8 }}>
                Every piece leaves our factory inspected by hand. If your product arrives with any
                manufacturing defect or damage during transit, we will repair or replace it at no cost.
                Please contact us within 7 days of delivery with photographs of the issue.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: 20, letterSpacing: 3, fontWeight: 400, color: "#2a2218", marginBottom: 12 }}>Alterations &amp; Modifications</h2>
              <p style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.8 }}>
                Need a modification after delivery? We&apos;re happy to help alter, resize, or refinish your piece.
                Depending on the scope of work, additional charges may apply. Reach out and we&apos;ll assess
                what&apos;s needed.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: 20, letterSpacing: 3, fontWeight: 400, color: "#2a2218", marginBottom: 12 }}>Installation Support</h2>
              <p style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.8 }}>
                We provide installation support across India. Our team handles delivery and on-site
                installation for all major products. If any issue arises during or after installation,
                our crew will address it promptly — no questions asked.
              </p>
            </div>

            <div style={{ borderTop: "1px solid rgba(180,160,130,0.2)", paddingTop: 32 }}>
              <h2 style={{ fontFamily: "var(--font-forum), serif", fontSize: 20, letterSpacing: 3, fontWeight: 400, color: "#2a2218", marginBottom: 12 }}>Need Help?</h2>
              <p style={{ fontSize: 14, color: "#6a6050", lineHeight: 1.8, marginBottom: 20 }}>
                For any issues with your order, reach out to us directly. We&apos;re always happy to help.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi! I have a question about my order.")}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{ padding: "12px 24px", background: "#1c1916", color: "#f5f0e8", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}
                >
                  WHATSAPP US
                </a>
                <a href="/contact" style={{ padding: "12px 24px", border: "1px solid rgba(42,34,24,0.2)", color: "#2a2218", fontSize: 10, letterSpacing: 3, borderRadius: 2, textDecoration: "none" }}>
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
