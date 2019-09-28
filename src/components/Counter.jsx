import React, { Component, Fragment } from "react";

class Counter extends Component {
  state = {
    value: this.props.value

  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    })
  }

  render() {
    return (
      <Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm">Increment</button>

        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2">Delete
        </button>
      </Fragment >
    );
  }

  formatCount() {
    const { value } = this.state;

    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.state.value === 0 ? "success" : "primary";
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
