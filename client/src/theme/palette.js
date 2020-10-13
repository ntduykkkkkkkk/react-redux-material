import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
    black,
    white,
    primary: {
        contrastText: white,
        dark: colors.indigo[900],
        main: colors.indigo[500],
        light: colors.indigo[100]
    },
    secondary: {
        contrastText: white,
        dark: colors.indigo[900],
        main: colors.indigo['A400'],
        light: colors.indigo['A400']
    },
    success: {
        contrastText: white,
        dark: colors.indigo[900],
        main: colors.indigo[600],
        light: colors.indigo[400]
    },
    info: {
        contrastText: white,
        dark: colors.indigo[900],
        main: colors.indigo[600],
        light: colors.indigo[400]
    },
    warning: {
        contrastText: white,
        dark: colors.indigo[900],
        main: colors.indigo[600],
        light: colors.indigo[400]
    },
    error: {
        contrastText: white,
        dark: colors.indigo[900],
        main: colors.indigo[600],
        light: colors.indigo[400]
    },
    text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
        link: colors.blue[600]
    },
    background: {
        default: '#F4F6F8',
        paper: white
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200]
}