import { Meta } from '@storybook/react'
import HomePage from "./index"

export default {
  title: 'Homepage',
  component: HomePage,
} as Meta

export const Basic = () => {

  return (<HomePage />)
}
