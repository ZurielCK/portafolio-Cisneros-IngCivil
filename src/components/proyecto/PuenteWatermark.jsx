/** Ilustración lineal de un puente, usada como watermark decorativo. */
export default function PuenteWatermark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {/* Tablero */}
      <line x1="0" y1="140" x2="320" y2="140" />
      {/* Torres */}
      <line x1="90" y1="140" x2="90" y2="40" />
      <line x1="230" y1="140" x2="230" y2="40" />
      {/* Cables principales (catenarias aproximadas) */}
      <path d="M0 110 Q90 40 160 90 Q230 40 320 110" />
      {/* Tirantes */}
      <line x1="120" y1="140" x2="90" y2="55" />
      <line x1="150" y1="140" x2="90" y2="55" />
      <line x1="170" y1="140" x2="230" y2="55" />
      <line x1="200" y1="140" x2="230" y2="55" />
      <line x1="40" y1="140" x2="90" y2="50" />
      <line x1="280" y1="140" x2="230" y2="50" />
      {/* Pilotes */}
      <line x1="40" y1="140" x2="40" y2="175" />
      <line x1="160" y1="140" x2="160" y2="175" />
      <line x1="280" y1="140" x2="280" y2="175" />
    </svg>
  );
}
