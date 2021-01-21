import { render } from '@testing-library/react'
import React from 'react'
import TestUtils from 'react-dom/test-utils'
import { Input } from './Input'

const changeInputMaskValue = (element: any, value: any) => {
  element.value = value
  element.selectionStart = element.selectionEnd = value.length
  TestUtils.Simulate.change(element)
}

describe('<Input />', () => {
  it('should render an Input without mask', () => {
    const { container } = render(<Input />)
    expect(container).toMatchSnapshot()
  })

  it('should render an Input with mask', () => {
    const component = <Input mask="999.999.999-99" placeholder="cpf" />
    const { getByPlaceholderText } = render(component)
    const input = getByPlaceholderText('cpf')

    changeInputMaskValue(input, '12345678945')

    expect(input).toHaveValue('123.456.789-45')
  })
})

export { changeInputMaskValue }
