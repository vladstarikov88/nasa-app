import React, { PureComponent } from 'react';
import Planet from 'common/components/Planet/Planet';
import { IPlanet } from 'lib/models';

export default class Home extends PureComponent<{}, { 
  isLoading: boolean, data: IPlanet 
}> {
  state = {
    apiLink: 'https://api.nasa.gov/planetary/apod?',
    apiKey: 'mtSYdud5tT2ski8aMrDujU7SJEFXSCD1Sw4b43P6',
    isLoading: false,
    data: {
      title: '',
      explanation: '',
      url: '',
    },
  }


  componentDidMount() {
    const { apiLink, apiKey } = this.state;

    this.setState({
      isLoading: true
    })
    fetch(`${apiLink}api_key=${apiKey}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res
        });
      })
      .then(res => {
        this.setState({
          isLoading: false
        })
      })
  }

  render() {
    const { isLoading } = this.state;
    const { title, explanation, url } = this.state.data;

    console.log(this.state.data)
    return (
      <div>
        <h1>Home</h1>

        {
          (isLoading) ?
           <p>Loading...</p>   
           : 
           <Planet 
           title={title} 
           explanation={explanation}
           url={url}
         />
        }
      </div>
    )
  }
}