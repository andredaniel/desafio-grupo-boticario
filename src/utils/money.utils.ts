const formatMoney = (value: number) => {
  return Number(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}

export { formatMoney }
