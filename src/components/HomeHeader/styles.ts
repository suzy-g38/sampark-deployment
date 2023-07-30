import { createStyles } from '@mantine/styles';
const HEADER_HEIGHT = '5rem';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'transparent',
    border: 'none',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    color: '#000 !important',
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',
    paddingBottom: '1rem',
    // marginRight: '-500px',
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
      color: 'white',
      fontWeight: 'bolder',
    },
  },

  link: {
    color: theme.white,
    display: 'block',
    lineHeight: 1,
    padding: `.3rem 1rem`,
    textDecoration: 'none',
    fontSize: theme.fontSizes.lg,
    fontWeight: 300,
    position: 'relative',

    '&::after': {
      content: '""',
      width: '0%',
      height: '1px',
      backgroundColor: 'white',
      position: 'absolute',
      bottom: '0',
      left: '0',
      marginTop: '2px',
      transition: '.4s',
      transformOriginal: 'left',
    },

    '&:hover::after': {
      width: '80%',
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
      color: theme.black,
    },
  },
}));

export default useStyles;
