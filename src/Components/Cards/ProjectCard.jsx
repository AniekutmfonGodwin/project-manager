import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { ProgressWithLabel } from '../Feedback';
import { Paper } from '@material-ui/core';
import { deepOrange, deepPurple } from '@material-ui/core/colors';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    '&:hover':{
        backgroundColor: theme.palette.grey[100],
    }
  },
  inline: {
    display: 'inline',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500]
  }
}));

export default function AlignItemsList() {
  const classes = useStyles();

  return (
      <Paper elevation={5} className={classes.root}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar className={classes.orange}>M</Avatar>
            </ListItemAvatar>
            <ListItemText
            primary="Build an Erm system"
            secondary={<ProgressWithLabel/>}
            />
        </ListItem>
      </Paper>
  );
}
