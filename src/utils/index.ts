
export function formatTime (date: Date): string {
  const h = date.getHours()
  const m = date.getMinutes().toString().padStart(2, '0')
  return h > 12 ? `${h - 12}:${m} pm`
    : h === 12 ? `12:${m} pm`
      : h === 0 ? `12:${m} am`
        : `${h}:${m} am`
}
