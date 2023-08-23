import {Button as MuiButton} from "@mui/material";

/* eslint-disable-next-line */
export interface UiProps {}

export function Button(props: UiProps) {
  return (
    <MuiButton variant="contained">button</MuiButton>
  );
}

export default Button;
