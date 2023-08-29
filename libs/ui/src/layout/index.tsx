import {ReactElement, Fragment} from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import Box from "@mui/material/Box";

interface Props {
  children: ReactElement;
  sidebar: boolean;
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

export function Layout(props:Props) {
  return (
    <Fragment>
      <Header/>
      <main style={{display:'flex'}}>
        {props.sidebar && <Sidebar items={items} onItemClick={_ => {}}/>}
        <Box m={2}>
            {props.children}
        </Box>
      </main>
    </Fragment>
  );
}
