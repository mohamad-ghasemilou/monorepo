import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { CardActionArea } from '@mui/material';

interface Props {
  title: string;
  description: string;
  price: string;
  image: string;
}

function ProductCard(props:Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt=""
        />
        <CardContent>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>

            <Typography gutterBottom variant="h5" component="div">
              {props.price} $
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
