import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';

// Shared dialog: Escape closes, Tab stays inside, focus returns to the opener,
// and clicking a #hash link inside closes it (so it never lingers over a new page).
export function Modal({ onClose, label, className = "", closeOnHashLink = false, children }) {
  const dialog = useRef(null);
  const closeRef = useRef(onClose);
  useEffect(() => { closeRef.current = onClose; });

  useEffect(() => {
    const opener = document.activeElement;
    const el = dialog.current;
    el?.focus({ preventScroll: true });
    const onKey = (e) => {
      if (e.key === "Escape") { e.preventDefault(); closeRef.current(); return; }
      if (e.key !== "Tab" || !el) return;
      const items = [...el.querySelectorAll(FOCUSABLE)].filter((n) => n.offsetParent !== null);
      if (!items.length) { e.preventDefault(); return; }
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === el)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); opener?.focus?.({ preventScroll: true }); };
  }, []);

  return createPortal(
    <div className="viewport-modal-backdrop" onMouseDown={onClose}>
      <div
        ref={dialog}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className={className}
        onMouseDown={(e) => e.stopPropagation()}
        onClick={(e) => { if (closeOnHashLink && e.target.closest?.('a[href^="#"]')) onClose(); }}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
