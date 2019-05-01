import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import {Paper, Tabs, Tab} from '@material-ui/core'
import Home from '../../pages/home'
import Search from '../../pages/search'
import BingeList from '../../pages/userList'
import About from '../../pages/about'
import { Divider } from '@material-ui/core';

function PageSelect() {
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue)
    }

    return (
        <BrowserRouter>
            <Paper>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    >
                    <Tab label="Search" component={Link} to='/search' />
                    <Tab label="Binge List" component={Link} to='/userList' />
                </Tabs>
                <Divider />
                <Switch>
                    <Route exact path='/' component={Search} />
                    <Route exact path='/search' component={Search} />
                    <Route exact path='/userList' component={BingeList} />
                    <Route exact path='/about' component={About} />
                </Switch>
            </Paper>
        </BrowserRouter>
    );

} // End of pageSelect

export default PageSelect


/*
<Tab label="Home" component={Link} to='/' />
<Tab label="About" component={Link} to='/about' />

*/
 