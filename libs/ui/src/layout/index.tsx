import {ReactElement, Fragment} from "react";
import {Header} from "@monorepo/ui";
import Box from "@mui/material/Box";
import {Sidebar} from "@monorepo/feature";

interface Props {
  children: ReactElement;
  sidebar: boolean;
}

export function LayoutUI(props:Props) {
  return (
    <Fragment>
      <Header/>
      <main style={{display:'flex'}}>
        {props.sidebar && <Sidebar/>}
        <Box m={2}>
            {props.children}
        </Box>
      </main>
    </Fragment>
  );
}
