import { useRouter } from 'next/router'
import axios from 'axios'
import Nav from '../../components/Nav'

export default function GroceryDetail(props) {

    const url = 'https://groceries-fun-api.herokuapp.com/api/v1/groceries/';

    const router = useRouter();

    async function deleteHandler() {

        const response = await axios.delete(url + props.grocery.id)

        router.push('/');
    }

    return (
        <>
          <Nav page="detail"/>
          <main className="update">
          <h1>I am a single grocery {props.grocery.name}</h1>
          <p>My price is {props.grocery.price}</p>
          <button class="btn-pink" onClick={() => deleteHandler(props.grocery.id)}>Delete</button>
          </main>
        </>
    )
}

export async function getServerSideProps(context) {
    const response = await fetch(`https://groceries-fun-api.herokuapp.com/api/v1/groceries/${context.params.id}`);
    const grocery = await response.json();
    console.log('grocery',grocery)
    return {
        props: {
            grocery
        }
    }
}
