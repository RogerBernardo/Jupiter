import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  List,
  Toolbar,
  ListItem
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import Content from '../../components/Content';
import owlIcon from '../../assets/owl.svg';
import { data } from '../../data/data.json';
import { useStyles } from './styles';

function Home(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [showCategory, setShowCategory] = useState('Tudo');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  
  const drawer = (
    <div>
      <img src={ owlIcon } alt="Atena" id="logo-drawer" />
      <List>
        <ListItem button onClick={ () => setShowCategory('Tudo') }>
          Tudo
        </ListItem>
        {
          data.map((link, index) => {
            return (
              <ListItem button key={ index } onClick={ () => setShowCategory(link.category) }>
                {
                  link.category
                }
              </ListItem>
            );
          })
        }
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={ classes.root }>

      <AppBar position="fixed" className={ classes.appBar }>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={ handleDrawerToggle }
            className={ classes.menuButton }
          >
            <MenuIcon />
          </IconButton>
          <h1>Atena</h1>
        </Toolbar>
      </AppBar>

      <nav className={ classes.drawer } aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */ }
        <Hidden smUp implementation="css">
          <Drawer
            container={ container }
            variant="temporary"
            anchor={ theme.direction === 'rtl' ? 'right' : 'left' }
            open={ mobileOpen }
            onClose={ handleDrawerToggle }
            classes={ {
              paper: classes.drawerPaper,
            } }
            ModalProps={ {
              keepMounted: true, // Better open performance on mobile.
            } }
          >
            { drawer }
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={ {
              paper: classes.drawerPaper,
            } }
            variant="permanent"
            open
          >
            { drawer }
          </Drawer>
        </Hidden>
      </nav>

      <main className={ classes.content }>
        <div className={ classes.toolbar } />

        <Content category={ showCategory } />
        
      </main>
    </div>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;