import AppBar, {AppBarProps} from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {styled} from '@mui/system';
import Link from "../link";

const StyledAppBar = styled(AppBar)<AppBarProps>(({theme}) => ({
  color: theme.palette.success.second
}));

export function Header() {
  return (
    <Box component="header" sx={{flexGrow: 1}}>
      <StyledAppBar position="static">
        <Toolbar>
          <Box component="div" sx={{flexGrow: 1}}>
            <Link to="/">
              <Typography variant="h6" color="black">
                Home
              </Typography>
            </Link>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
}

