import { createAction, handleActions } from 'redux-actions';

// 타입 생성(Button)
const BIGGER = "font/BIGGER";  
// 타입생성 (Input)
const INPUT_BIGGER = "font/INPUT_BIGGER";


// 액션 생성(Button)
export const bigger = createAction(BIGGER); 
// 액션 생성(Input)
export const inputBigger = createAction(INPUT_BIGGER); 



// state 초기값 생성(Button)
//  initialState 이게 초기값 명령어
const initialState = {
   fontSize : "1rem",
   inputFontSize : "1rem"
}

// 리듀서 생성(Button)
// reducer
const font = handleActions({
  // 안에서 분기처리
  [BIGGER] : (state, action) => ({...state, fontSize : "2rem"}),   
  [INPUT_BIGGER] : (state, action) => ({...state, inputFontSize : action.payload})
}, initialState)

export default font;