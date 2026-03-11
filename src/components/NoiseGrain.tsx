export default function NoiseGrain() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9990,
        overflow: 'hidden',
        opacity: 0.80,
        mixBlendMode: 'multiply',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-200%',
          right: '-200%',
          bottom: '-200%',
          left: '-200%',
          backgroundImage: "url('https://img.freepik.com/fotos-gratis/textura-de-papelao_1194-5419.jpg?semt=ais_hybrid&w=740&q=80')",
          animation: 'grain 8s steps(10) infinite',
        }}
      />
      <style>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
      `}</style>
    </div>
  );
}