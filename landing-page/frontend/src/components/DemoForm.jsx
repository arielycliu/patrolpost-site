import React, { useState } from 'react';
import {
    Modal, Stack, TextField, Select, MenuItem, InputLabel, FormControl, Button, Typography, Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function DemoForm({ open, handleClose, email, setEmail }) {
    const [industry, setIndustry] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({
            industry,
            companySize,
            name,
            email,
            phone,
        });
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: {
                        xs: '90%',
                        sm: '70%',
                        md: '40%'
                    },
                    bgcolor: 'background.paper',
                    borderRadius: '12px',
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Box sx={{ 
                    position: 'absolute', top: 16, right: 16,
                    borderRadius: '20px',
                    width: 'fit-content',
                    height: 'fit-content',
                    p: '5px',
                    m: '0',
                    display: 'flex',
                    alignContent: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                        backgroundColor: 'hsl(220, 35%, 88%)',
                        cursor: 'pointer'
                    }
                }} onClick={handleClose}>
                    <CloseIcon />
                </Box>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2} sx={{ 
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left'
                    }}>
                        <Typography id="modal-title" variant="h6" component="h2">
                            Demo Request
                        </Typography>

                        <TextField
                            label="Name"
                            size="small"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <TextField
                            label="Email"
                            size="small"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                        />

                        <TextField
                            label="Phone number"
                            size="small"
                            variant="outlined"
                            fullWidth
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <TextField
                            label="Industry"
                            size="small"
                            variant="outlined"
                            fullWidth
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                        />

                            
                        <FormControl fullWidth size="small">
                            <InputLabel id="company-size-label">Company Size</InputLabel>
                            <Select
                                labelId="company-size-label"
                                value={companySize}
                                onChange={(e) => setCompanySize(e.target.value)}
                                label="Company Size"
                            >
                                <MenuItem value="1-10">1-10</MenuItem>
                                <MenuItem value="11-50">11-50</MenuItem>
                                <MenuItem value="51-200">51-200</MenuItem>
                                <MenuItem value="201-500">201-500</MenuItem>
                                <MenuItem value="500+">500+</MenuItem>
                            </Select>
                        </FormControl>

                        <Button type="submit" variant="contained" color="primary" sx={{ 
                            mt: 2,
                            width: 'fit-content'
                        }}>
                            Submit
                        </Button>
                    </Stack>
                </form>

            </Box>
        </Modal>
    );
}

export default DemoForm;
