import {LayoutUI} from "@monorepo/ui";
import {ReactElement} from "react";
import {useLocation} from "react-router";
import {routes} from "../routes";

interface Props {
  children: ReactElement
}

export function Layout(props:Props) {
  //////////////////////////////////////////// H O O K S
  const location = useLocation();


  //////////////////////////////////////////// C O N D I T I O N S
  const isHome = location.pathname === routes.home

  //////////////////////////////////////////// JSX
  return (
    <LayoutUI sidebar={isHome}>
      {props.children}
    </LayoutUI>
  );
}
