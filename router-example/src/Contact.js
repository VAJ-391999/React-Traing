import React from 'react';
import reactDom from 'react-dom';
import {Link, Route} from 'react-router-dom';

const Contacts = ({match}) => <p>{match.params.id}</p>


class Contact extends React.Component {
    render() {
        const {url} = this.props.match
        return (
            <div>
                <h1>Hello I am contact us </h1>
                <ul>
                    <li>
                        <Link to="/Contact/1">Contact1</Link>
                    </li>
                </ul>
                <Route path="/Contact/:id" component={Contacts} />
            </div>
        )
    }
}

export default Contact;