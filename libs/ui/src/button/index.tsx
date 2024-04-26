import {ReactNode} from 'react';
import {Button as MuiButton} from "@mui/material";

export interface UiProps {
  children: ReactNode
}

export function Button(props: UiProps) {
  return (
    <MuiButton variant="contained">{props.children}</MuiButton>
  );
}

export default Button;
