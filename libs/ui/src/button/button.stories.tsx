import * as React from "react";
import Button from "./index"
import { Meta } from '@storybook/react'



export default {
  title: 'Button',
  component: Button,
} as Meta

const argsWithDefault = (args : any) => {
  return {
    ...{
      variant : 'contained'
    },
    ...args,
  }
}

export const Basic = (args : any) => {
  return (<Button>Basic</Button>)
}

export const Contained = (args : any) => {
  return (<Button variant={"contained"}>Contained</Button>)
}


export const AllOptions = (args : any) => {
  args = argsWithDefault(args)
  return (<Button {...args}>{args.content}</Button>)
}
