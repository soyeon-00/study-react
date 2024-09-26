import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';
import Animal from './Animal';
import useInput from '../../../../hooks/useInput';
// 실습
// Context에 저장된 동물 세마리를 버튼으로 출력(Animal 컴포넌트를 이용)
// input태그에 동물 입력 후 엔터 : 동물 버튼을 추가(Context에 있는 insert 메서드)
// 동물 버튼을 클릭하면 해당 버튼이 삭제(Context에 있는 remove 메서드)
// 모두 각 Context에 선언된 메서드만 사용!
// 스타일은 자유롭게 넣어도 무관!



const Animals = () => {
  const {action} = useContext(AnimalsContext);
    const [value, onChangevalue] = useInput(" ");

  const onKeyUpvalue = (e) => {
    if(e.key === 'Enter'){
      action.insert(value)
    }
  }

  return (
    <div>
      <Animal />
      <input type="text" onChange={onChangevalue} onKeyUp={onKeyUpvalue} />
    </div>
  );
};

export default Animals;