function formatTime(time: string) {
  const [hours, minutes] = time.split(':').map(Number)

  const date = new Date()
  date.setHours(hours, minutes)

  return date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  })
}

export default formatTime
