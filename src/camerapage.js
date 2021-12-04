// Components are written in this logic:
// RowView or ColumnView of a page

import React from 'react';
import  './css/camera-page.css';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Item from '@material-ui/core/ListItem';

export default class CameraPage extends React.Component {
    render(){
        return(
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <Item>xs=6 md=8</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Item>xs=6 md=4</Item>
                </Grid>
                <Grid item xs={6} md={8}>
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
        );
    }
}








