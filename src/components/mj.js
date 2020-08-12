import React, {useState} from 'react';
import './style.css'


const MagicEightBall=()=> {

const replys = [
{
reply: "8"
},
{
reply: "Helt sikkert"
},
{
reply: "Uden tvivl"
},
{
reply: "100%"
},
{
reply: "Selvfølgelig"
}
];

const [answer, setAnswer] = useState(0);

const randomAnswers = e => {
const len = replys.length;
setAnswer(Math.floor(Math.random() * len));
};


return (
<div>

  <div>

    <div className="question-container">
      <input type="text" placeholder="Stil dit spørgsmål" />
      <button onClick={randomAnswers}>
        se dit svar
      </button>
    </div>

    <div className="ball-container">
      <div className="ball-black-outer">
        <div className="ball-white-inner">
          <div>
            <div className='eight'>{replys[answer].reply}</div>
          </div>

        </div>
      </div>
      <div className="ball-shadow"></div>
    </div>

  </div>
</div>
);
}
export default MagicEightBall