import {Meta} from '@storybook/react'
import {withRouter} from "storybook-addon-react-router-v6";
import {LayoutUI} from "./index"

export default {
  title: 'Layout',
  component: LayoutUI,
  decorators: [withRouter]
} as Meta

export const Basic = (args: any) => {
  return (
    <LayoutUI>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deserunt eius maiores nobis tempora. Ab
        aut blanditiis dicta earum excepturi hic optio pariatur, sequi sit ullam unde ut vero voluptas.
      </h1>
    </LayoutUI>
  )
}

