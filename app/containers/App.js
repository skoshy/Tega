// @flow
import * as React from 'react';
import { TitleBar } from 'electron-react-titlebar';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <TitleBar>
          <span>Test</span>
        </TitleBar>
        {this.props.children}
      </div>
    );
  }
}
