import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Header from '../../header/Header';
import './indexpage.css';

// Create a styled Paper component
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.typography.body2,
  backgroundColor: 'white',
}));

function IndexPage() {
  return (
    <div>
      <Header />

      <div className="index-page-container" style={{ flexDirection: 'column' }}>
        <h2>Table of Contents</h2>

        <Box sx={{ flexGrow: 1, width: '100%', marginTop: "5px", marginLeft: "25px" }}>
          <Grid container spacing={2} alignItems="flex-start" justifyContent="flex-start">
            <Grid item xs={2}>
              <Item>size=3</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>size=3</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>size=3</Item>
            </Grid>
            <Grid item xs={2}>
              <Item>size=3</Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default IndexPage;
