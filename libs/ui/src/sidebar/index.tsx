import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from "@mui/material/Paper";

const drawerWidth = 240;

type Item = {
  id: string;
  text: string;
}

interface Props {
  items: Item[];
  onItemClick: (id:string) => void;
}

function Sidebar(props: Props) {
  return (
    <Box sx={{marginRight: 4, marginTop: 1, width: {sm: drawerWidth}, flexShrink: {sm: 0}}}>
      <Paper elevation={0} square>
        <List>
          {props.items.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={_ => props.onItemClick(item.id)}>
                <ListItemText primary={item.text}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default Sidebar;
