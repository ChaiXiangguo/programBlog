import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <footer className="app-footer">
          <ul className="footer-nav">
            <li className="active">
              <i className="iconfont icon-faxian"></i>
              <div>发现</div>
            </li>
            <li>
              <i className="iconfont icon-jishiben"></i>
              <div>goger记</div>
            </li>
            <li>
              <i className="iconfont icon-wode"></i>
              <div>我的</div>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;
