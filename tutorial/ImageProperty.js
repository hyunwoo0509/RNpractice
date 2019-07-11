import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://vignette.wikia.nocookie.net/kpop/images/d/dd/TWICE_Fancy_You_group_promotional_photo.png/revision/latest/scale-to-width-down/700?cb=20190422134838'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}
