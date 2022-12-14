import React from "react";
import axios from "axios";

class PersonData extends React.Component {
  state = {
    persons: [],
  };
  // if we use button, we don't have to use "componentDidMount()", We have to use the 'onclick function' like "submit()"
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch((err) => {
        console.log("error :" + err);
      });
  }
  render() {
    return (
      <div>
        <h3>PERSON DATA :</h3>

        {this.state.persons.map((item) => {
          return (
            <ul type="square">
              <li>{item.id}</li>
              <li>{item.username}</li>
              <li>{item.email}</li>
              <li>{item.address.street}</li>
              <li>{item.address.city}</li>
              <li>{item.address.geo.lat}</li>
              <li>{item.website}</li>
              <li>{item.company.name}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default PersonData;
