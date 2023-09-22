import { Meta } from '@storybook/react'
import {HomePage} from "./index"
// import type {Product} from "@monorepo/feature";

export default {
  title: 'Home Page',
  component: HomePage,
} as Meta

const products = [
  {
    id: 0,
    title: 'title1',
    price:132,
    image: 'asdasd',
    description: 'lorem imajdfsnalskdjfnalksdjfalksdjfnaksdjnf',
    category: "category a"
  },
  {
    id: 1,
    title: 'title2',
    price:1324,
    image: 'asdasdasdasd',
    description: 'lorem imajdfsnalskdjfnalksdjfalksdjfnaksdjnf',
    category: "category b"
  }
]

export const Basic = () => {
  return (<HomePage products={products} />)
}
