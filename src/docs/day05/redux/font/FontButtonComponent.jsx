import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bigger } from '../../../../modules/font';

const FontButtonComponent = () => {
  // #1
  // "재미있는 리덕스 수업!"
  //  폰트 기본 크기 1rem
  // 2rem으로 변경하기
  const fontSize = useSelector((state) => state.font.fontSize );   

  // const fontSize = "1rem"
  const dispatch = useDispatch();  
  
  return (
    <div>
      <h1  style={{fontSize: fontSize}}>재미있는 Redux!😮</h1>
      <button onClick={()=>{dispatch(bigger())}}>커지는 버튼</button><br></br>
    </div>
  );   
};

export default FontButtonComponent;