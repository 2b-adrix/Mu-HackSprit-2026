import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";
import mewarLogo from "./assets/mewar-university-logo.png";
import hacksphereLogo from "./assets/mu-hacksphere-logo.jpg";
import {
  problemStatements,
  DOMAINS,
  DOMAIN_META,
  type ProblemStatement,
} from "./data/problemStatements";

/* ─── tiny helpers ───────────────────────────────────────────────── */
const hexToRgba = (hex: string | undefined, alpha: number) => {
  if (!hex) return `rgba(124,58,237,${alpha})`;
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16) || 124;
  const g = parseInt(cleanHex.substring(2, 4), 16) || 58;
  const b = parseInt(cleanHex.substring(4, 6), 16) || 237;
  return `rgba(${r},${g},${b},${alpha})`;
};

/* ─── PsCard Component ────────────────────────────────────────────── */
function PsCard({
  ps,
  index,
  isBookmarked,
  onToggleBookmark,
  onOpenModal,
  onShowToast,
}: {
  ps: ProblemStatement;
  index: number;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpenModal: (ps: ProblemStatement) => void;
  onShowToast: (msg: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const meta = DOMAIN_META[ps.domain] ?? {
    emoji: "💡",
    color: "#00D4FF",
    light: "#081028",
    border: "#00D4FF44",
    gradient: "linear-gradient(135deg,#00D4FF,#7C3AED)",
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = `[${ps.id}] ${ps.title}\nDomain: ${ps.domain}\nStatement: ${ps.statement}\nEst. Build: ${ps.estimatedHours}\nMVP Tip: ${ps.feasibilityTip}\nTech Stack: ${ps.suggestedStack.join(", ")}`;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        onShowToast(`Copied ${ps.id} to clipboard! 📋`);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        onShowToast(`Copied ${ps.id} to clipboard! 📋`);
      }
    } catch {
      onShowToast(`Copied ${ps.id} summary! 📋`);
    }
  };

  return (
    <motion.div
      className="ps-card"
      style={{ "--card-color": meta.color } as React.CSSProperties}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.035, 0.3) }}
      layout
    >
      {/* Accent Top/Side Stripe */}
      <div
        className="ps-card__stripe"
        style={{
          background: meta.gradient,
        }}
      />

      <div className="ps-card__body">
        {/* Head row */}
        <div className="ps-card__head">
          <span
            className="ps-card__num"
            style={{
              background: meta.gradient,
            }}
          >
            {ps.id}
          </span>

          <span
            className="ps-card__domain-badge"
            style={{
              color: meta.color,
              borderColor: hexToRgba(meta.color, 0.35),
              background: hexToRgba(meta.color, 0.1),
            }}
          >
            <span>{meta.emoji}</span>
            {ps.domain}
          </span>

          {/* 8-Hour Feasibility Tag */}
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              color: "#34D399",
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              padding: "2px 8px",
              borderRadius: "999px",
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <span>⚡</span> 8h Sprint Ready
          </span>

          {/* Action buttons on the right */}
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "5px" }}>
            <button
              onClick={handleCopy}
              title="Copy Summary"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#A8B4D0",
                borderRadius: "6px",
                padding: "3px 6px",
                fontSize: "0.72rem",
                transition: "all 0.2s",
              }}
            >
              📋
            </button>
            <button
              onClick={() => onToggleBookmark(ps.id)}
              title={isBookmarked ? "Remove Bookmark" : "Bookmark this problem"}
              style={{
                background: isBookmarked ? "rgba(245, 158, 11, 0.2)" : "rgba(255,255,255,0.06)",
                border: isBookmarked
                  ? "1px solid rgba(245, 158, 11, 0.6)"
                  : "1px solid rgba(255,255,255,0.12)",
                color: isBookmarked ? "#F59E0B" : "#A8B4D0",
                borderRadius: "6px",
                padding: "3px 7px",
                fontSize: "0.82rem",
                transition: "all 0.2s",
              }}
            >
              {isBookmarked ? "★" : "☆"}
            </button>
          </div>
        </div>

        {/* Title */}
        <h3 className="ps-card__title">{ps.title}</h3>

        {/* Short Statement */}
        <p className="ps-card__statement">{ps.statement}</p>

        {/* 8-Hour Strategy Quick Callout */}
        <div
          style={{
            background: "rgba(13, 21, 48, 0.7)",
            border: `1px solid ${hexToRgba(meta.color, 0.25)}`,
            borderLeft: `3px solid ${meta.color}`,
            borderRadius: "8px",
            padding: "8px 12px",
            marginBottom: "10px",
            fontSize: "0.78rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "3px" }}>
            <span style={{ fontWeight: 700, color: meta.color, display: "flex", alignItems: "center", gap: "4px" }}>
              ⚡ 8-Hour MVP Strategy
            </span>
            <span style={{ color: "#34D399", fontWeight: 700, fontSize: "0.75rem" }}>
              ⏱️ {ps.estimatedHours}
            </span>
          </div>
          <p style={{ color: "#CBD5E1", lineHeight: 1.45, margin: 0 }}>
            {ps.feasibilityTip}
          </p>
        </div>

        {/* Suggested Tech Stack Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "10px" }}>
          {ps.suggestedStack.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: "0.66rem",
                fontWeight: 600,
                color: "#94A3B8",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
                padding: "2px 6px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable Deep Context */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              className="ps-card__expand-block"
              key="expand"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="ps-card__desc-inner">
                <div className="ps-card__desc-label">
                  <span>📋</span> Detailed Scope &amp; Context
                </div>
                <p className="ps-card__desc">{ps.description}</p>

                {ps.organization && (
                  <div className="ps-card__sdg-block" style={{ marginBottom: "8px" }}>
                    <span className="ps-card__sdg-label">Problem Owner / Domain Partner</span>
                    <p className="ps-card__sdg-text">🏛️ {ps.organization}</p>
                  </div>
                )}

                <div
                  className="ps-card__sdg-block"
                  style={{
                    borderColor: "rgba(16, 185, 129, 0.25)",
                    background: "rgba(16, 185, 129, 0.06)",
                  }}
                >
                  <span className="ps-card__sdg-label" style={{ color: "#34D399" }}>
                    Sustainable Development Goals (SDG)
                  </span>
                  <p className="ps-card__sdg-text" style={{ color: "#A7F3D0" }}>
                    🎯 {ps.sdg}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="ps-card__footer">
          <button
            onClick={() => onOpenModal(ps)}
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#38BDF8",
              background: "transparent",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            🔍 Deep Dive Modal
          </button>

          <button
            id={`expand-btn-${ps.id}`}
            className="ps-card__expand-btn"
            onClick={() => setExpanded((v) => !v)}
            style={{
              color: meta.color,
              borderColor: hexToRgba(meta.color, 0.35),
              background: hexToRgba(meta.color, 0.07),
            }}
          >
            {expanded ? "▲ Collapse" : "▼ Details"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main App Component ──────────────────────────────────────────── */
export default function App() {
  const [selectedDomain, setSelectedDomain] = useState<string>("all");
  const [onlySaved, setOnlySaved] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalPs, setActiveModalPs] = useState<ProblemStatement | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("mu_hacksphere_bookmarks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem("mu_hacksphere_bookmarks", JSON.stringify(bookmarkedIds));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarkedIds]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalPs(null);
      }
    };
    if (activeModalPs) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeModalPs]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const exists = prev.includes(id);
      if (exists) {
        showToast(`Removed #${id} from bookmarks`);
        return prev.filter((item) => item !== id);
      } else {
        showToast(`Saved #${id} to bookmarks ⭐`);
        return [...prev, id];
      }
    });
  };

  /* ─── Filter Logic ───────────────────────────────────────────────── */
  const filteredList = useMemo(() => {
    return problemStatements.filter((ps) => {
      // Domain filter
      if (selectedDomain !== "all" && ps.domain !== selectedDomain) {
        return false;
      }

      // Bookmark filter
      if (onlySaved && !bookmarkedIds.includes(ps.id)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesId = ps.id.toLowerCase().includes(q);
        const matchesTitle = ps.title.toLowerCase().includes(q);
        const matchesStatement = ps.statement.toLowerCase().includes(q);
        const matchesDesc = ps.description.toLowerCase().includes(q);
        const matchesDomain = ps.domain.toLowerCase().includes(q);
        const matchesStack = ps.suggestedStack.some((tech) => tech.toLowerCase().includes(q));
        const matchesSdg = ps.sdg.toLowerCase().includes(q);
        const matchesOrg = ps.organization?.toLowerCase().includes(q);

        if (
          !matchesId &&
          !matchesTitle &&
          !matchesStatement &&
          !matchesDesc &&
          !matchesDomain &&
          !matchesStack &&
          !matchesSdg &&
          !matchesOrg
        ) {
          return false;
        }
      }

      return true;
    });
  }, [selectedDomain, onlySaved, searchQuery, bookmarkedIds]);

  return (
    <div className="app-root">
      {/* Background Interactive Particle Canvas */}
      <ParticleNetwork />

      {/* Ambient background glow orbs */}
      <div className="bg-glow bg-glow--1" />
      <div className="bg-glow bg-glow--2" />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              position: "fixed",
              bottom: "28px",
              right: "28px",
              zIndex: 9999,
              background: "rgba(8, 13, 31, 0.95)",
              border: "1px solid rgba(0, 212, 255, 0.4)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(0,212,255,0.2)",
              color: "#F0F4FF",
              padding: "10px 18px",
              borderRadius: "10px",
              fontSize: "0.85rem",
              fontWeight: 600,
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="page-wrap">
        {/* ─── HERO SECTION ────────────────────────────────────────── */}
        <header className="hero">
          {/* Institutional Branding Logos */}
          <motion.div
            className="hero__logos"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={mewarLogo}
              alt="Mewar University"
              className="hero__logo"
            />
            <div className="hero__logo-sep" />
            <img
              src={hacksphereLogo}
              alt="MU HackSphere 2026"
              className="hero__logo"
            />
          </motion.div>

          {/* Event Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="hero__event-badge">
              MU HackSphere 2026 • 8-Hour Sprint Edition
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="hero__title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            MU HackSphere 2026
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Mewar University • <span className="hero__sub-accent">Curated 8-Hour Sprint Problem Statements</span>
          </motion.p>

          {/* Organiser Credit Line */}
          <motion.p
            className="hero__org"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Organized by <span>Department of Computer Science &amp; Engineering</span>, Mewar University, Gangrar, Chittorgarh, Rajasthan
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-v" style={{ color: "#34D399" }}>
                ⚡ {problemStatements.length}
              </span>
              <span className="hero__stat-l">8-Hour Feasible</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-v">15</span>
              <span className="hero__stat-l">Domains</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-v">100%</span>
              <span className="hero__stat-l">Build Ready</span>
            </div>
          </motion.div>
        </header>

        {/* ─── FILTERS & SEARCH SECTION ────────────────────────────── */}
        <section className="domain-bar-section">
          {/* Search Input */}
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 8-hour problems by title, keyword, ID (e.g. HACK-W3-02), tech stack (React, Python, Solidity)..."
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => setSearchQuery("")}
                title="Clear Search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Saved Bookmarks Toggle */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
              paddingBottom: "12px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span style={{ fontSize: "0.76rem", fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Filter by Domain &amp; Bookmarks:
            </span>

            <button
              onClick={() => setOnlySaved((v) => !v)}
              className="dtab"
              style={{
                fontSize: "0.74rem",
                padding: "6px 14px",
                background: onlySaved ? "#F59E0B" : "rgba(255, 255, 255, 0.05)",
                color: onlySaved ? "#020510" : "#F59E0B",
                border: "1.5px solid rgba(245, 158, 11, 0.4)",
                fontWeight: 700,
              }}
            >
              ★ Saved Bookmarks ({bookmarkedIds.length})
            </button>
          </div>

          {/* Domain Tabs */}
          <div className="domain-scroll-outer">
            <div className="domain-scroll">
              <button
                className={`dtab ${selectedDomain === "all" ? "dtab--all-active" : "dtab--all"}`}
                onClick={() => setSelectedDomain("all")}
              >
                <span className="dtab__icon">🌐</span>
                <span className="dtab__label">All Domains</span>
                <span
                  className="dtab__cnt"
                  style={{
                    background: selectedDomain === "all" ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.1)",
                  }}
                >
                  {problemStatements.length}
                </span>
              </button>

              {DOMAINS.map((domain) => {
                const meta = DOMAIN_META[domain];
                const isSelected = selectedDomain === domain;
                const domainCount = problemStatements.filter((p) => p.domain === domain).length;

                return (
                  <button
                    key={domain}
                    className={`dtab ${isSelected ? "dtab--active" : ""}`}
                    onClick={() => setSelectedDomain(domain)}
                    style={{
                      borderColor: isSelected ? meta.color : "rgba(255,255,255,0.08)",
                      background: isSelected ? meta.color : "rgba(255,255,255,0.04)",
                      color: isSelected ? "#fff" : "var(--text-2)",
                      boxShadow: isSelected ? `0 4px 18px ${hexToRgba(meta.color, 0.45)}` : "none",
                    }}
                  >
                    <span className="dtab__icon">{meta.emoji}</span>
                    <span className="dtab__label">{domain}</span>
                    <span
                      className="dtab__cnt"
                      style={{
                        background: isSelected ? "rgba(0,0,0,0.25)" : "rgba(255,255,255,0.08)",
                        color: isSelected ? "#fff" : "var(--text-3)",
                      }}
                    >
                      {domainCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toolbar Stats & Clear */}
          <div className="toolbar">
            <div className="toolbar__results">
              Showing <span className="toolbar__n">{filteredList.length}</span> of{" "}
              {problemStatements.length} 8-hour sprint problems
              {selectedDomain !== "all" && (
                <span
                  className="toolbar__tag"
                  style={{
                    color: DOMAIN_META[selectedDomain]?.color ?? "var(--cyan)",
                    borderColor: hexToRgba(DOMAIN_META[selectedDomain]?.color ?? "#00D4FF", 0.3),
                    background: hexToRgba(DOMAIN_META[selectedDomain]?.color ?? "#00D4FF", 0.08),
                  }}
                >
                  {DOMAIN_META[selectedDomain]?.emoji} {selectedDomain}
                  <span
                    className="toolbar__tag-x"
                    onClick={() => setSelectedDomain("all")}
                    style={{ cursor: "pointer" }}
                  >
                    ✕
                  </span>
                </span>
              )}
            </div>

            {(selectedDomain !== "all" || onlySaved || searchQuery) && (
              <div className="toolbar__right">
                <button
                  className="clear-btn"
                  onClick={() => {
                    setSelectedDomain("all");
                    setOnlySaved(false);
                    setSearchQuery("");
                  }}
                >
                  ✕ Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ─── CARDS GRID ─────────────────────────────────────────── */}
        <div className="cards-anchor">
          {filteredList.length === 0 ? (
            <div className="empty">
              <span className="empty__icon">🔍</span>
              <h3 className="empty__title">No 8-hour problem statements found</h3>
              <p className="empty__desc">
                Try searching with different keywords or resetting your active filters.
              </p>
              <button
                className="empty__btn"
                onClick={() => {
                  setSelectedDomain("all");
                  setOnlySaved(false);
                  setSearchQuery("");
                }}
              >
                View All Problems
              </button>
            </div>
          ) : (
            <div className="grid-view">
              {filteredList.map((ps, index) => (
                <PsCard
                  key={ps.id}
                  ps={ps}
                  index={index}
                  isBookmarked={bookmarkedIds.includes(ps.id)}
                  onToggleBookmark={toggleBookmark}
                  onOpenModal={(p) => setActiveModalPs(p)}
                  onShowToast={showToast}
                />
              ))}
            </div>
          )}
        </div>

        {/* ─── SITE FOOTER ────────────────────────────────────────── */}
        <footer className="site-footer">
          <a
            href="https://www.mewaruniversity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__cta"
          >
            Visit Mewar University Official Portal →
          </a>
          <p className="site-footer__copy">
            © 2026 Mewar University, Gangrar, Chittorgarh, Rajasthan. All Rights Reserved. • MU HackSphere 2026
          </p>
        </footer>
      </div>

      {/* ─── DEEP DIVE MODAL ────────────────────────────────────── */}
      <AnimatePresence>
        {activeModalPs && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalPs(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "rgba(2, 5, 16, 0.85)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#080D1F",
                border: "1px solid rgba(0, 212, 255, 0.3)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0,212,255,0.15)",
                borderRadius: "20px",
                maxWidth: "720px",
                width: "100%",
                maxHeight: "88vh",
                overflowY: "auto",
                padding: "28px",
                position: "relative",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalPs(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#CBD5E1",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              {/* Modal Header Badges */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px", flexWrap: "wrap" }}>
                <span
                  style={{
                    background: DOMAIN_META[activeModalPs.domain]?.gradient ?? "linear-gradient(135deg,#00D4FF,#7C3AED)",
                    padding: "3px 9px",
                    borderRadius: "6px",
                    fontWeight: 800,
                    fontSize: "0.8rem",
                    color: "#fff",
                  }}
                >
                  {activeModalPs.id}
                </span>

                <span
                  style={{
                    color: DOMAIN_META[activeModalPs.domain]?.color ?? "#00D4FF",
                    background: hexToRgba(DOMAIN_META[activeModalPs.domain]?.color ?? "#00D4FF", 0.12),
                    border: `1px solid ${hexToRgba(DOMAIN_META[activeModalPs.domain]?.color ?? "#00D4FF", 0.3)}`,
                    padding: "3px 10px",
                    borderRadius: "999px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}
                >
                  {DOMAIN_META[activeModalPs.domain]?.emoji} {activeModalPs.domain}
                </span>

                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#34D399",
                    background: "rgba(16, 185, 129, 0.15)",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                  }}
                >
                  ⚡ 8-Hour Sprint Ready
                </span>
              </div>

              <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#F0F4FF", marginBottom: "14px", lineHeight: 1.3 }}>
                {activeModalPs.title}
              </h2>

              {/* Statement Box */}
              <div
                style={{
                  background: "rgba(13, 21, 48, 0.8)",
                  borderLeft: `4px solid ${DOMAIN_META[activeModalPs.domain]?.color ?? "#00D4FF"}`,
                  padding: "12px 16px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#60A5FA", marginBottom: "4px" }}>
                  CORE PROBLEM STATEMENT
                </div>
                <p style={{ color: "#E2E8F0", fontSize: "0.95rem", lineHeight: 1.55, margin: 0 }}>
                  {activeModalPs.statement}
                </p>
              </div>

              {/* 8-Hour MVP Strategy */}
              <div
                style={{
                  background: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontWeight: 800, color: "#34D399", fontSize: "0.9rem" }}>
                    ⚡ 8-Hour MVP Hackathon Strategy
                  </span>
                  <span style={{ color: "#A7F3D0", fontWeight: 700, fontSize: "0.85rem" }}>
                    Estimated Build: {activeModalPs.estimatedHours}
                  </span>
                </div>
                <p style={{ color: "#CBD5E1", fontSize: "0.88rem", lineHeight: 1.5, margin: 0 }}>
                  {activeModalPs.feasibilityTip}
                </p>
              </div>

              {/* Suggested Tech Stack */}
              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#94A3B8", marginBottom: "8px" }}>
                  RECOMMENDED TECH STACK &amp; TOOLS:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {activeModalPs.suggestedStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "#38BDF8",
                        background: "rgba(56, 189, 248, 0.1)",
                        border: "1px solid rgba(56, 189, 248, 0.3)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Full Description */}
              <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#94A3B8", marginBottom: "8px" }}>
                  FULL BACKGROUND &amp; SPECIFICATION:
                </div>
                <div
                  style={{
                    color: "#CBD5E1",
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                    whiteSpace: "pre-line",
                  }}
                >
                  {activeModalPs.description}
                </div>
              </div>

              {/* Metadata footer */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>
                  🎯 <strong>Target SDG:</strong> {activeModalPs.sdg}
                </div>
                {activeModalPs.organization && (
                  <div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>
                    🏛️ <strong>Organization:</strong> {activeModalPs.organization}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
