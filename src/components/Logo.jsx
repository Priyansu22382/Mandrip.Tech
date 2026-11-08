function LogoMark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="16" fill="#111111" />
      <rect
        x="1"
        y="1"
        width="62"
        height="62"
        rx="15"
        stroke="#B6FF3C"
        strokeOpacity="0.28"
        strokeWidth="1"
      />
      <path
        d="M16 46V20L32 36L48 20V46"
        stroke="#B6FF3C"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Logo({
  className = '',
  showWordmark = true,
  markClassName = 'h-10 w-10',
}) {
  return (
    <a
      href="#home"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="MANDRIP home"
    >
      <span className="relative shrink-0 transition-transform duration-300 group-hover:scale-[1.03]">
        <LogoMark className={markClassName} />
      </span>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-extrabold tracking-[0.2em] text-snow">
            MANDRIP
          </span>
          <span className="mt-1.5 text-[9px] font-semibold tracking-[0.24em] text-mist uppercase">
            Digital Technologies
          </span>
        </span>
      )}
    </a>
  )
}

export { LogoMark }
