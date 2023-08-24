import {ReactElement} from 'react';
import {Link as MuiLink} from '@mui/material';
import {Link as RouterLink} from "react-router-dom";

interface Props {
  to: string;
  children: ReactElement;
}

function Link(props: Props) {
  console.log(props.children)
  return (
    <MuiLink component={RouterLink} to={props.to}>
      {props.children}
    </MuiLink>
  )
}

export default Link
