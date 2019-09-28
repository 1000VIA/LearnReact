import React, { Component, Fragment } from "react";

class Counter extends Component {
  render() {
    return (
      <Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm">Increment</button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2">Delete
        </button>
      </Fragment >
    );
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "success" : "primary";
    return classes;
  }

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

}

export default Counter;
