import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/actions";
import { CartItem } from "../store/types";
import { Card, CardContent, CardMedia, Collapse, Typography } from '@mui/material';
import { Box, CardActions } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const ProductItem: React.FC<{ item: CartItem }> = ({ item }) => {
    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(item.id));
    };

    const handleUpdateQuantity = (quantity: number) => {
        if (quantity >= 1 && quantity <= 10) {
            dispatch(updateQuantity(item.id, quantity));
        }
    };

    const truncatedName = item?.name
        ? item.name.length > 20
            ? `${item.name.substring(0, 20)}...`
            : item.name
        : '';


    return (
        <Card sx={{ maxWidth: 345, height: '100%' }}>
            <CardMedia
                component="img"
                height="100"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: 'contain' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {truncatedName}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center'}}>
                    <Typography variant="body1">More detailed</Typography>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="more detailed"
                    >

                        <ExpandMoreIcon />
                    </ExpandMore>
                </Box>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography gutterBottom variant="body1" component="div">
                            {item.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Typography variant="body1">{item.price.toFixed(2)} ₽</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Typography variant="body1">
                        {item.quantity}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center', gap: '5px' }}>
                        <IconButton size="small" sx={{ padding: 0, width: '10px', height: '5px' }} onClick={() => handleUpdateQuantity(item.quantity - 1)}>
                            <ArrowDropDownOutlinedIcon />
                        </IconButton>
                        <IconButton size="small" sx={{ padding: 0, width: '10px', height: '5px' }} onClick={() => handleUpdateQuantity(item.quantity + 1)}>
                            <ArrowDropUpOutlinedIcon />
                        </IconButton>
                    </Box>
                </Box>
                <IconButton aria-label="delete" size="small" onClick={handleRemoveFromCart}>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default ProductItem;