import React from "react";

interface OrnamentProps {
  tone?: "dark" | "light";
  className?: string;
}

/** Hairline - small diamond - hairline divider. `dark` sits on wine, `light` on paper. */
export const Ornament: React.FC<OrnamentProps> = ({ tone = "dark", className = "" }) => {
  const color = tone === "dark" ? "bg-brass-400" : "bg-brass-600";

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className={`h-px w-12 ${color} opacity-60`} />
      <span className={`w-1.5 h-1.5 rotate-45 ${color}`} />
      <span className={`h-px w-12 ${color} opacity-60`} />
    </div>
  );
};
