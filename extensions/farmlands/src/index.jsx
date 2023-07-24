import React from 'react'
import {
  useExtensionApi,
  render,
  Banner,
  useTranslate,
  TextField,
} from '@shopify/checkout-ui-extensions-react'

render('Checkout::Dynamic::Render', () => <App />)

function App() {
  const { extensionPoint } = useExtensionApi()
  const translate = useTranslate()
  return (
    <>
      <Banner title='Farmlands'>
        If you are paying by Farmlands card, please enter the details below.
      </Banner>
      <TextField label='Farmlands card number' />
      <TextField label='Name on card' />
      <TextField label='MM' />
      <TextField label='YY' />
      <TextField label='CVC' />
    </>
  )
}
