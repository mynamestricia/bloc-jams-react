import React, { Component } from 'react';

class Albums extends Component {
  render() {
    return (
      <section className="albums">
        {this.props.match.params.slug} Album will go here
      </section>
    );
  }
}

export default Albums;
