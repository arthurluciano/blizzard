export function getUserOS() {
  if (window.navigator.userAgent.indexOf('Windows') !== -1) return 'Windows'
  if (window.navigator.userAgent.indexOf('MacOS') !== -1) return 'MacOS'
  if (window.navigator.userAgent.indexOf('Linux') !== -1) return 'Linux'

  return 'Unknown'
}
