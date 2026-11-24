export function Spinner() {
  return (
    <div className="spinner" style={{
      width: '32px', height: '32px',
      border: '3px solid var(--color-border)',
      borderTopColor: 'var(--color-text-muted)',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
      margin: '2rem auto'
    }} />
  );
}