import * as React from 'react';
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"

export default function Film({films}) {
    return(
        <List>
            { Object.values(films).map( film => <ListItem button>
                                                <ListItemAvatar>
                                                    <Avatar src={ film.poster_path } />
                                                </ListItemAvatar>
                                                <ListItemText primary={ film.title } secondary={ film.director } />
                                                <ListItemText primary={film.runtime } />
                                                </ListItem>
                                        )
                            }                            
                        </List>
    )
}