import { input } from '@inquirer/prompts'

export const getId = async (reason?: string) => {
  const message = reason ? `id (Reason: ${reason})` : 'id'
  return (
    await input({
      message,
      required: true,
      validate: (value) => value.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) !== null,
    })
  ).trim()
}

export const getName = async (reason?: string) => {
  const message = reason ? `name (Reason: ${reason})` : 'name'
  return (
    await input({
      message,
      required: true,
      validate: (value) => value.length > 0,
    })
  ).trim()
}

export const getSymbol = async (reason?: string) => {
  const message = reason ? `symbol (Reason: ${reason})` : 'symbol'
  const answer = await input({
    message,
    validate: (value) => value.length > 0,
  })
  return answer.trim()
}

export const getMarketCapRank = async (reason?: string) => {
  const message = reason ? `marketCapRank (Reason: ${reason})` : 'marketCapRank'
  const answer = await input({
    message,
    validate: (value) => value.match(/^[0-9]+$/) !== null,
  })
  return parseInt(answer)
}

export const getChainId = async (reason?: string) => {
  const message = reason ? `chainId (Reason: ${reason})` : 'chainId'
  const answer = await input({
    message,
  })
  return answer.trim() || undefined
}

export const getShortName = async (reason?: string) => {
  const message = reason ? `shortName (Reason: ${reason})` : 'shortName'
  const answer = await input({
    message,
  })
  return answer.trim() || undefined
}

export const getNativeCoinId = async (reason?: string) => {
  const message = reason ? `nativeCoinId (Reason: ${reason})` : 'nativeCoinId'
  const answer = await input({
    message,
  })
  return answer.trim() || undefined
}
