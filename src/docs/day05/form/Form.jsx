import React from 'react';
import{useForm} from 'react-hook-form'

const Form = () => {
  // register : 값을 전달해주는 함수
  // formSTate : form의 현재 상태값 받는 함수
  // errors : form에서 생기는 error를 갖는 함수
  // isSubmitted : 한 번이라도 클릭했다면 true 함수
  // isSubmitting : 값이 제출중일 때 버튼을 비활성화 시키는 함수
  // ex) <button disabled={isSubmitting}></button>
  const { register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}} = useForm({mode:"onChange"});
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <form onSubmit={handleSubmit(async (data) => {
      // console.log(data)
      // 데이터 가져와서 콘솔에 출력하기
      // "http://localhost:4000/user"요기에서 fetch문으로 데이터 가져오기
      // .then은 성공했을 때 동작 / .catch는 실패했을 때 동작
      // await fetch("http://localhost:4000/user")
      //   .then((response) => response.json())
      //   .then(console.log)
      //   .catch(console.error)
      // })}>

      // // CRUD(Create), post 요청
      // await fetch("http://localhost:4000/user", {
      //   method : 'POST',
      //   headers : {
      //     'Content-Type' : "application/json"
      //   },
      //   body : JSON.stringify({
      //     id : 2,
      //     email : data.email,
      //     password : data.password
      //   })
      // })
      //   .then((response) => response.json())
      //   .then(console.log)
      //   .catch(console.error)

      // DELETE
      // 요청경로 http://localhost:4000/user/2
      // if(window.confirm('정말 회원탈퇴 하시겠습니까?')){
      //   fetch(`http://localhost:4000/user/2`, {
      //     method : 'DELETE',
      //     headers : {
      //       'Content-Type' : "application/json"
      //     },
      //     body : JSON.stringify({
      //       ...data
      //     })
      //   }).then((response) => {
      //     if(!response.ok){ return console.log(`Error ${response}`)}
      //     console.log("회원탈퇴가 완료되었습니다.")
      //   })
      // }

      // UPDATE
      // 요청경로 http://localhost:4000/user/1
      if(window.confirm('업데이트 하시겠습니까?')){
        fetch(`http://localhost:4000/user/1`, {
          method : 'PUT',
          headers : {
            'Content-Type' : "application/json"
          },
          body : JSON.stringify({
            ...data
          })
        }).then((response) => {
          if(!response.ok){ return console.log(`Error ${response}`)}
          console.log("업데이트가 완료되었습니다.")
        })
      }
    })}>
      
      <label>
        <div style={{display:'flex', flexDirection:'row'}}>
          <p>이메일</p>
          <input type="email" id='email' placeholder='아이디를 입력하세요'
            {...register("email", {
              required : true,
              pattern : {
                value :emailRegex,
              }
            })}
          />
        </div>
      {errors && errors?.email?.type === "required" && (
        <p>이메일을 입력해!!~~1</p>
      )}
      {errors && errors?.email?.type === "pattern" && (
        <p style={{fontSize: "10px"}}>이메일 양식에 맞게 입력해주세여</p>
      )}
      </label>


      {/* 비밀번호 로직 만들기*/}
      <label>
        <div style={{display:'flex', flexDirection:'row'}}>
          <p>비밀번호</p>
          <input type="password" pw='password' placeholder='비밀번호를 입력하세요'
            {...register("password", {
              required : true,
              pattern : {
                value :passwordRegex,
              }
            })}
          />
        </div>
      {errors && errors?.password?.type === "required" && (
        <p>비밀번호 입력해!</p>
      )}
      {errors && errors?.password?.type === "pattern" && (
        <p style={{fontSize: "10px"}}>비밀번호 정확하게!!👀<br/>
        소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상으로 만들어줘</p>
      )}
    </label>


    {/* 비밀번호 확인로직 만들기*/}
    <label>
        <div style={{display:'flex', flexDirection:'row'}}>
          <p>비밀번호확인</p>
          <input type="passwordConfirm" pw='passwordConfirm' placeholder='비밀번호를 입력하세요'
            {...register("passwordConfirm", {
              required : true,
              validate : {
                marchPassword : (passwordConfirm) => {
                  const { password } = getValues();
                  console.log(password,passwordConfirm, password === passwordConfirm);
                  return password === passwordConfirm;
                }
              }
            })}
          />
        </div>
      {errors && errors?.passwordConfirm && (
        <p style={{fontSize: "10px"}}>비밀번호가 일치하지 않아요🤔🙂‍↔️🙂‍↔️</p>
      )}
    </label>



    {/* 체크박스 */}
      <div>
        <p>취미</p>
        <label>
          <span>웹툰 👀</span><input name="hobby" type="checkbox" value="웹툰 👀" {...register("hobbies")}/>
        </label>
        <label>
          <span>꿀잠 🌝</span><input name="hobby" type="checkbox" value="꿀잠 🌝" {...register("hobbies")}/>
        </label>
        <label>
          <span>영화 🎞️</span><input name="hobby" type="checkbox" value="영화 🎞️" {...register("hobbies")}/>
        </label>
        <label>
          <span>맛집 🍽️</span><input name="hobby" type="checkbox" value="맛집 🍽️" {...register("hobbies")}/>
        </label>
      </div>
      <button disabled={isSubmitting}>회원가입</button>
    </form>
  );
};

export default Form;

