import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    //add classes for buttons
    /**
     * orange           ===>>> orange color
     * wide             ===>>> wide width for [0] button
     * component-button ===>>> for all buttons
     */
    const className = ["component-button",this.props.orange ? "orange" : "",this.props.wide ? "wide" : "",];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}
