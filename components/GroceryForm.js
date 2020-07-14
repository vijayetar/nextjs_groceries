import React from 'react'

export default class GroceryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            price: '',
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {

        const newName = event.target.value;
        this.setState({
            name: newName,
        })

    }
    handleChangePrice(event) {

        const newPrice = event.target.value;
        this.setState({
            price: newPrice,
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onGroceryCreate(this.state);
        this.setState({name:'', price:''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                    name="grocery-name" type="text" value={this.state.name} onChange={this.handleChangeName}>
                    </input>
                </label>
                <label>
                    Price:
                    <input
                    name="grocery-name" type="text" value={this.state.price} onChange={this.handleChangePrice}>
                    </input>
                </label>

                <button className="btn-pink">ok</button>
            </form>
        )
    }
}