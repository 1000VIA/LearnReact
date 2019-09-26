import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    conunt: 0,
    tags: []
  };

  //   formatCount() {
  //     const { conunt } = this.state;

  //     return conunt === 0 ? "Zero" : conunt;
  //   }

  //   getBadgeClasses() {
  //     let classes = "badge m-3 badge-";
  //     classes += this.state.conunt === 0 ? "success" : "primary";
  //     return classes;
  //   }

  renderTag() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li className="list-point" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <Fragment>
        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button> */}
        {this.state.tags.length === 0 && "Plase create a new tag!"}
        {this.renderTag()}
      </Fragment>
    );
  }
}

export default Counter;
