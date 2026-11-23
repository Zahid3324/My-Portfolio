"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { FaWhatsapp } from "react-icons/fa";

const replies: Record<string, { answer: string; href: string; link: string }> = {
  project: {
    answer: "Take a look at the project previews and the technologies behind them.",
    href: "/projects",
    link: "Browse projects",
  },
  skills: {
    answer: "I work across frontend, backend, and the data layer.",
    href: "/skills",
    link: "Explore my skills",
  },
  contact: {
    answer: "The fastest way to start is to send a note through the contact page.",
    href: "/contact",
    link: "Get in touch",
  },
};

function getReply(message: string) {
  const text = message.toLowerCase();

  if (text.includes("project") || text.includes("work")) {
    return replies.project;
  }
  if (text.includes("skill") || text.includes("technology") || text.includes("stack")) {
    return replies.skills;
  }
  if (text.includes("about") || text.includes("experience")) {
    return {
      answer: "Learn more about Zahid's background, approach, and experience.",
      href: "/about",
      link: "About Zahid",
    };
  }

  return replies.contact;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [submittedQuestion, setSubmittedQuestion] = useState("");
  const [answer, setAnswer] = useState<(typeof replies)[string] | null>(null);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!question.trim()) {
      return;
    }

    setSubmittedQuestion(question.trim());
    setAnswer(getReply(question));
    setQuestion("");
  }

  function handleQuickReply(key: keyof typeof replies) {
    setSubmittedQuestion(
      key === "project"
        ? "I’d like to see the projects."
        : key === "skills"
          ? "What technologies does Zahid use?"
          : "I’d like to get in touch.",
    );
    setAnswer(replies[key]);
  }

  return (
    <aside aria-label="Portfolio chat" className="chat-widget">
      {isOpen ? (
        <section
          aria-labelledby="chat-title"
          aria-modal="false"
          className="chat-panel"
          role="dialog"
        >
          <header className="chat-header">
            <span aria-hidden="true" className="chat-avatar">ZA</span>
            <span className="chat-header-copy">
              <strong id="chat-title">Chat with Zahid Abbas</strong>
              <span><i /> Portfolio assistant</span>
            </span>
            <button
              aria-label="Close chat"
              className="chat-close"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              ×
            </button>
          </header>
          <div aria-live="polite" className="chat-messages">
            <div className="chat-bubble">
              <span>Hello! 👋</span>
              <span>What would you like to know?</span>
              <time>Just now</time>
            </div>
            {answer ? (
              <>
                <div className="chat-user-bubble">{submittedQuestion}</div>
                <div className="chat-bubble">
                  <span>{answer.answer}</span>
                  <Link className="chat-answer-link inline-flex items-center gap-1" href={answer.href}>
                    <span>{answer.link}</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </Link>
                  {whatsappNumber ? (
                    <a
                      className="chat-answer-link inline-flex items-center gap-1"
                      href={`https://wa.me/${whatsappNumber}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>Continue on WhatsApp</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  ) : null}
                  <time>Just now</time>
                </div>
              </>
            ) : (
              <>
                <div className="chat-quick-replies">
                  <button onClick={() => handleQuickReply("project")} type="button">See projects</button>
                  <button onClick={() => handleQuickReply("skills")} type="button">Skills & stack</button>
                  <button onClick={() => handleQuickReply("contact")} type="button">Contact Zahid</button>
                </div>
                {whatsappNumber ? (
                  <a
                    className="chat-answer-link inline-flex items-center gap-1"
                    href={`https://wa.me/${whatsappNumber}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>Message on WhatsApp</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                ) : null}
              </>
            )}
          </div>
          <form className="chat-compose" onSubmit={handleSubmit}>
            <input
              aria-label="Ask the portfolio assistant"
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask a quick question..."
              value={question}
            />
            <button aria-label="Send message" disabled={!question.trim()} type="submit">
              ↑
            </button>
          </form>
        </section>
      ) : (
        <span aria-hidden="true" className="chat-teaser">Say hello 👋</span>
      )}
      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close portfolio chat" : "Open portfolio chat"}
        className="chat-toggle"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        {isOpen ? (
          <span aria-hidden="true" className="chat-toggle-close">×</span>
        ) : (
          <FaWhatsapp className="chat-whatsapp-icon" size={29} aria-hidden="true" />
        )}
        {!isOpen ? <span className="chat-notification" aria-hidden="true">1</span> : null}
      </button>
    </aside>
  );
}
