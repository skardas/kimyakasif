import React, { useEffect, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';

export interface ConfirmDialogProps {
  title: string;
  body?: string;
  confirmLabel: string;
  cancelLabel: string;
  /** "danger" for destructive actions (red confirm key), "ok" for finishing actions. */
  tone?: 'danger' | 'ok';
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * In-app confirmation sheet (replaces window.confirm so the copy is localized and
 * styled). Escape and a backdrop tap cancel; the cancel key gets initial focus.
 */
export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  body,
  confirmLabel,
  cancelLabel,
  tone = 'danger',
  onConfirm,
  onCancel,
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    cancelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onCancel]);

  return (
    <div className="ky-modal-backdrop ky-confirm-backdrop" role="presentation" onClick={onCancel}>
      <div
        className="ky-card ky-confirm ky-pop"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="ky-confirm-title"
        aria-describedby={body ? 'ky-confirm-body' : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        <span className={`ky-tile ${tone === 'danger' ? 'ky-tile--rose' : 'ky-tile--gold'} ky-confirm__icon`} aria-hidden="true">
          <AlertTriangle size={22} />
        </span>
        <h2 id="ky-confirm-title" className="ky-disp ky-fs-20 ky-confirm__title">
          {title}
        </h2>
        {body && (
          <p id="ky-confirm-body" className="ky-fs-14 ky-confirm__body">
            {body}
          </p>
        )}
        <div className="ky-confirm__actions">
          <button ref={cancelRef} type="button" className="ky-btn ky-btn--quiet" onClick={onCancel}>
            {cancelLabel}
          </button>
          <button
            type="button"
            className={`ky-btn ${tone === 'danger' ? 'ky-btn--danger' : 'ky-btn--ok'}`}
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
