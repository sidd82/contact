import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
            return {
                // ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                // ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Rakrishna Pednekar',
                email: 'psiddhesh14@gmail.com',
                phone: 555-5555-555
            },
            {
                id: 2,
                name: 'Kalpesh Sawant',
                email: 'kalpesh@gmail.com',
                phone: 8888-8888-88
            },
            {
                id: 3,
                name: 'Kartish Pitale',
                email: 'kartish@gmail.com',
                phone: 999-9999-9999
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
