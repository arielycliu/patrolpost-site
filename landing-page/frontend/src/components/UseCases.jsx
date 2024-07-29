import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const dataUseCases = [
    {
        usecase:
            "We real-time monitoring and immediate alerts for any unusual activities. With thermal imaging and geofencing capabilities, you can keep a close eye on playgrounds and entrances.",
        img: 'url("/src/assets/playground.png")'
    },
    {
        usecase:
            "Our AI-powered software assists in detecting unusual movements and ensuring that safety protocols are adhered to, allowing healthcare professionals to focus on patient care.",
        img: 'url("/src/assets/hospital.jpg")'
    },
    {
        usecase:
            "Our wireless functionality ensures that you can monitor equipment, personnel, and the site perimeter. Our advanced detection features help prevent unauthorized access and theft.",
        img: 'url("/src/assets/construction.jpg")'
    },
    // {
    //     usecase:
    //         "Enhance your store's security and operational efficiency with WatchDog. Our surveillance systems can monitor customer activity, manage inventory, and detect potential security breaches. The intuitive dashboard and AI capabilities provide actionable insights, helping you optimize store operations and improve the shopping experience.",
    // },
    // {
    //     usecase:
    //         "Streamline your warehouse operations and ensure safety with WatchDog’s remote surveillance. Monitor loading docks, storage areas, and internal operations from anywhere. Our system’s 24/7 recording and advanced detection features help safeguard against theft, ensure compliance with safety regulations, and streamline inventory management.",
    // },
    // {
    //     usecase:
    //         "Safeguard public areas such as parks, transit hubs, and recreational centers with WatchDog. Our mobile surveillance units offer flexible deployment and comprehensive monitoring capabilities. With features like geofencing and intrusion detection, you can enhance public safety and respond swiftly to incidents, creating a secure environment for everyone.",
    // },
];

export default function UseCases() {
    const theme = useTheme();

    return (
        <Container
            id="usecases"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Box
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                <Typography component="h2" variant="h4" sx={{ color: 'text.primary' }}>
                    Empowering Across Industries
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    No matter the industry, WatchDog’s innovative solutions provide peace of mind and enhance security with advanced technology and seamless integration.
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {dataUseCases.map((usecase, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                flexGrow: 1,
                                p: 1,
                            }}
                        >
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {usecase.usecase}
                                </Typography>
                            </CardContent>
                            <Box
                                sx={(theme) => ({
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    minHeight: 200,
                                    minWidth: 200,
                                    backgroundImage: 'var(--usecase-img)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    borderRadius: 0.8
                                })}
                                style={{
                                    '--usecase-img': dataUseCases[index].img,
                                }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
