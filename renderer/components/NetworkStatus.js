import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = (theme) => {
    progress: {
        margin: theme.spacing.unit * 2
    }
};

class NetworkStatus extends Component {

    render() {
        const classes = this.props;

        if (!this.props.networkstatus) {
            return (
                <div>
                    <Typography component="p">未取得</Typography>
                </div>
            );
        } else if ( this.props.networkstatus === "obtaining") {
            return (
                <div>
                    <CircularProgress />
                    <Typography component="p">取得中</Typography>
                </div>
            );
        } else {
            let devices = JSON.parse(this.props.networkstatus);
            let rows = [];
            for (let idx in devices) {
                rows[idx] = [
                                idx,
                                devices[idx].InterfaceIndex,
                                devices[idx].InterfaceDescription,
                                devices[idx].MacAddress,
                                devices[idx].IPAddress,
                                devices[idx].Status
                            ];
            }
            console.log(rows);
            return (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>MAC Address</TableCell>
                            <TableCell>IP Address</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map(row => {
                                console.log(row);
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell>{row[1]}</TableCell>
                                        <TableCell>{row[2]}</TableCell>
                                        <TableCell>{row[3]}</TableCell>
                                        <TableCell>{row[4]}</TableCell>
                                        <TableCell>{row[5]}</TableCell>
                                    </TableRow>
                                );
                            })
                        }
                    </TableBody>
                </Table>
            );
        }
        return null;

    }
}

export default withStyles(styles)(NetworkStatus);