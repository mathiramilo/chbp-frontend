export const showLast4Digits = number => {
  const last4Digits = number.slice(-4)
  return `•••• •••• •••• ${last4Digits}`
}

export const cardNumberWithSpaces = number => {
  const arr = number.match(/.{1,4}/g)
  return arr ? arr.join(' ') : ''
}

export const validateExpDate = date => {
  const re = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/
  return re.test(date)
}

export const getCardType = number =>
  number ? (['0', '1', '2', '3', '4'].includes(number[0]) ? 'visa' : 'master') : 'none'
