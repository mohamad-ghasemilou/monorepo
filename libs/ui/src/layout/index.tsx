import Header from "../header";
import {ReactElement} from "react";
import Sidebar from "../sidebar";

interface Props {
  children: ReactElement
}

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

function Layout(props:Props) {
  return (
    <>
      <Header/>
      <main>
        <Sidebar items={items} onItemClick={_=>{}}/>
        {props.children}
      </main>
    </>
  );
}

export default Layout;
