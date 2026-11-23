"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    setIsError(false);
    setIsSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Your message could not be sent.");
      }

      setStatus(data.message || "Thanks — your message has been sent.");
      form.reset();
    } catch (error) {
      setIsError(true);
      setStatus(
        error instanceof Error ? error.message : "Your message could not be sent.",
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section aria-labelledby="contact-heading" className="container contact-section-theme" id="contact">
      <div className="contact-header-center">
        <span className="contact-badge">🟡 Contact Me</span>
        <h2 id="contact-heading">Let&apos;s Talk for Your<br />Next Projects</h2>
      </div>

      <div className="contact-wrapper-grid">

        {/* LEFT SIDE: Info & Social Card */}
        <div className="contact-info-card">
          <div className="info-block">
            <h3>Address</h3>
            <p>Faisalabad, Satiana Road Pakistan</p>
          </div>

          <div className="info-block">
            <h3>Contact</h3>
            <p>Phone : +92 300 1234567</p>
            <p>Email : zahidabbas@gmail.com</p>
          </div>

          <div className="info-block">
            <h3>Time</h3>
            <p>Monday - Friday : 09:00 - 20:00</p>
            <p>Saturday - Sunday : 10:00 - 18:00</p>
          </div>

          <div className="social-connect-box">
            <h3>Stay Connected</h3>
            <div className="social-icons-row">
              <a href="https://github.com/Zahid3324" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="s-icon">🌐</a>
              <a href="https://linkedin.com/in/zahidabbas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="s-icon">💼</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="s-icon">🐦</a>
              <a href="https://instagram.com/zahid_abbas_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="s-icon">📸</a>
              <a href="https://wa.me/923281443858" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="s-icon">▶️</a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <form className="contact-glass-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Your Name *</label>
              <input
                autoComplete="name"
                maxLength={80}
                minLength={2}
                name="name"
                placeholder="Ex. John Doe"
                required
                className="custom-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email *</label>
              <input
                autoComplete="email"
                maxLength={254}
                name="email"
                placeholder="name@example.com"
                required
                type="email"
                className="custom-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Subject *</label>
            <input
              name="subject"
              placeholder="Portfolio Inquiry"
              required
              minLength={2}
              maxLength={120}
              className="custom-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Your Message *</label>
            <textarea
              maxLength={4000}
              minLength={10}
              name="message"
              placeholder="Enter here..."
              required
              rows={3}
              className="custom-textarea"
            />
          </div>

          <button className="button-yellow-submit" disabled={isSending} type="submit">
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status ? (
            <p
              aria-live="polite"
              className={`form-status ${isError ? "error" : "success"}`}
              role={isError ? "alert" : "status"}
            >
              {status}
            </p>
          ) : null}
        </form>

      </div>
    </section>
  );
}