import {styled, Button, Typography, Toolbar, AppBar, AppBarProps, Box} from '@mui/material';
import Link from "../link";

const StyledAppBar = styled(AppBar)<AppBarProps>(({ theme }) => ({
  color: theme.palette.success.main
}));

function Header() {
  return (
    <Box component="header" sx={{flexGrow: 1}} >
      <StyledAppBar position="static">
        <Toolbar>
          <Box component="div" sx={{flexGrow: 1}}>
            <Link to="/">
              <Typography variant="h6">
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

export default Header;
