import React, { Component } from 'react';
import isDev from 'electron-is-dev';

import AppBar from '@material-ui/core/AppBar';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/paper';
import { Grid } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import RefreshIcon from '@material-ui/icons/Refresh';
import CreateIcon from '@material-ui/icons/Create';
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
//import { classExpression } from 'babel-types';

import grey from '@material-ui/core/colors/grey';

import NetworkStatus from './NetworkStatus';


const theme = createMuiTheme({
    palette: {
        primary: grey
    },
    typography: {
        useNextVariants: true,
    }
});

const styles = (theme) => ({
    bottomNavigation: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },

    textFieldColor: {
        color: "#ffffff"
    },

    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
});


class MainUI extends Component {

    constructor(props) {
        super(props);
        if (isDev) {
            console.log("MainUI constructor runs, following props are available.");
            console.log(props)
        }
    }

    render() {
        const { classes } = this.props;

        if (isDev) { console.log("MainUI render runs"); }
        return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" className={ classes.grow }>NIC viewer</Typography>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper className={classes.root} elevation={2}>
                        <Typography variant="h4" component="h2">Network Status</Typography>
                            <NetworkStatus networkstatus={ this.props.networkstatus } />
                        </Paper>
                    </Grid>
                </Grid>

                <BottomNavigation
                    className={ classes.bottomNavigation }
                    showLabels
                >
                    <BottomNavigationAction
                        label="Refresh Network Status"
                        icon={ <NetworkCheckIcon /> }
                        onClick={ e => this.props.getNetworkStatus(e) }
                    />
                </BottomNavigation>
            </div>
        );
    }
}

export default withStyles(styles)(MainUI);