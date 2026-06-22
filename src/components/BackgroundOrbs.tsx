export function BackgroundOrbs() {
  return (
    <>
      <div
        className="fixed rounded-full blur-[120px] pointer-events-none z-0 opacity-[0.18]"
        style={{ width: 600, height: 600, background: '#7c3aed', top: -200, right: -100 }}
      />
      <div
        className="fixed rounded-full blur-[120px] pointer-events-none z-0 opacity-[0.18]"
        style={{ width: 500, height: 500, background: '#4f46e5', bottom: '10%', left: -150 }}
      />
      <div
        className="fixed rounded-full blur-[120px] pointer-events-none z-0 opacity-[0.18]"
        style={{ width: 300, height: 300, background: '#9333ea', top: '40%', right: '10%' }}
      />
    </>
  )
}
