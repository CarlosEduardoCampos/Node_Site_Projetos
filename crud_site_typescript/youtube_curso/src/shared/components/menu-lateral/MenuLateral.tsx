import { Box } from '@mui/system';
import { useTheme, Drawer, Avatar, Divider, List, ListItemButton, ListItemIcon, ListItemText, Icon, useMediaQuery } from '@mui/material';
import { useDrawerContext } from '../../contexts';

export const MenuLateral: React.FC <{children: React.ReactNode}> = ({ children }) => {
    // Recebe caracteristicas do tema atual:
    const theme = useTheme();

    // Cofinguração de responsividade:
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    // Contexto de tamanho de tela:
    const {isDrawerOpen, toggleDrawerOpen} = useDrawerContext();

    return(
        <>
            <Drawer 
                open={isDrawerOpen}
                variant={smDown?'temporary':'permanent'}
                onClose={toggleDrawerOpen}
            >
                <Box 
                    width={theme.spacing(28)}
                    height='100%'
                    display='flex'
                    flexDirection='column'
                >
                    <Box 
                        width='100%'
                        height={theme.spacing(20)}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Avatar
                            sx={{height:theme.spacing(10), width:theme.spacing(10)}}
                            src='#'
                        />
                    </Box>
                    <Divider/>
                    <Box
                        flex={1}
                    >
                        <List component='nav'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Página Inicial'/>
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>

            <Box height='100vh' marginLeft={smDown?0:theme.spacing(28)}>
                {children}
            </Box>
        </>
    );
};