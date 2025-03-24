import React, { Component } from "react";
import Switch from "./Switch";

class App extends Component {
  state = { on: false };
  toggle = () => {
    const isOn = this.state.on;
    this.setState({ on: !isOn });
  };
  render() {
    let wallClass = "wall off";
    if (this.state.on) {
      wallClass = "wall on";
    }
    return (
      <div className={wallClass}>
        <Switch toggle={this.toggle} />
        {/* used the "this" keyword here because I want to update the "toggle" property of the "App" component/object */}
        {/* Used "toggle" as the prop name since its descriptive of what the method (above-toggle) is doing to the light switch */}
        <Switch toggle={this.toggle} />
      </div>
    );
  }
}

export default App;

// This component/module is used to update/manage the state/function of the light switch and is considered the "parent" component since other components are imported into it -> data from the "App" or parent component "flows" downward into the child components, helping them execute/render certain code
