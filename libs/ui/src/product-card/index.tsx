import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import CardActionArea from '@mui/material/CardActionArea';

interface Props {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  onClick: (id:string) => void
}

export function ProductCard(props:Props) {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 300 }}>
      <CardActionArea onClick={_=>props.onClick(props.id)}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt=""
        />
        <CardContent>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography gutterBottom variant="h5" component="div" sx={{maxWidth:180, maxHeight:30, overflow:'hidden', textOverflow:"ellipsis"}}>
              {props.title}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              ${props.price}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{maxHeight:60, overflow:'hidden', textOverflow:"ellipsis"}}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
