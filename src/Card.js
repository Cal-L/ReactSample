import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.card}></div>
    );
  }
}

const styles = {
  card: {
    margin: 10,
    height: 75,
    width: 50,
    backgroundColor: 'pink',
    borderRadius: 10,
  }
}

export default Card;
