import React from 'react';
import { Button as MaterialButton, withStyles } from '@material-ui/core';
import { colorsByAlias, colors, Loading, theme } from '@olist/united';


const commonStyles = {
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(',')
};

function BaseButton(props) {
  const variant = props.variant ?? 'default';

  const loadingVariationMap = {
    primary: { backgroundColor: 'white' },
    alternate: { backgroundColor: 'white' },
    default: { variation: 'danger' },
  }

  return (
    <MaterialButton
      {...props}
      startIcon={props.loading ? <Loading {...loadingVariationMap[variant]} /> : props.startIcon}
    >
      {props.loading ? '' : props.children}
    </MaterialButton>
  );
}

export const Button = withStyles({
  root: {
    ...commonStyles,
    backgroundColor: theme.colors.foundation.shadeLighter,
    borderColor: theme.colors.foundation.shadeMedium,
    '&:hover': {
      backgroundColor: theme.colors.foundation.shadeLight,
      borderColor: theme.colors.foundation.shadeMedium,
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: theme.colors.foundation.shadeLight,
      borderColor: 'none',
    }
  },
})(BaseButton);

export const PrimaryButton = withStyles({
  root: {
    ...commonStyles,
    backgroundColor: colorsByAlias.primary,
    border: 'none',
    color: 'white',
    '&:hover': {
      backgroundColor: colors.green.light[0],
      borderColor: 'none',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: colors.green.light[0],
      borderColor: 'none',
    }
  },
})(BaseButton);