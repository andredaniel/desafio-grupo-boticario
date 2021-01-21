import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { changeInputMaskValue } from '../../components/Input/Input.test'
import { UserProvider } from '../../contexts/user.context'
import Page from './CreateOrder'

describe('<Page />', () => {
  it('should render Page component', () => {
    const { container } = render(
      <UserProvider>
        <Router>
          <Page />
        </Router>
      </UserProvider>
    )

    expect(container).toMatchSnapshot()
  })

  it('should fill the form and create a new order', async () => {
    const { container, getByPlaceholderText } = render(
      <UserProvider>
        <Router>
          <Page />
        </Router>
      </UserProvider>
    )

    const inputCode = getByPlaceholderText(/Código da compra/i)
    const inputValue = getByPlaceholderText(/Valor da compra/i)
    const inputDate = getByPlaceholderText(/Data da compra/i)

    changeInputMaskValue(inputCode, '12345')
    changeInputMaskValue(inputValue, 100)
    changeInputMaskValue(inputDate, '28/09/2021')

    expect(container).toMatchSnapshot()
  })
})
