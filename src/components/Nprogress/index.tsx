import React from "react";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

export default class Nprogress extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    console.log(0);
    nprogress.start();
  }
  componentWillUnmount() {
    nprogress.done();
  }
  render() {
    return <React.Fragment></React.Fragment>;
  }
}