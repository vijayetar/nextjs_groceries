import Link from 'next/link'

export default function GroceryItem(props) {
    return (
        <li key={props.grocery.id}>
            <Link href="/groceries/[id]" as={`/groceries/${props.grocery.id}`}>
                <a>
                    {props.grocery.name}
                </a>
            </Link>
        </li>
    )
}