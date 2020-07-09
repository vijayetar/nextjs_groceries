import React from 'react'
import axios from 'axios'
import qs from 'qs'
import Nav from '../components/Nav'
import GroceryForm from '../components/GroceryForm'
import GroceryItem from '../components/GroceryItem'

const url = 'https://groceries-fun-api.herokuapp.com/api/v1/groceries/';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            groceries: props.groceries
        }
        this.groceryCreateHandler = this.groceryCreateHandler.bind(this);
    };

    async groceryCreateHandler(grocery) {
        const config = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        };
        grocery['user']= 1;
        // grocery['price']=100;
        console.log("grocery", grocery)
        const response = await axios.post(url, qs.stringify(grocery), config);
        const savedGrocery = response.data;

        const updatedGroceries = this.state.groceries.concat(savedGrocery);
        console.log('updatedGroceries IS:', updatedGroceries)
        
        this.setState({
            groceries: updatedGroceries
        })

    }

    render() {
        return (
            <div className="container">
                <Nav page="home"/>
                <h1>Groceries Home</h1>
                <ul>
                    {this.state.groceries.map(grocery => <GroceryItem key={grocery.id} grocery={grocery}/>)}
                </ul>
                <GroceryForm onGroceryCreate={this.groceryCreateHandler} />

            </div>
        )
    }
}

export default Home

// export async function getStaticProps() {
export async function getServerSideProps() {

    const response = await fetch(url);
    const groceries = await response.json();
    return {
        props: {
            groceries: groceries,
        },
    }
}
