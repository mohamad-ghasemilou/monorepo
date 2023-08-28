import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

type Item = {
  id: string;
  text: string
}

interface Props {
  items: Item[];
  onItemClick: (id:string) => void
}

function Sidebar(props:Props) {
  return (
    <Box
      component="nav"
      sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
      aria-label="mailbox folders"
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {props.items.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={_=>props.onItemClick(item.id)}>
                <ListItemText primary={item.text}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
