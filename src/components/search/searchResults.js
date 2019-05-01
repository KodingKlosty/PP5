import React from 'react'
import { Card, CardMedia, CardActions, CardContent, CardHeader,} from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import {FaPlusCircle} from 'react-icons/fa'
import { Divider } from '@material-ui/core';

const DisplayData = props =>
{
        return(
            <div>
                {props.results.map(data => 
                    <div key={data.id}>
                       <Card style={styles.card}>
                            <CardHeader 
                            title={data.title}/>
                            <Divider/>
                            <CardMedia
                            style={styles.media}
                            component="img"
                            image={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                            />
                            <Divider/>
                            <CardContent>
                                <Typography variant='subtitle1'>
                                    Rating: {data.vote_average}
                                </Typography>
                                <Typography variant='body2'>
                                    Overview: {data.overview}
                                </Typography>
                            </CardContent>
                            <Divider/>
                            <CardActions>
                                    <IconButton 
                                    onClick={props.addToBinge(data.id)}>
                                        <FaPlusCircle style={styles.plus} />
                                    </IconButton>
                            </CardActions>
                       </Card>
                       <br/>
                    </div>
                )}
            </div>

        )
    }




export default DisplayData;


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
