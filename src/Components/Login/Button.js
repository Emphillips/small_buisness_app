import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const LoginButton = () => {

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      width: 200,
    },
  }),
);

export default function ButtonSizes() {
  const classes = useStyles();

  return (
      <div className="button">
        <Button size="large" variant="contained" color="primary" className={classes.margin}> 
      Login
    </Button>
    

      </div> 
    );
  }