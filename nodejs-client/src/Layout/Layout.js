import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import './Layout.css';
import { MenuItem, MenuList, Button } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import * as authAction from '../Redux/actions/auth';
import * as actiontype from '../Redux/actions/actionType';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
      paddingLeft: theme.spacing(4),
  },
  logoutButton: {
    marginLeft: theme.spacing(10)
  },
  title:{
    flexGrow: 1
  }
}));

const Layout = (props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const history = useHistory();

  const dispatch = useDispatch();
  const myState = useSelector(state => {
    return state.auth
  })

  console.log("Layout",myState.isAuthentication, myState.currentUserName)

  const logoutHandler = () => {
    axios.get('http://localhost:4000/app/logout', { withCredentials: true })
    .then(res => {
      console.log(res.data.msg)
      dispatch(authAction.isAuth(false))
      dispatch(authAction.currentUser(""))
      history.replace("/")
    })
    .catch(err => console.log(err.message))

  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
        <MenuList>
            <MenuItem component={Link} to="/dashboard">
                Dashboard
            </MenuItem>
            <MenuItem component={Link} to="/myworkspace">
                My Workspace
            </MenuItem>
            <MenuList className={classes.nested}>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => {
                return <MenuItem key={index} component={NavLink} to={`/${text.toLowerCase()}`}>{text}</MenuItem>
            } )}
            </MenuList>
        </MenuList>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Weather Details
          </Typography>
          <Button variant="contained" onClick={logoutHandler} >Logout</Button>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;