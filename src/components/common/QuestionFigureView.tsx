import React from 'react';
import type { QuestionFigure } from '../../types/chemistry';
import { formatChemText } from './ChemFormula';

/**
 * Renders a question-specific figure (şekilli soru): a data graph, a data table or an
 * apparatus drawing. All colors come from theme tokens so the figure works in light and dark mode.
 * Text inside SVG uses Unicode sub/superscripts (H₂O, Fe³⁺) since SVG text is not formatted.
 */

const TONES = ['var(--accent)', 'var(--gold)', 'var(--violet)', 'var(--bad)', 'var(--ok)'];

type Tick = number | { v: number; label: string };
const tickV = (t: Tick) => (typeof t === 'number' ? t : t.v);
const tickL = (t: Tick) => (typeof t === 'number' ? String(t) : t.label);

function GraphFigure({ fig }: { fig: Extract<QuestionFigure, { kind: 'graph' }> }) {
  const W = 360;
  const H = 250;
  const left = fig.yTicks?.length ? 46 : 30;
  const right = 16;
  const top = 18;
  const bottom = fig.xTicks?.length ? 44 : 30;
  const pw = W - left - right;
  const ph = H - top - bottom;
  const xMin = fig.xMin ?? 0;
  const yMin = fig.yMin ?? 0;
  const X = (v: number) => left + ((v - xMin) / (fig.xMax - xMin)) * pw;
  const Y = (v: number) => top + ph - ((v - yMin) / (fig.yMax - yMin)) * ph;
  const r = (n: number) => Math.round(n * 10) / 10;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} direction="ltr" className="qf-svg" role="img" aria-label={`${fig.yLabel} / ${fig.xLabel}`}>
      {fig.xBands?.map((b, i) => (
        <g key={`b${i}`}>
          <rect x={r(X(b.from))} y={top} width={r(X(b.to) - X(b.from))} height={ph} className={i % 2 ? 'qf-band2' : 'qf-band'} />
          <text x={r((X(b.from) + X(b.to)) / 2)} y={top + 13} textAnchor="middle" className="qf-t qf-t-strong">{b.label}</text>
        </g>
      ))}
      {/* axes */}
      <line x1={left} y1={top + ph} x2={left + pw + 6} y2={top + ph} className="qf-axis" />
      <line x1={left} y1={top + ph} x2={left} y2={top - 6} className="qf-axis" />
      <polygon points={`${left + pw + 10},${top + ph} ${left + pw + 3},${top + ph - 3.5} ${left + pw + 3},${top + ph + 3.5}`} className="qf-axis-head" />
      <polygon points={`${left},${top - 10} ${left - 3.5},${top - 3} ${left + 3.5},${top - 3}`} className="qf-axis-head" />
      {fig.xTicks?.map((t, i) => (
        <g key={`xt${i}`}>
          <line x1={r(X(tickV(t)))} y1={top + ph} x2={r(X(tickV(t)))} y2={top + ph + 4} className="qf-axis" />
          <text x={r(X(tickV(t)))} y={top + ph + 16} textAnchor="middle" className="qf-t">{tickL(t)}</text>
        </g>
      ))}
      {fig.yTicks?.map((t, i) => (
        <g key={`yt${i}`}>
          <line x1={left - 4} y1={r(Y(tickV(t)))} x2={left} y2={r(Y(tickV(t)))} className="qf-axis" />
          <line x1={left} y1={r(Y(tickV(t)))} x2={left + pw} y2={r(Y(tickV(t)))} className="qf-grid" />
          <text x={left - 7} y={r(Y(tickV(t)) + 4)} textAnchor="end" className="qf-t">{tickL(t)}</text>
        </g>
      ))}
      <text x={left + pw} y={H - 6} textAnchor="end" className="qf-t qf-t-axis">{fig.xLabel}</text>
      <text x={left + 4} y={top - 4} textAnchor="start" className="qf-t qf-t-axis" dx={8}>{fig.yLabel}</text>
      {fig.series.map((sr, i) => {
        const color = TONES[(sr.tone ?? i) % TONES.length];
        const pts = sr.points.map(([x, y]) => `${r(X(x))},${r(Y(y))}`).join(' ');
        const last = sr.points[sr.points.length - 1];
        return (
          <g key={`s${i}`}>
            <polyline points={pts} fill="none" stroke={color} strokeWidth={2.6} strokeLinejoin="round" strokeLinecap="round" strokeDasharray={sr.dashed ? '6 5' : undefined} />
            {sr.label && last && (
              <text x={r(Math.min(X(last[0]) + 4, W - 4))} y={r(Y(last[1]) - 6)} textAnchor={X(last[0]) > W - 60 ? 'end' : 'start'} className="qf-t qf-t-strong" style={{ fill: color }}>
                {sr.label}
              </text>
            )}
          </g>
        );
      })}
      {fig.markers?.map((m, i) => (
        <g key={`m${i}`}>
          {m.guides && (
            <>
              <line x1={left} y1={r(Y(m.y))} x2={r(X(m.x))} y2={r(Y(m.y))} className="qf-guide" />
              <line x1={r(X(m.x))} y1={top + ph} x2={r(X(m.x))} y2={r(Y(m.y))} className="qf-guide" />
            </>
          )}
          <circle cx={r(X(m.x))} cy={r(Y(m.y))} r={3.4} className="qf-dot" />
          <text x={r(X(m.x) + 6)} y={r(Y(m.y) - 6)} className="qf-t qf-t-strong">{m.label}</text>
        </g>
      ))}
    </svg>
  );
}

function TableFigure({ fig }: { fig: Extract<QuestionFigure, { kind: 'table' }> }) {
  return (
    <div className="qf-table-wrap">
      <table className="qf-table">
        <thead>
          <tr>
            {fig.header.map((h, i) => (
              <th key={i} scope="col">{formatChemText(h)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fig.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((c, ci) =>
                ci === 0 ? <th key={ci} scope="row">{formatChemText(c)}</th> : <td key={ci}>{formatChemText(c)}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const QuestionFigureView: React.FC<{ figure: QuestionFigure; className?: string }> = ({ figure, className = '' }) => (
  <figure className={`qf ${className}`}>
    {figure.kind === 'graph' && <GraphFigure fig={figure} />}
    {figure.kind === 'table' && <TableFigure fig={figure} />}
    {figure.kind === 'svg' && (
      <svg
        viewBox={`0 0 ${figure.width} ${figure.height}`}
        className="qf-svg"
        direction="ltr"
        role="img"
        // Authored, static, language-neutral markup from the audited question bank (no user input).
        dangerouslySetInnerHTML={{ __html: figure.markup }}
      />
    )}
    {figure.caption && <figcaption className="qf-cap" dir="auto">{formatChemText(figure.caption)}</figcaption>}
  </figure>
);
