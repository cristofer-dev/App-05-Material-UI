import React, { Component } from 'react';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Drawer from '@material-ui/core/Drawer';
import MailIcon from '@material-ui/icons/Mail';

import Assessment from '@material-ui/icons/Assessment';
import Giftcard from '@material-ui/icons/CardGiftcard';
import Business from '@material-ui/icons/Business';

import Badge from '@material-ui/core/Badge';

import red from '@material-ui/core/colors/red';
const red3 = red[500]; // #F44336
const secondary = red[500]; // #F44336
import classNames from 'classnames';

class MyDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { theme, toolBar, classes, myClassName } = this.props;

    return (
      <Drawer
        variant="permanent"
        className={myClassName}
        classes={classes}
        open={this.props.open}
      >
        <div className={toolBar}>
          <IconButton onClick={this.props.handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <Badge color="secondary" badgeContent={4} invisible={false}>
                <Assessment />
              </Badge>
            </ListItemIcon>
            <ListItemText primary={'Reportes'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Badge color="primary" badgeContent={99} invisible={false}>
                <Giftcard />
              </Badge>
            </ListItemIcon>
            <ListItemText primary={'Premios'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Business />
            </ListItemIcon>
            <ListItemText primary={'Negocio'} />
          </ListItem>
        </List>

        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

export default MyDrawer;
