import React from 'react'
import axios from 'axios'
import Nav from '../components/Nav'
import GroceryForm from '../components/GroceryForm'
import GroceryItem from '../components/GroceryItem'
import styles from '../components/scss/Home.module.scss'
import Footer from '../components/Footer'

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
        grocery['user']= 1;
        // grocery['price']=100;
        const response = await axios.post(url, grocery);
        const savedGrocery = response.data;

        const updatedGroceries = this.state.groceries.concat(savedGrocery);
        console.log('updatedGroceries IS:', updatedGroceries)

        this.setState({
            groceries: updatedGroceries
        })

    }

    render() {
        return (
          <>
            <div className="container" className={styles.homepage}>
                <Nav page="home"/>
                <h1>Groceries List</h1>
                <ul className={styles.listitems}>
                    {this.state.groceries.map(grocery => <GroceryItem key={grocery.id} grocery={grocery}/>)}
                </ul>
                <GroceryForm onGroceryCreate={this.groceryCreateHandler} />

            </div>
            <Footer />
          </>
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
