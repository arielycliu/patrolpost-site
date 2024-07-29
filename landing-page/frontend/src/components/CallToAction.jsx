import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';
import { styled } from '@mui/material/styles';

export default function CallToAction() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 14, sm: 14, md: 10 },
                pb: { xs: 8, sm: 12, md: 0 },
            }}
        >
            <Stack
                spacing={2}
                useFlexGap
                sx={{ 
                    alignItems: 'center',
                    width: { xs: '100%', sm: '70%' } }}
            >
                <Typography
                    variant="h4"
                >
                    Experience&nbsp;the&nbsp;
                    <Typography
                        component="span"
                        variant="h1"
                        sx={(theme) => ({
                            fontSize: 'inherit',
                            color: 'primary.main',
                            ...theme.applyStyles('dark', {
                                color: 'primary.light',
                            }),
                        })}
                    >
                        Watchdog&nbsp;
                    </Typography>
                    advantage
                </Typography>
                
                <Typography
                    sx={{
                        textAlign: 'center',
                        color: 'text.secondary',
                        width: { sm: '100%', md: '80%' },
                    }}
                >
                    Ready to see how WatchDog can transform your surveillance needs? 
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                        color: 'text.secondary',
                        width: { sm: '100%', md: '80%' },
                        mt: -1.5
                    }}
                >
                    <Typography
                        component="span"
                        variant="h1"
                        sx={(theme) => ({
                            fontSize: 'inherit',
                            color: 'primary.main',
                            ...theme.applyStyles('dark', {
                                color: 'primary.light',
                            }),
                        })}
                    >
                        Sign up for a demo today&nbsp;
                    </Typography>
                    and discover the future of remote monitoring.
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    useFlexGap
                    sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                >
                    <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
                        Email
                    </InputLabel>
                    <TextField
                        id="email-hero"
                        hiddenLabel
                        size="small"
                        variant="outlined"
                        aria-label="Enter your email address"
                        placeholder="Your email address"
                        slotProps={{
                            htmlInput: {
                                autoComplete: 'off',
                                'aria-label': 'Enter your email address',
                            },
                        }}
                    />
                    <Button variant="contained" color="primary" sx={{
                            ml: {
                                xs: 0,
                                sm: -10
                            }
                        }}>
                        Reach out!
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
}
