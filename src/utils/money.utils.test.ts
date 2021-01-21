import { formatMoney } from './money.utils'

describe('Test money utils', () => {
  it('should return a formatted number with R$ prefix', () => {
    expect(formatMoney(100)).toBe('R$ 100.00')
  })
})
