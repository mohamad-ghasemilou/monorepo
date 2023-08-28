import Header from "../header";
import {ReactElement} from "react";

interface Props {
  children: ReactElement
}

function Layout(props:Props) {
  return (
    <>
      <Header/>
      <main>

        {props.children}
      </main>
    </>
  );
}

export default Layout;
