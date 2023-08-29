import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import CardActionArea from '@mui/material/CardActionArea';
import Link from "../link";
import {productRoute} from "@monorepo/feature";

interface Props {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export function ProductCard(props: Props) {
  return (
    <Link to={productRoute(props.id)}>
      <Card sx={{maxWidth: 345, maxHeight: 300}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.image}
            alt=""
            sx={{maxHeight: 140, height: 140, width: 'auto', margin: '0 auto', paddingTop: 2}}
          />
          <CardContent>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
              <Typography gutterBottom variant="h5" component="div"
                          sx={{maxWidth: 180, maxHeight: 30, overflow: 'hidden', textOverflow: "ellipsis", textDecoration:'none'}}>
                {props.title}
              </Typography>

              <Typography gutterBottom variant="h5" component="div">
                ${props.price}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary"
                        sx={{maxHeight: 60, overflow: 'hidden', textOverflow: "ellipsis"}}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
