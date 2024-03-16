import { Box, Link, Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Typography variant='body2'>© {new Date().getFullYear()} Anastasiia Kunstman </Typography>
            <Link underline='none' href='https://t.me/anastasiiakunstman'>
                <TelegramIcon color="primary" fontSize='small' />
            </Link>
        </Box>
    )
};

export default Footer;