export function formatDuration(start: Date, end: Date): string {
  if (end < start) [start, end] = [end, start];

  let years = end.getUTCFullYear() - start.getUTCFullYear();
  let months = end.getUTCMonth() - start.getUTCMonth();
  let days = end.getUTCDate() - start.getUTCDate();
  let hours = end.getUTCHours() - start.getUTCHours();
  let minutes = end.getUTCMinutes() - start.getUTCMinutes();
  let seconds = end.getUTCSeconds() - start.getUTCSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const prevMonth = new Date(
      Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), 0),
    );
    days += prevMonth.getUTCDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  const parts = [];
  if (years) parts.push(`${years} year${years !== 1 ? "s" : ""}`);
  if (months) parts.push(`${months} month${months !== 1 ? "s" : ""}`);
  if (days) parts.push(`${days} day${days !== 1 ? "s" : ""}`);
  if (hours) parts.push(`${hours} hour${hours !== 1 ? "s" : ""}`);
  if (minutes) parts.push(`${minutes} minute${minutes !== 1 ? "s" : ""}`);
  if (seconds || parts.length === 0)
    parts.push(`and ${seconds} second${seconds !== 1 ? "s" : ""}`);

  return parts.join(", ");
}
