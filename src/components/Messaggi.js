

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"

export default function Messaggi() {
    return (
        <List>
            <ListItem button >
                <ListItemAvatar>
                    <Avatar src="" />
                </ListItemAvatar>
                <ListItemText primary="Anna" secondary="Ciao, come stai mi manchi!"/>
            </ListItem>
            <ListItem button >
            <ListItemAvatar>
                    <Avatar src="" />
                </ListItemAvatar>
                <ListItemText primary="Anna" secondary="Ciao, come stai mi manchi!"/>
            </ListItem>
            <ListItem button >
            <ListItemAvatar>
                    <Avatar src="" />
                </ListItemAvatar>
                <ListItemText primary="Anna" secondary="Ciao, come stai mi manchi!"/>
            </ListItem>
        </List>
    )
}