export function GradientMesh({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute -left-[15%] top-[5%] h-[60vw] w-[60vw] rounded-full"
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 65%)",
          filter: "blur(80px)",
          opacity: 0.35,
          animation: "drift-a 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute right-[-10%] top-[28%] h-[55vw] w-[55vw] rounded-full"
        style={{
          background: "radial-gradient(circle, #EC4899 0%, transparent 65%)",
          filter: "blur(60px)",
          opacity: 0.25,
          animation: "drift-b 11s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[25%] h-[50vw] w-[50vw] rounded-full"
        style={{
          background: "radial-gradient(circle, #06B6D4 0%, transparent 65%)",
          filter: "blur(50px)",
          opacity: 0.2,
          animation: "drift-c 13s ease-in-out infinite",
        }}
      />
    </div>
  );
}
