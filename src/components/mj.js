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
setAnswer(Math.floor(Math.random() * replys.length));
};


return (
<div>

  <div>
    <div className="container">
      <input type="text" 
      placeholder="Stil dit spørgsmål"
      />
      
      <button onClick={randomAnswers}>
        Se dit svar
      </button>
    </div>
    <div className="ball">
      <div className="black-outer">
        <div className="white-inner">
          <div>
            <div className='center'>{replys[answer].reply}</div>
          </div>

        </div>
      </div>
      <div className="shadow"></div>
    </div>

  </div>
</div>
);
}
export default MagicEightBall
