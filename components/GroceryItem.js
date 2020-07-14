import Link from 'next/link'
import styles from './scss/GroceryItem.module.scss'

export default function GroceryItem(props) {
    return (
        <>
            <li className={styles.groceryName} key={props.grocery.id}>
                <Link href="/groceries/[id]" as={`/groceries/${props.grocery.id}`}>
                    <a>
                        {props.grocery.name}
                    </a>
                </Link>
            </li>
            <li className={styles.groceryPrice}>
                ${props.grocery.price}
            </li>
        </>
    )
}