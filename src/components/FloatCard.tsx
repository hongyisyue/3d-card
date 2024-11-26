import { useEffect, useRef } from 'react';
import vapor from '../images/NIKEVAPOR11.png'
import VanillaTilt from 'vanilla-tilt';

function FloatCard() {
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
        speed: 1000,
        max: 50,
        glare: 1.8
  };

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return (
        <>
            <div ref={tilt} className="card blue" data-tilt>
                <div className="product">
                    <span className="number">01</span>
                    <span className="sneakers">SNEAKER</span>
                    <span className="price">$39.9</span>
                    <img src={vapor} />
                </div>
                <div className="title">
                    <h2>Vapor Pro 11</h2>
                </div>
            </div>
        </>
    )
}

export default FloatCard
