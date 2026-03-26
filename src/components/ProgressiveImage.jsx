import { useState, useRef } from "react";

/**
 * ProgressiveImage — shows a blur-to-sharp effect as the image loads.
 * Uses a tiny inline placeholder during load.
 */
export default function ProgressiveImage({
  src,
  alt,
  className = "",
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  return (
    <div className="relative overflow-hidden w-full h-full">
      {/* Blurred placeholder background */}
      {!loaded && (
        <div
          className="absolute inset-0 bg-surface-container animate-pulse"
          style={{ backdropFilter: "blur(20px)" }}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-all duration-700 ease-out ${
          loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"
        }`}
        {...props}
      />
    </div>
  );
}
