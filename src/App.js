import logo from './logo.svg';
import './App.scss';
import React, {useEffect} from 'react';
import AOS from 'aos';

const App=()=> {
  useEffect(() => {
    AOS.init({
      duration : 2000,
      easing: 'ease-in-out-back'
    });
  }, []);

  return (
    <div className="App">
      <div class="item" data-aos="fade-up">1</div>
<div class="item" data-aos="fade-down">2</div>
<div class="item" data-aos="fade-right">3</div>
<div class="item" data-aos="fade-left">4</div>

<div class="item" data-aos="zoom-in">5</div>
<div class="item" data-aos="zoom-out">6</div>

<div class="item" data-aos="slide-up">7</div>
<div className="pic-container">
<img className="pic-book" width="420px" height="247px" src="https://www.fint.co.kr/static/imgs/f-2-i2.png" data-aos-easing='ease' data-aos-delay="300" data-aos="fade-up"></img>
<img className="pic-phone" width="220px" height="450px" src="https://www.fint.co.kr/static/imgs/f-2-i1.png" data-aos="fade-zoom-in"></img>
<img className="pic-pig" width="220px" height="303px" src="https://www.fint.co.kr/static/imgs/f-2-i-inner.png" data-aos-delay="500" data-aos="zoom-in"></img>
<div className="pic-txt" data-aos="fade-up"><span>소액으로도<br></br> 쉽고 간편하게<br></br> 글로벌 분산투자</span></div>
<div className="pic-txt2" data-aos="fade-up"><span>투자의 경험이 없는 사람도 최저 금액<br></br>20만원으로 가볍게 국내외 다양한 ETF에<br></br>투자할 수 있습니다</span></div>
</div>
<div class="item" data-aos="flip-up">8</div>
<div class="item" data-aos="flip-down">9</div>
<div class="item" data-aos="flip-right">10</div>
<div class="item" data-aos="flip-left">11</div>

    </div>
  );
}

export default App;