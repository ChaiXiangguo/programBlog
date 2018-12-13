import React, { Component } from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
import Home from '../home';
import Blog from '../blog';
import User from '../user';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      momentPage: {
        home: true,
        blog: false,
        user: false
      }
    };
  }
  componentWillReceiveProps (nextProps) {
    switch(nextProps.location.pathname) {
      case '/':
        this.setState({
          momentPage: {
            home: true,
            blog: false,
            user: false
          }
        })
       break;
      case '/blog':
        this.setState({
          momentPage: {
            home: false,
            blog: true,
            user: false
          }
        })
       break;
      default:
       this.setState({
        momentPage: {
          home: false,
          blog: false,
          user: true
        }
      })
    }
  }
  gopath (type) {
    switch(type)
      {
      case 'home':
        this.props.history.push('/')
        break;
      case 'blog':
        this.props.history.push('/blog')
        break;
      default:
        this.props.history.push('/user')
      }  
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/user" component={User} />
        </Switch>
        <footer className="app-footer">
          <ul className="footer-nav">
            <li className={this.state.momentPage.home ? 'active' : ''} onClick={this.gopath.bind(this,'home')}>
              <i className="iconfont icon-faxian"></i>
              <div>发现</div>
            </li>
            <li className={this.state.momentPage.blog ? 'active' : ''} onClick={this.gopath.bind(this,'blog')}>
              <i className="iconfont icon-jishiben"></i>
              <div>goger记</div>
            </li>
            <li className={this.state.momentPage.user ? 'active' : ''} onClick={this.gopath.bind(this,'user')}>
              <i className="iconfont icon-wode"></i>
              <div>我的</div>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
