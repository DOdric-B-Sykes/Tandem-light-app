import React, { Component } from "react";

const Switch = (props) => (
  <div className="switch-plate">
    <div className="screw" />
    <div className="switch" onClick={props.toggle}>
      {/* Why use "props.toggle" here - When you pass a method down to a child component as a prop, you access and use that method through the props object in the child component. So in order for the Switch component to access and utilize the functionality of the `toggle` method passed down as a prop, you would refer to it as `props.toggle` within the Switch component. */}
      {/* By adding the "onClick" event listener to the "switch" class name div, I'm specifying that I want the event listener to "listen" for when the this element is clicked and target the event handler to be "handled" */}
      <div className="switch-handle" />
    </div>
    <div className="screw" />
  </div>
);

export default Switch;

// This component/module is used to render the physical appearance of the light switch and is considered the "child" component since its exported/imported into the "App" component
