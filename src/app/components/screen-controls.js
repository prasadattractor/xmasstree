

import ProgressTimer from '.././components/progress-timer'
import ColorPicker from '.././components/color-picker'
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';


export default function ScreenControls() {

    const baseColor="#ffffff ";
    const [colorTopStar, setColorTopStar] = useState(baseColor);
    const [colorTreeStar, setColorTreeStar] = useState(baseColor);
    const [colorTreeStar2, setColorTreeStar2] = useState(baseColor);
    const [colorGrandLandStar, setColorGrandLandStar] = useState(baseColor);
    const [colorFenceStar, setColorFenceStar] = useState(baseColor);
    const [colorHoopsStar, setColorHoopsStar] = useState(baseColor);
    const [centerImagePath, setImagePath] = useState('/img/center/tree-stars.svg');

    const divRefTopStar = useRef(null);
    const divRefTreeStar = useRef(null);
    const divRefTreeStar2 = useRef(null);
    const divRefGrandLandStar = useRef(null);
    const divRefFenceStar = useRef(null);
    const divRefHoopsStar = useRef(null);

    const handleColorChange = (newColor) => {
       
        if (divRefTopStar.current.classList.contains('active')) {
           
            setColorTopStar(newColor);
        }else  if (divRefTreeStar.current.classList.contains('active')) {
           
            setColorTreeStar(newColor);
          
          
        }else  if (divRefTreeStar2.current.classList.contains('active')) {
            setColorTreeStar2(newColor);

          
        }else  if (divRefGrandLandStar.current.classList.contains('active')) {
            setColorGrandLandStar(newColor);

        }
        else  if (divRefFenceStar.current.classList.contains('active')) {
            setColorFenceStar(newColor);

        }
        else  if (divRefHoopsStar.current.classList.contains('active')) {
            setColorHoopsStar(newColor);
          
        }
      };
      const handleDivClick = (clickedRef) => {
        // Loop through all the div refs and remove the "active" class
        [divRefTopStar, divRefTreeStar, divRefTreeStar2,divRefGrandLandStar,divRefFenceStar,divRefHoopsStar].forEach((ref) => {
          if (ref.current) {
            ref.current.classList.remove('active');
          }
        });
    
        const topImage= clickedRef.current.getAttribute('data-deco-type');
        console.log(topImage);
        setImagePath(`img/${topImage}.png`);
        // Add the "active" class to the clicked div
        clickedRef.current.classList.add('active');
      };

      const handleClearClick = (clickedRef) => {
        
        // Loop through all the div refs and remove the "active" class
        [divRefTopStar, divRefTreeStar, divRefTreeStar2,divRefGrandLandStar,divRefFenceStar,divRefHoopsStar].forEach((ref) => {
          if (ref.current) {
            ref.current.classList.remove('active');
          }
        });
        
        setColorTopStar(baseColor);
        setColorTreeStar(baseColor);
        setColorTreeStar2(baseColor);
        setColorGrandLandStar(baseColor);
        setColorFenceStar(baseColor);
        setColorHoopsStar(baseColor);
        setImagePath('/img/top-star.png');
        // Add the "active" class to the clicked div
        clickedRef.current.classList.add('active');
        
      };

      

  return (
    <div className="screen-controls" >
            <div className="ctrl-text-wrap">
                <h1 className="heading">You’re in<br /><span>control</span></h1>
            </div>
            <div className="timer-wrap">
                <ProgressTimer/>
            </div>
            <div className="SliderPicker-wrap">
                <ColorPicker onColorChange={handleColorChange} />
            </div>
            <div className="main-ctrl">
                <div className="ctrl-block ctrl-left">
                    <h4>Decorate</h4>
                    <div 
                        ref={divRefTopStar} 
                        onClick={() => handleDivClick(divRefTopStar)}
                        className="ctrl-btn top-star active" 
                        data-deco-type="top-star" 
                        style={{ border: `4px solid ${colorTopStar}` }}>
                            <span>Top<br />Star</span>
                    </div>
                    
                    <div 
                        ref={divRefTreeStar} 
                        onClick={() => handleDivClick(divRefTreeStar)}
                        data-deco-type="decorated-tree" 
                        className="ctrl-btn tree-star" 
                        style={{ border: `4px solid ${colorTreeStar}` }}>
                            <span>Tree<br />Stars</span>
                    </div>
                    
                    <div 
                        ref={divRefTreeStar2} 
                        style={{ border: `4px solid ${colorTreeStar2}` }} 
                        onClick={() => handleDivClick(divRefTreeStar2)}
                        className="ctrl-btn tree-star-2">
                            <span>Tree<br />Stars</span>
                    </div>
                    
                    <div 
                        ref={divRefGrandLandStar} 
                        style={{ border: `4px solid ${colorGrandLandStar}` }}  
                        onClick={() => handleDivClick(divRefGrandLandStar)} 
                        className="ctrl-btn garlands-stars">
                            <span>Garlands<br />Stars</span>
                    </div>
                    
                    <div 
                        ref={divRefFenceStar}  
                        style={{ border: `4px solid ${colorFenceStar}` }} 
                        className="ctrl-btn fence-stars"  
                        onClick={() => handleDivClick(divRefFenceStar)}>
                            <span>Fence<br />Stars</span>
                    </div>
                    
                    <div 
                        ref={divRefHoopsStar} 
                        style={{ border: `4px solid ${colorHoopsStar}` }} 
                        className="ctrl-btn hoops-stars"  
                        onClick={() => handleDivClick(divRefHoopsStar)}>
                            <span>Hoops<br />Stars</span>
                    </div>
                </div>
                <div className="ctrl-block ctrl-middle">
                    <img id="centerImage" src={centerImagePath} alt="" style={{ margin: '0 auto' }} />
                    
                    <a href="" className="btn-default btn-white">Exit</a>
                </div>
                <div className="ctrl-block ctrl-right">
                    <h4>Effects</h4>
                    <div className="ctrl-btn-sq">
                        <svg className="icon">
                            <use xlinkHref="#twinkle"></use>
                        </svg>
                        <span>Twinkle</span>
                    </div>
                    <div className="ctrl-btn-sq active">
                        <svg className="icon">
                            <use xlinkHref="#star"></use>
                        </svg>
                        <span>solid</span>
                    </div>
                    <div className="ctrl-btn-sq">
                        <svg className="icon">
                            <use xlinkHref="#twirl"></use>
                        </svg>
                        <span>twirl</span>
                    </div>
                    <h4 className="colors">colours</h4>
                    <div className="ctrl-btn-sq">
                        <img src="/img/colours.svg" alt="" />
                        <span>Colour</span>
                    </div>
                    <div className="ctrl-btn-sq">
                        <img src="/img/rainbow.png" alt="" />
                    </div>
                    <div 
                         onClick={() => handleClearClick(divRefTopStar)}
                        className="ctrl-btn-sq tap-clear">
                        <span>Tap to <br />clear</span>
                    </div>
                </div>
            </div>
        </div>
  );
}