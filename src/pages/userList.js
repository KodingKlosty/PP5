import React,{Component} from 'react'
import WatchList from '../components/lists/bingeList'

class BingeList extends Component{
    constructor(props){
        super(props);
            this.state ={
                userList: []
            }
    }

    render(){
        let watchlist = JSON.parse(localStorage.getItem('watchList'))
        for(let x = 0; x < watchlist.length; x++)
        {   
            let movDataArr = watchlist[x]
            for(let y = 0; y < movDataArr.length; y++)
            {
                this.state.userList.push(movDataArr[y])            
            }
        }
        return(
            <div>
                <h1>Binge List</h1>
                <WatchList 
                userList = {this.state.userList}
                />
            </div>
        )
    }
}

export default BingeList 