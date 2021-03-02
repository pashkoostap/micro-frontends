import React from 'react';
import { createStyles, LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return createStyles({
    bar: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  });
});

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.loader}>
      <LinearProgress />
    </div>
  );
};

export default Loader;
