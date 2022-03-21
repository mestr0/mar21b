

import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import Avatar from "@mui/material/Avatar"


let messages = [
    {
        nome:'Laura',
        testo: 'Ti lovvo!',
        immagine: "images/zqcca.jpg"
    },
    {
        nome:'Paola',
        testo: 'Sei strafigo',
        immagine: "images/pizfn.png"
        
    },
    {
        nome:'Simona',
        testo: 'Sei libero stasera? Ho casa libera.',
        immagine: "images/andytk.png"
    },
]

export default function Messaggi() {
    return (
        <List>
            { messages.map( messaggio => <ListItem button>
                                                <ListItemAvatar>
                                                    <Avatar src={ messaggio.immagine } />
                                                </ListItemAvatar>
                                                <ListItemText primary={ messaggio.nome } secondary={ messaggio.testo } />
                                                </ListItem>
                                        )
                            }                            
                        </List>
    )
}