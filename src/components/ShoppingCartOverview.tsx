import { Badge, Box, Divider, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyRubleOutlinedIcon from '@mui/icons-material/CurrencyRubleOutlined';
import { CartItem } from "../store/types";

const ShoppingCartOverview: React.FC<{ cartItems: CartItem[] }> = ({ cartItems }) => {
    return (
        <Paper elevation={3} sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '0px 16px', justifyContent: 'space-between' }}>
                <Typography variant="h6" gutterBottom>
                    Shopping Cart
                </Typography>
                <Badge
                    color="secondary"
                    badgeContent={
                        cartItems.reduce((total, item) => total + item.quantity, 0)
                    }
                    showZero
                >
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </Box>
            <Divider />
            <List>
                {cartItems.map((item, index) => (
                    <ListItem key={index} divider>
                        <ListItemText
                            primary={item.name}
                            secondary={`${item.quantity} pcs.`}
                        />
                        <Typography variant="body2">
                            {(item.price * item.quantity).toFixed(2)}₽
                        </Typography>
                    </ListItem>
                ))}
            </List>
            <Typography variant="h6" sx={{ textAlign: 'right' }}>
                {`Total: 
                ${cartItems
                        .reduce((total, item) => total + item.price * item.quantity, 0)
                        .toFixed(2)} ₽`}
            </Typography>
        </Paper>
    );
};

export default ShoppingCartOverview;