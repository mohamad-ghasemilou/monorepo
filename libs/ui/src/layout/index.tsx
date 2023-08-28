import {ReactElement, Fragment} from "react";
import Header from "../header";
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
    <Fragment>
      <Header/>
      <main style={{display:'flex'}}>
        <Sidebar items={items} onItemClick={_=>{}}/>
        <Fragment>
          {props.children}
        </Fragment>
      </main>
    </Fragment>
  );
}

export default Layout;
