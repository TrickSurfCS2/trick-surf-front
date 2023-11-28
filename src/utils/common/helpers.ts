import { AUTH_KEY } from './constant'

export const isWindowExists = () => typeof window !== 'undefined'

export function randomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min
}

export function getUrlParam(paramName: string): string | null {
  return new URLSearchParams(window.location.search).get(paramName)
}

export function getBearerToken() {
  return `Bearer ${localStorage.getItem(AUTH_KEY)}`
}

export function createMdWithExtension(fileContent: string, extension: string) {
  const allowExtension = [
    'sh',
    'xml',
    'yml',
    'yaml',
    'docker',
    'ts',
    'js',
    'json',
    'key',
    'pem',
    'cert',
  ]

  const isRewrite
    = !fileContent.startsWith('```') && allowExtension.find(f => f.includes(extension))

  if (!isRewrite)
    return fileContent

  return `\`\`\`${extension}\n${fileContent}\`\`\``
}
