import { useEffect, useRef } from 'react';
import fe from '../images/Fe.png'
import VanillaTilt from 'vanilla-tilt';

export interface ElementInfo {
    number: number;
    ab: string;
    full_name: string;
    molar: number;
    class: string;
}
function FloatCard(props: {info: ElementInfo}) {
    const tilt = useRef(null);
    /* 
    {
      reverse:           false,  // reverse the tilt direction
      max:               35,     // max tilt rotation (degrees)
      perspective:       1000,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:             1,      // 2 = 200%, 1.5 = 150%, etc..
      speed:             300,    // Speed of the enter/exit transition
      transition:        true,   // Set a transition on enter/exit.
      axis:              null,   // What axis should be disabled. Can be X or Y.
      reset:             true,   // If the tilt effect has to be reset on exit.
      easing:            "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
      glare:             false,   // if it should have a "glare" effect
      "max-glare":       1,      // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
      "glare-prerender": false   // false = VanillaTilt creates the glare elements for you, otherwise
                                 // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
  } */
    const options = {
        scale: 1.2,
        speed: 1000,
        max: 50,
    };

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return (
        <>
            <div ref={tilt} className={`card ${props.info.class}`} data-tilt>
                <div className="product">
                    <span className="show">
                        <span className="number">{props.info.number}</span>
                        <span className="ab">{props.info.ab}</span>
                    </span>
                    <span className="hide">
                        <span className="full-name">{props.info.full_name}</span>
                        <img src={fe} />
                        <div className='molar'>{props.info.molar}</div>
                    </span>
                </div>
            </div>
        </>
    )
}

export default FloatCard
