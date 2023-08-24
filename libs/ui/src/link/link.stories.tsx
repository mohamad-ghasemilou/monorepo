import Link from "./index";
import {Meta} from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
  title: 'Link',
  component: Link,
  decorators: [withRouter]
} as Meta

export const Basic = (args: any) => {
  return (
    <Link to="/">
      <span>Link</span>
    </Link>
  )
}
