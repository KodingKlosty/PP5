import React,{Component} from 'react'
import Button from '@material-ui/core/Button'
import SearchForm from '../components/form/form';
import DisplayData from '../components/search/searchResults'


class Search extends Component{
    constructor(props){
        super(props);
            this.state={
                step: 1,
                title: '',
                year: '',
                results: [],
                API_URL: '',
        }
    }

        
    dataGrab = e => {
        e.preventDefault()
        if(isNaN(this.state.year)){
            alert('Please Enter a Vaild Year')
        }
        else{
            let API_URL = this.buildAPI(this.state.title, this.state.year)
            this.setAPI(API_URL)
            this.searchDB(API_URL)
            this.nextStep()
            }
        }
    

    buildAPI(title, year){
        console.log("buildAPI" + title + ", " +year)
        let APIdata ="https://api.themoviedb.org/3/search/movie?api_key=4bdef5cad72341a3d9499722476ae05c&include_adult=false&language=en-US&region=us"
        if(year === ''){
            APIdata = APIdata + "&query=" + title
            return(APIdata)
        }
        else{
            APIdata = APIdata + "&query=" + title + "&year" + year
            return(APIdata)
            }
    }
    
    searchDB(API_URL){
        fetch(API_URL)    
            .then(response => response.json())
            .then(recievedData => this.setState({
                results: recievedData.results
            }))
            .catch(function(err){
                console.log("Fetch Error: ", err)
            })
    }

    setAPI = (API_URL) => {
        this.setState({
            API_URL: API_URL
        });
    }

    nextStep = () => {
         const { step } = this.state // destructor state 
         this.setState({
             step: step + 1
         });
    }
     // go back to search field
    prevStep = () => {
        const { step } = this.state // destructor state 
        this.setState({
            step: step - 1
        });
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    addToBinge = id => e =>{
        e.preventDefault()
        const {results} = this.state
        let bList = JSON.parse(localStorage.getItem('watchList')) || []
        let rList = [...results]
        let movieObj = rList.filter(item => item.id === id)
        bList.push(movieObj)
        localStorage.setItem('watchList', JSON.stringify(bList))
        
    }

    render(){
        const {step, title, year} = this.state
        const values = {step, title, year}
            switch(step){
                case 1:
                    return(
                    <div>
                        <h1>Search</h1>
                        <SearchForm 
                            dataGrab = {this.dataGrab}
                            nextStep = {this.nextStep}
                            handleChange = {this.handleChange}
                            values = {values}
                        />
                    </div>
                    )
                case 2:
                return(
                    <div>
                        <h1>Search Results</h1>
                            <Button onClick={this.prevStep}>Back</Button>
                            <DisplayData 
                                results = {this.state.results}
                                addToBinge ={this.addToBinge}
                            />
                        <br/>
                    </div>
                )
            }
    } // End Render
} // End Search

export default Search




