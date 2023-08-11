import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BoardCreate() {
    const [Head, setHead] = useState("");
    const [Body, setBody] = useState("");
    const navigate = useNavigate();

    async function onSubmit(event) {
        event.preventDefault();
        if (Head ==="" || Body ==="") {
            alert("글 등록하시려면, 제목과 내용은 입력해야 합니다.")
        } else {
            console.log("제목: "+Head);
            console.log("내용: "+Body);
            try {
                const result = await axios.post("http://localhost:8080/main-board-create/", {
                    Head: Head,
                    Body: Body
                })
                console.log(result);
                if (result.status === 200) {
                    navigate("/board");
                }
            } catch (error) {
                console.log(error);
                alert("서버에 문제가 있어서 질문 등록이 안됩니다.");
            }
        }
    }
    function onChange(event) {
        if (event.target.name === "Head") {
            setHead(event.target.value);
        } else if (event.target.name === "Body") {
            setBody(event.target.value);
        }
    }
    return(
        <div>
            <h5 className="border-bottom pb-2">게시글등록</h5>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="Head" className="form-label">제목</label>
                    <input
                        onChange={onChange} value={Head}
                        type="text" name="Head" id="Head" className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Body" className="form-label">내용</label>
                    <textarea
                        onChange={onChange} value={Body}
                        name="Body" id="Body" className="form-control" rows="10"></textarea>
                </div>
                <input type="submit" value="저장하기" className="btn btn-primary" />
            </form>
        </div>
    )
}
export default BoardCreate;