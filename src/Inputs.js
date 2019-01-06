import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

const Inputs = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Input
        placeholder="Company"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        placeholder="Aggravation"
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    </div>
  );
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);