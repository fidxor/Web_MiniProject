import axios from "axios" 
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function BoardDetail() {
    const [MainBoard, setMainBoard] = useState({});    
    const [Comment, setComment] = useState([]);
    const [CommnetText, setCommnetText] = useState("");
    const params = useParams;
    const navigate = useNavigate();
    
    useEffect(() => {
        async function getMainBoard() {
            try {
                console.log(params.id);
                const result = await axios.get(`http://localhost:8080/board/${params.id}`)
                setMainBoard(result.data);
                // console.log(result);
                setComment(result.data.commentList);
            } catch (error) {
                console.log(error);
            }
        }
        getMainBoard();
    }, [params.id])
    function onChange(event) {
        setCommnetText(event.target.value)
    }
    async function onSubmit(event) {
        if (CommnetText === "") {
            alert("답변 내용 입력하세요.")
        } else {
            event.preventDefault();
            try {
                const result = await axios.post(`http://localhost:8080/answer-create/${params.id}`,{
                    Body: CommnetText
                })
                if (result.status === 200) {
                    navigate(0);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <div>
            <h2 className="border-bottom py-2">제목 : {MainBoard.Head}</h2>
            <div className="card my-3">
                <div className="card-body">
                    <div className="card-text" style={{whiteSpace: "pre-line"}}>{MainBoard.Body}</div>
                    <div className="d-flex justify-content-end">
                        <div className="badge bg-light text-dark p-2 text-start">
                            <div>{MainBoard.CreateDate}</div>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className="border-bottom my-3 py-2"> {Comment.length}개의 답변</h5>
            {Comment.map((Commnet, index) => {
                return (
                    <div className="card my-3" key={index}>
                        <div className="card-body">
                            <div className="card-text" style={{whiteSpace: "pre-line"}}>{Comment.content}</div>
                            <div className="d-flex justify-content-end">
                                <div className="badge bg-light text-dark p-2 text-start">
                                    <div>{Commnet.createDate}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <form onSubmit={onSubmit} className="my-3">
                <textarea
                    onChange={onChange} value={CommnetText}
                    name="content" id="content" rows="10" className="form-control">
                </textarea>
                <input type="submit" value="답변등록" className="btn btn-primary my-2" />
            </form>
        </div>
    )
}
export default BoardDetail;