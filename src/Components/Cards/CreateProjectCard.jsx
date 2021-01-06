import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { IconButton, Paper } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
const { ipcRenderer } = window.require('electron');
const { createProject } = require('../../constant');




const useStyles = makeStyles((theme) => ({
  root: {
    
    padding:theme.spacing(1,1,1,2),
    backgroundColor: theme.palette.background.paper,
    '&:hover':{
        backgroundColor: theme.palette.grey[100],
    }
  },
  
  
}));

export default function AlignItemsList() {
  const classes = useStyles();
  console.log(createProject)

  return (
      <Paper elevation={5} className={classes.root} >
        <ListItem alignItems="center">
            <ListItemAvatar>
                <Avatar>
                  <IconButton onClick={()=> ipcRenderer.send('asynchronous-message', 'ping')}>
                    <AddRoundedIcon/>
                  </IconButton>
                </Avatar>
            </ListItemAvatar>
        </ListItem>
      </Paper>
  );
}
