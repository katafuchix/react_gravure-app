import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    console.log('componentDidMount()');
    //axios.get(`https://jsonplaceholder.typicode.com/users`)
    axios.get(`http://gravure-api.mine.nu/json/breast.json`)
      .then(res => {
        const persons = res.data;
        console.log(res);
        console.log(res.data);
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="columns is-vcentered is-multiline">
            <ul>
              { this.state.persons.map(person => <li key={person.id}>{person.title}</li>)}
            </ul>
            </div>
          </div>
        </section>
      </div>

    )
  }
}
