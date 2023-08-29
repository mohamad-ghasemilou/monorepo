import {Meta} from '@storybook/react'
import ProductCard from "./index"

export default {
  title: 'Product Card',
  component: ProductCard,
} as Meta

export const Basic = () => {
  return (<ProductCard
    title="Lizard"
    description="Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica"
    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
    price="12.35"
  />)
}
