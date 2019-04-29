import React, { PureComponent } from 'react';

import style from './planet.scss';
import { IPlanet } from 'lib/models';



export default class Planet extends PureComponent<IPlanet>{

  render() {
    const {title, explanation, url} = this.props;
    return (
      <div className={style.planet}>
        <h3 className={style.title}>{title}</h3>
        <div className={style.img__container}>
          <img className={style.img__picture} src={url} />
        </div>
        <p className={style.description}>{explanation}</p>
      </div>
    )
  }
}
