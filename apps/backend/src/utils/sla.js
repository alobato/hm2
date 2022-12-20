export function clamp(value, lower, upper) {
  return Math.min(Math.max(lower, value), upper)
}

export function between(value, start, end) {
  return (value >= start && value <= end)
}

export function intersected(range, interval) {
  return between(interval[0], range[0], range[1]) || between(interval[1], range[0], range[1])
}

export function intersection(range, interval) {
  if (!intersected(range, interval)) {
    return 0
  }
  const clampedStart = clamp(interval[0], range[0], range[1])
  const clampedEnd = (interval[1] <= range[1]) ? clamp(interval[1], range[0], range[1]) : Math.max(interval[1], range[1])
  const diff = clampedEnd - clampedStart
  return diff
}

export function endRange(range, intervals) {
  for (const interval of intervals) {
    const ints = intersection(range, interval)
    if (ints > 0) {
      range[1] = range[1] + ints
    }
  }
  return range[1]
}

export function getTime(date) {
  return (new Date(date)).getTime() / 1000 / 1000
}

export function getMomentTime(date) {
  return date.unix() / 1000
}

