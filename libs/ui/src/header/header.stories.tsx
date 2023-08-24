import Header from "./index"
import { Meta } from '@storybook/react'
import {withRouter} from "storybook-addon-react-router-v6";

export default {
  title: 'Header',
  component: Header,
  decorators: [withRouter]
} as Meta

export const Basic = (args : any) => {
  return (<Header/>)
}
