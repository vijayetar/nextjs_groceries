import React from 'react'

export default class GroceryForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const newName = event.target.value;
        this.setState({
            name: newName,
        })

    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onGroceryCreate(this.state);
        this.setState({name:''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                    name="grocery-name" type="text" value={this.state.name} onChange={this.handleChange}>
                    </input>
                </label>

                <button>ok</button>
            </form>
        )
    }
}