"use client";

import { useState } from "react";

const titles = ["Mr.", "Ms.", "Mrs.", "Dr.", "Ar."];


export default function ContactForm() {
  const [form, setForm] = useState({
    title: "Mr.",
    firstName: "",
    lastName: "",
    company: "",
    phoneCode: "+91",
    phone: "",
    poc: "",
    city: "",
    instagram: "",
    purchases: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzABMX5__V795QhuQG0WKvGmRU_sZJQjxekIg-mcbnX86rmjZzABAvX4fiyLfKxPJgG/exec", {
        method: "POST",
        body: JSON.stringify({ formType: "designer", ...form }),
      });
    } catch (err) {
      console.error("Submit error:", err);
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "#f5f0e6",
    border: "1px solid #d8d0c2",
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "'Tenor Sans', sans-serif",
    color: "#2a2218",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    letterSpacing: 2,
    color: "#8a7e6e",
    marginBottom: 6,
    fontFamily: "'Tenor Sans', sans-serif",
  };

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#fcfaf6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Tenor Sans', sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "#dcc99b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: 28,
            }}
          >
            ✓
          </div>
          <h2
            style={{
              fontFamily: "'Forum', serif",
              fontSize: 28,
              letterSpacing: 4,
              color: "#2a2218",
              fontWeight: 400,
              marginBottom: 12,
            }}
          >
            Contact Saved
          </h2>
          <p style={{ fontSize: 14, color: "#8a7e6e", marginBottom: 32 }}>
            {form.title} {form.firstName} {form.lastName}
            {form.company ? ` — ${form.company}` : ""}
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({
                title: "Mr.",
                firstName: "",
                lastName: "",
                company: "",
                phoneCode: "+91",
                phone: "",
                poc: "",
                city: "",
                instagram: "",
                purchases: "",
                notes: "",
              });
            }}
            style={{
              padding: "12px 32px",
              background: "#1c1916",
              color: "#f5f0e8",
              border: "none",
              borderRadius: 4,
              fontSize: 11,
              letterSpacing: 3,
              cursor: "pointer",
              fontFamily: "'Tenor Sans', sans-serif",
            }}
          >
            ADD ANOTHER
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fcfaf6",
        fontFamily: "'Tenor Sans', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#1c1916",
          padding: "100px 24px 40px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Forum', serif",
            fontSize: 24,
            letterSpacing: 6,
            color: "#f0e8dc",
            fontWeight: 400,
            marginBottom: 8,
          }}
        >
          DELHI BRASS
        </h1>
        <p style={{ fontSize: 12, letterSpacing: 3, color: "#8a8070" }}>
          DESIGNER &amp; CLIENT CONTACT FORM
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "40px 24px 80px",
        }}
      >
        {/* Name */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>NAME *</label>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: 8 }}>
            <select
              value={form.title}
              onChange={(e) => update("title", e.target.value)}
              style={{ ...inputStyle, padding: "12px 8px" }}
            >
              {titles.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="First name"
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              required
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Last name"
              value={form.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              required
              style={inputStyle}
            />
          </div>
        </div>

        {/* Company */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>COMPANY / STUDIO</label>
          <input
            type="text"
            placeholder="e.g. Studio Lotus, Morphogenesis"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Phone */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>PHONE NUMBER *</label>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 8 }}>
            <input
              type="text"
              value={form.phoneCode}
              onChange={(e) => update("phoneCode", e.target.value)}
              style={{ ...inputStyle, textAlign: "center" }}
            />
            <input
              type="tel"
              placeholder="98765 43210"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              required
              style={inputStyle}
            />
          </div>
        </div>

        {/* POC at Delhi Brass */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>POC AT DELHI BRASS</label>
          <input
            type="text"
            placeholder="e.g. Dikshit, Satish"
            value={form.poc}
            onChange={(e) => update("poc", e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* City */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>CITY</label>
          <input
            type="text"
            placeholder="e.g. New Delhi, Gurgaon, Mumbai"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Instagram */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>INSTAGRAM HANDLE</label>
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                color: "#8a7e6e",
                fontSize: 14,
              }}
            >
              @
            </span>
            <input
              type="text"
              placeholder="handle"
              value={form.instagram}
              onChange={(e) => update("instagram", e.target.value)}
              style={{ ...inputStyle, paddingLeft: 32 }}
            />
          </div>
        </div>

        {/* Number of purchases */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>NUMBER OF PURCHASES SO FAR</label>
          <input
            type="number"
            placeholder="0"
            min="0"
            value={form.purchases}
            onChange={(e) => update("purchases", e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Notes */}
        <div style={{ marginBottom: 36 }}>
          <label style={labelStyle}>ADDITIONAL NOTES</label>
          <textarea
            placeholder="Any preferences, project details, budget range, etc."
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            rows={4}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          style={{
            width: "100%",
            padding: "16px",
            background: submitting ? "#8a7e6e" : "#1c1916",
            color: "#f5f0e8",
            border: "none",
            borderRadius: 8,
            fontSize: 12,
            letterSpacing: 3,
            cursor: submitting ? "wait" : "pointer",
            fontFamily: "'Tenor Sans', sans-serif",
            transition: "background 0.2s",
          }}
        >
          {submitting ? "SAVING..." : "SAVE CONTACT"}
        </button>

        <p
          style={{
            textAlign: "center",
            fontSize: 11,
            color: "#aaa098",
            marginTop: 16,
          }}
        >
          Contact saved to our records.
        </p>
      </form>
    </div>
  );
}
