import axios from "axios";
import { useState } from "react";
import React from "react";


function Signup(){
  // 초기값 세팅 - 아이디, 닉네임, 비밀번호, 비밀번호확인, 이메일, 전화번호, 생년월일
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [addr, setAddr] = useState("");

  // 오류메세지 상태 저장
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [addrMessage, setAddrMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isAddr, setIsAddr] = useState(false);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요.");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };
  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("똑같은 비밀번호를 입력했습니다.");
      setIsPasswordConfirm(true);
    }
  };

  const onChangeAddr = (e) => {
    const currentAddr = e.target.value;
    setAddr(currentAddr);
    // if(){
    //   setAddrMessage('올바른 주소를 입력해주세요')
    // }
    // else(){
    //   setIsAddr(true)
    // }
    
    // 조건 정해지면 바꾸기
    setIsAddr(true)
  };


  return (
    <>
      <h3 style={{textAlign : "center"}}>Sign Up</h3>
      <div className="form" style={{textAlign : "center"}}>
        <div className="form-el">
          <label htmlFor="id">Id</label> <br />
          <input id="id" name="id" value={id} onChange={onChangeId} />
          <p className="message"> {idMessage} </p>
        </div>
        <div className="form-el">
          <label htmlFor="password">Password</label> <br />
          <input type='password'
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
          <p className="message">{passwordMessage}</p>
        </div>
        <div className="form-el">
          <label htmlFor="passwordConfirm">Password Confirm</label> <br />
          <input
            type='password'
            id="passwordConfirm"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
          />
          <p className="message">{passwordConfirmMessage}</p>
        </div>
        <div className="form-el">
<<<<<<< HEAD
          <label htmlFor="addr">Address</label> <br />
=======
          <label htmlFor="Addr">Address</label> <br />
>>>>>>> main
          <input
            id="addr"
            name="addr"
            value={addr}
            onChange={onChangeAddr}
          />
          <p className="message">{addrMessage}</p>
        </div>
        <br />
        <br />
        <button type="submit">Submit</button>
      </div>
    </>
  );
}
<<<<<<< HEAD
  export default Signup;
=======
  export default Signup;


// git merge 테스트
>>>>>>> main
