//This form will be used to gather data
import React from 'react'
import RButton from '../button/button'
import {TextField} from '@material-ui/core'



const SearchForm= props => {
    return (
        <form
            onSubmit={props.dataGrab}>
            <TextField 
                id="outlined-title"
                label="Movie Title"
                name='title'
                value={props.title}
                onChange={props.handleChange}
                placeholder="Movie Title" 
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-year"
                label="Year"
                name='year'
                value={props.year}
                onChange={props.handleChange}
                placeholder="Year (Optional)"
                margin="normal"
                variant="outlined"
            />
            <br/>
            <RButton type='submit' btnTxt='Search'/>
        </form>
    )
}

export default SearchForm
