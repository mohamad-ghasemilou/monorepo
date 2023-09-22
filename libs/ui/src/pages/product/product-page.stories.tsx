import { Meta } from '@storybook/react'
import {ProductPage} from "./index"

export default {
  title: 'Product Page',
  component: ProductPage,
} as Meta

export const Basic = () => {
  return (<ProductPage />)
}
