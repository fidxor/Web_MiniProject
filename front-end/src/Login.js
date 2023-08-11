import React, { useState, useNavigate } from 'react';
import axios from 'axios';

function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    // const navigate = useNavigate();
    

	// input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = (e) => {
        axios
          .post("http://localhost:8080/auth/login", {
            // 임시 하드코딩 서버랑 연동해서 변수로 바꿀 예정
            'userid': "usertest",
            'password': "usertest1",
          })
          .then((res) => {
            console.log(res)
            if (res.data.token) {
            //token setting
            //redirec code
            }
          })
          .catch((error) => {
            console.log(error, "error");
          });
      };

    return(
        <div style={{textAlign : 'center'}}>
            <h2>Login</h2>
            <div>
                <label htmlFor='input_id'>ID : </label>
                <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
            </div>
            <div>
                <label htmlFor='input_pw'>PW : </label>
                <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
            </div>
            <div>
                <button type='button' onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}
 
export default Login;