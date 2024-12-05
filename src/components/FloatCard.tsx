import { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { AllItemInfo, isChemElement } from '../utils/Typs';

function FloatCard(props: { info: AllItemInfo }) {
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

    const tilt = useRef(null);
    const [activeImg, setActiveImg] = useState(0);
    const [previousImage, setPreviousImage] = useState<number | null>(null);
    // const [direction, setDirection] = useState("in");

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
        // setDirection("in");
        const interval = setInterval(() => {
            setPreviousImage(activeImg);
            setActiveImg((prev) => (prev + 1) % props.info.imgs.length);
            // setDirection("out");
        }, 2000);
        return () => clearInterval(interval);
    }, [options]);
    if (isChemElement(props.info)) {
        return (
            <>
                <div
                    data-tilt
                    ref={tilt}
                    className={`card ${props.info.color_class}`}
                    onMouseEnter={() => setActiveImg(0)}
                    onMouseLeave={() => setActiveImg(0)}
                >
                    <div className="product">
                        <span className="show">
                            <span className="number">{props.info.number}</span>
                            <span className="ab">{props.info.ab}</span>
                        </span>
                        <span className="hide">
                            <span className="full-name">{props.info.full_name}</span>
                            {props.info.imgs.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    className={
                                        index == activeImg
                                            ? "in" // The current image gets the "in" class
                                            : index == previousImage
                                                ? "out" // The previous image gets the "out" class
                                                : "hidden" // All other images are hidden
                                    }
                                />
                            ))}
                            <div className='molar'>{props.info.molar}</div>
                        </span>
                    </div>
                </div>
            </>
        )
    }
}

export default FloatCard
