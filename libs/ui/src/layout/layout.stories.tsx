import { Meta } from '@storybook/react'
import {withRouter} from "storybook-addon-react-router-v6";
import Layout from "./index"

export default {
  title: 'Layout',
  component: Layout,
  decorators: [withRouter]
} as Meta

export const Basic = (args : any) => {
  return (<Layout/>)
}

