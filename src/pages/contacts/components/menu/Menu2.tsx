import * as React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks';
import State from '../../../../mobX/State';

type MenuPropsType = {
    id: string;
};

const MenuPopupState: React.FC<MenuPropsType> = ({ id }) => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });

    const redact = () => {
        State.openRedactModal(id);
    };

    const remove = () => {
        const status: boolean = confirm('Удалить?');
        if (status) State.removeContact(id);
    };

    return (
        <div>
            <Button variant="contained" {...bindTrigger(popupState)}>
                Open Menu
            </Button>
            <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>
                    <div onClick={redact}>Redact</div>
                </MenuItem>
                <MenuItem onClick={popupState.close}>
                    <div onClick={remove}>Remove</div>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default MenuPopupState;
