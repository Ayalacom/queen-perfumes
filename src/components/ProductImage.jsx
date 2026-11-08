import { useState } from 'react'

// Показывает фото. Если файла нет, показывает простой контур флакона.
export default function ProductImage({ src, alt = '', className = '' }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`ph ${className}`}>
      {!failed && src ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <svg viewBox="0 0 80 140" aria-hidden="true">
          <rect x="31" y="6" width="18" height="24" rx="2" />
          <rect x="36" y="30" width="8" height="8" />
          <rect x="8" y="38" width="64" height="96" rx="4" />
          <rect x="26" y="74" width="28" height="32" />
        </svg>
      )}
    </div>
  )
}
