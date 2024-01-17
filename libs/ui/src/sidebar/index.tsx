import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from "@mui/material/Paper";
import {Category} from "@monorepo/feature";
import Typography from "@mui/material/Typography";

interface Props {
  items: Category[];
  onItemClick: (category:Category) => void;
}

export function SidebarUI(props: Props) {
  return (
    <Box mt={1} sx={{width: {sm: 240}, flexShrink: {sm: 0}}}>
      <Paper elevation={0} square>
        <Typography sx={{mt:2,textAlign:'center', bgcolor:'lightgrey'}}>
          categories
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={_ => props.onItemClick('all')}>
              <ListItemText primary={'all'}/>
            </ListItemButton>
          </ListItem>
          {props.items.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={_ => props.onItemClick(item)}>
                <ListItemText primary={item}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}
