import React from 'react'
import {Card, CardMedia, Divider, CardActions, IconButton} from '@material-ui/core'
import { FaTrash } from 'react-icons/fa';
 
const WatchList = props => {

    return(
        <div>
            {props.userList.map(data => 
            <div key={data.id}>
                <Card style={styles.card}>
                    <CardMedia
                        style={styles.media}
                        component="img"
                        image={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                    /> 
                </Card>
                <br/>
            </div>)}
        </div>
    )
}

export default WatchList

const styles = 
{
    card: {
        height: 'auto',
        width: '500px',
        margin: 'auto'
    },
    media: {
        width: '200px',
        margin: 'auto',  
        padding: "3px"      
    },
    plus:{
        margin: 'auto',
        color: 'green'
    }
}

/*
                    <Divider />
                    <CardActions>
                        <IconButton>
                            <FaTrash />
                        </IconButton>
                    </CardActions>
*/