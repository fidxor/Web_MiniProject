import { useState } from 'react'

function Login() {
    const [id, setId] = useState('')
    const [pw, setPwd] = useState('')

    const [IsLogin, setIsLogin] = useState(false)

    function submitInfo (e) {
        e.preventDefault();
        if(!id) {
            return alert('id 입력하세요')
        }
        else if(!pw) {
            return alert('pw 입력하세요')
        }

        // axios 코드 추가 해야됨
    }

  return (
    <>
        <form onSubmit={submitInfo}>
            <label>id</label>
            <input id='id' value={id} onChange={(e) => setId(e.target.value)} />
            <label id='pw'>pw</label>
            <input type='password' value={pw} onChange={(e) => setPwd(e.target.value)} />
        </form>
    </>
  )
}

export default Login;