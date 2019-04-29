import React, { PureComponent } from 'react';
import Planet from 'common/components/Planet/Planet';
import { IPlanet } from 'lib/models';

export default class Home extends PureComponent<{}, { data: IPlanet }> {
  state = {
    api_link: 'https://api.nasa.gov/planetary/apod?',
    api_key: 'mtSYdud5tT2ski8aMrDujU7SJEFXSCD1Sw4b43P6',
    data: {
      title: '',
      explanation: '',
      url: ''
    },
  }


  componentDidMount() {
    const {api_link, api_key} = this.state;

    fetch(`${api_link}api_key=${api_key}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res
        });
      })
  }

  render() {
    const {title, explanation, url} = this.state.data;

    console.log(this.state.data)
    return (
      <div>
        <h1>Home</h1>

        <Planet 
          title={title} 
          explanation={explanation}
          url={url}
        />
      </div>
    )
  }
}