import { Meta } from '@storybook/react'
import Sidebar from "./index"

export default {
  title: 'Sidebar',
  component: Sidebar,
} as Meta

const items = [
  {
    id: "1",
    text: "item1"
  },
  {
    id: "2",
    text: "item2"
  },
  {
    id: "3",
    text: "item3"
  },
]

export const Basic = () => {

  function handleClick(id:string) {
    alert(`item with id ${id} clicked`)
  }

  return (<Sidebar items={items} onItemClick={handleClick}/>)
}
