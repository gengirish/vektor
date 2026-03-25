export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer square */}
      <rect
        x="2"
        y="2"
        width="36"
        height="36"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Rotated inner square */}
      <rect
        x="20"
        y="5.86"
        width="20"
        height="20"
        transform="rotate(45 20 5.86)"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.6"
      />
      {/* Center dot */}
      <circle cx="20" cy="20" r="2.5" fill="#E8A820" />
      {/* Vector arrow pointing upper-right */}
      <line
        x1="20"
        y1="20"
        x2="33"
        y2="7"
        stroke="#E8A820"
        strokeWidth="1.5"
      />
      <polyline
        points="28,7 33,7 33,12"
        stroke="#E8A820"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
