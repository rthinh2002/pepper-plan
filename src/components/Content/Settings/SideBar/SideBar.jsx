import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import { sideBarItems } from '../setting';

import Logo from '../../../Layout_Components/Logo/Logo';

const SideBar = ({ open, onClose }) => {
    const urlLocation = window.location.pathname;
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': { 
                    backgroundColor: '#073138', 
                    color: 'white',
                    width: 280, 
                    float: 'left'
                },
            }}
        >
            <Box sx={{marginBottom: 3}}>
                <Logo color={'white'} />
            </Box>
            <List>
                {sideBarItems.map((item, index) => (
                        <ListItem 
                            key={item.name} 
                            onClick={onClose}
                            sx={{
                                backgroundColor: urlLocation === item.path ? 'white' : 'transparent',
                                color: urlLocation === item.path ? '#073138' : 'white',
                                borderTopLeftRadius: 50,
                                borderBottomLeftRadius: 50,
                            }}
                        >
                            <ListItemIcon> 
                                <img src={item.icon} alt={item.name} style={{ width: '32px', height: '32px' }} />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default SideBar;