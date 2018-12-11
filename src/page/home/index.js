import React, { Component } from 'react';
import './index.scss'
class Home extends Component {
  componentDidMount(){
    window.addEventListener('scroll' , function(){
      //do something
      console.log('scroll ....', document.documentElement.scrollTop)
    })
    /*eslint-disable*/
    var mySwiper = new Swiper('.swiper-container', {
      slidesPerView : 1,
      spaceBetween : 20,
      loop: true,
      autoplay: true
    })
  }
  render() {
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
          <span className="active-sub-header">探索</span>
          <span>react-china</span>
        </div>
        <div className="swiper-container-box">
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div className="swiper-slide">
                <div className="img-item" style={{backgroundImage:'url(' +require('../../assets/image/1.jpg') + ')'}}></div>
              </div>
              <div className="swiper-slide">
                <div className="img-item" style={{backgroundImage:'url(' +require('../../assets/image/2.jpg') + ')'}}></div>
              </div>
              <div className="swiper-slide">
                <div className="img-item" style={{backgroundImage:'url(' +require('../../assets/image/3.jpg') + ')'}}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="music-content">
          <div className="home-title">
            音乐
          </div> 
          <ul className="hot-songer">
            <li className="songer-img-item" style={{backgroundImage:'url(' +require('../../assets/image/music1.jpg') + ')'}}></li>
            <li className="songer-img-item" style={{backgroundImage:'url(' +require('../../assets/image/music2.jpg') + ')'}}></li>
            <li className="songer-img-item" style={{backgroundImage:'url(' +require('../../assets/image/music3.jpg') + ')'}}></li>
          </ul>
          <div className="sub-title">
             每日推荐
          </div>
          <ul className="music-list">
             <li className="music-item">
               <div className="left-item">
                 <span>
                    青花瓷
                 </span>
                 -
                 <span>
                   周杰伦
                 </span>
                 </div>
                <div className="right-item">
                  <i className="iconfont icon-bofang"></i>
                  <img src={require('../../assets/image/netease_50.png')}/>
                </div>
             </li>
             <li className="music-item">
               <div className="left-item">
                 <span>
                    青花瓷
                 </span>
                 -
                 <span>
                   周杰伦
                 </span>
                 </div>
                <div className="right-item">
                  <i className="iconfont icon-bofang"></i>
                  <img src={require('../../assets/image/netease_50.png')}/>
                </div>
             </li>
             <li className="music-item">
               <div className="left-item">
                 <span>
                    青花瓷
                 </span>
                 -
                 <span>
                   周杰伦
                 </span>
                 </div>
                <div className="right-item">
                  <i className="iconfont icon-bofang"></i>
                  <img src={require('../../assets/image/netease_50.png')}/>
                </div>
             </li>
             <li className="music-item">
               <div className="left-item">
                 <span>
                    青花瓷
                 </span>
                 -
                 <span>
                   周杰伦
                 </span>
                 </div>
                <div className="right-item">
                  <i className="iconfont icon-bofang"></i>
                  <img src={require('../../assets/image/netease_50.png')}/>
                </div>
             </li>
             <li className="music-item">
               <div className="left-item">
                 <span>
                    青花瓷
                 </span>
                 -
                 <span>
                   周杰伦
                 </span>
                 </div>
                <div className="right-item">
                  <i className="iconfont icon-bofang"></i>
                  <img src={require('../../assets/image/netease_50.png')}/>
                </div>
             </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
