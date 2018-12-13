import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Probe from './probe';
import reactDoc from './reactDoc';
import './index.scss'
class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      subNav: {
        probe: false,
        react: true
      }
    }
  }
  componentDidMount(){
    window.addEventListener('scroll' , ()=>{
      //do something
      // console.log('scroll ....', this.props)
    })
  }
  render() {
    console.log(this.props)
    return (
      <div className="home-com">
        <div className="app-header">
          <div className="app-title">Goger's blog</div> 
          <ul className="icon-box">
            <li className="iconfont icon-sousuo"></li>
            <li className="iconfont icon-ziyuan"></li>
            <li className="iconfont icon-xiaoxi"></li>
          </ul>
        </div>
        <div className="sub-app-header">
          <span className={this.state.subNav.probe ? "active-sub-header" : ''}>探索</span>
          <span className={this.state.subNav.react ? "active-sub-header" : ''}>react-china</span>
        </div>
        <Route path="/" exact component={Probe} />
        <Route path="/react" component={reactDoc} />
      </div>
    );
  }
}

export default Home;
