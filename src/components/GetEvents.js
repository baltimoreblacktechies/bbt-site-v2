import React from 'react'
import axios from 'axios'

export default class GetEvents extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(
      'https://api.meetup.com/Baltimore-Black-Techies-Meetup' +
      '/events?&sign=true&photo-host=public&page=3')
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  render() {
    return (
      <ul>
        { this.state.data.map(data => <li>{data}</li>)}
      </ul>
    )
  }
}
