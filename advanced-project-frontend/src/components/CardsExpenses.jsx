import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import "../styles/CardsEx.css";
// import Tabs from '../components/Tabs';
const [data, setData] = useState([])
const useStyles = makeStyles((theme) => ({
  root: {
    background:'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      
    },
    width:'100%'
  },
  
}));
 
const shadowStyle = {
  boxShadow: '20px 20px 20px rgba(0,0,0,0.2)',
  width:'180px',
  height: '180px',
  marginTop:'-1px',
};

const TransferCard = () => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={shadowStyle}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
            Transfer
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: 'auto' }}>
          <Button size="large" variant="contained" color="primary">
            Quick Add
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

const TotalAmountCard = ({ totalAmount }) => {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" sx={{ ...shadowStyle, marginTop: 0 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
            Total Amount
          </Typography>
          <Typography variant="h5" component="div">
            {totalAmount}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default function MyPage() {
  const totalAmount = 1000; // this value should come from the table in your page
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 9 }}>
        <TransferCard />
        <TotalAmountCard totalAmount={totalAmount} />
      </Box>
      {/* <Tabs /> */}
    </Box>
  );
}