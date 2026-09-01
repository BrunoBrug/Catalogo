const portfolioUrl = 'https://brunobrug.vercel.app/'

export function getContactUrl(envUrl?: string) {
  return envUrl?.trim() || portfolioUrl
}
