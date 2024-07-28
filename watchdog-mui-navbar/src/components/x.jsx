style: {
    color: 'white',
    backgroundColor: brand[300],
    backgroundImage: `linear-gradient(to bottom, ${alpha(brand[400], 0.8)}, ${brand[500]})`,
    boxShadow: `inset 0 2px 0 ${alpha(brand[200], 0.2)}, inset 0 -2px 0 ${alpha(brand[700], 0.4)}`,
    border: `1px solid ${brand[500]}`,
    '&:hover': {
        backgroundColor: brand[700],
        boxShadow: 'none',
    },
    '&:active': {
        backgroundColor: brand[700],
        boxShadow: `inset 0 2.5px 0 ${alpha(brand[700], 0.4)}`,
    },
},