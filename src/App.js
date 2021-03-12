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
<img className="pic-book" width="420px" height="247px" src="https://www.fint.co.kr/static/imgs/f-2-i2.png" data-aos-delay="300" data-aos="fade-up"></img>
<img className="pic-phone" width="220px" height="450px" src="https://www.fint.co.kr/static/imgs/f-2-i1.png" data-aos="fade-zoom-in"></img>
<img className="pic-pig" width="220px" height="303px" src="https://www.fint.co.kr/static/imgs/f-2-i-inner.png" data-aos-delay="500" data-aos="zoom-in"></img>
</div>
<div class="item" data-aos="flip-up">8</div>
<div class="item" data-aos="flip-down">9</div>
<div class="item" data-aos="flip-right">10</div>
<div class="item" data-aos="flip-left">11</div>

    </div>
  );
}

export default App;