import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const MainPage: React.FC = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
            <Grid item xs={10} sm={8} md={6}>
                <Paper elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Nike Tns
                    </Typography>
                    <Grid container justifyContent="center" sx={{ mb: 3 }}>
                        <iframe
                            width="560"
                            height="315"
                            src="/tns.mp4"
                            title="Nike Tns Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </Grid>
                    <Typography variant="h5" gutterBottom>
                        Product Description
                    </Typography>
                    <Typography variant="body1">
                        Nike Tns, also known as Nike Air Max Plus, is a popular athletic shoe model that offers a unique design and
                        comfortable fit. It features a visible Air unit in the sole for enhanced cushioning and support. The upper is
                        constructed with a combination of mesh and synthetic materials, providing breathability and durability. Nike
                        Tns are often sought after by sneaker enthusiasts and athletes alike.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default MainPage;
