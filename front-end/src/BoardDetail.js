import axios from "axios" 
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function BoardDetail() {
    const [question, setQuestion] = useState([]);
    const params = useParams();
    const [answer, setAnswer] = useState([]);
    const [answerText, setAnswerText] = useState([]);
    const navigate = useNavigate();
    console.log(params.id);
    useEffect(() => {
        async function getQuestion() {
            try {
                const result = await axios.get(`http://localhost:8080/board/${params.id}`)
                setQuestion(result.data);
                // console.log(result);
                setAnswer(result.data.answerList);
            } catch (error) {
                console.log(error);
            }
        }
        getQuestion();
    }, [params.id])
    function onChange(event) {
        setAnswerText(event.target.value)
    }
    async function onSubmit(event) {
        if (answerText === "") {
            alert("답변 내용 입력하세요.")
        } else {
            event.preventDefault();
            try {
                const result = await axios.post(`http://localhost:8080/answer-create/${params.id}`,{
                    content: answerText
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
            <h2 className="border-bottom py-2">제목 : {question.subject}</h2>
            <div className="card my-3">
                <div className="card-body">
                    <div className="card-text" style={{whiteSpace: "pre-line"}}>{question.content}</div>
                    <div className="d-flex justify-content-end">
                        <div className="badge bg-light text-dark p-2 text-start">
                            <div>{question.createDate}</div>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className="border-bottom my-3 py-2"> {answer.length}개의 답변</h5>
            {answer.map((answer, index) => {
                return (
                    <div className="card my-3" key={index}>
                        <div className="card-body">
                            <div className="card-text" style={{whiteSpace: "pre-line"}}>{answer.content}</div>
                            <div className="d-flex justify-content-end">
                                <div className="badge bg-light text-dark p-2 text-start">
                                    <div>{answer.createDate}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <form onSubmit={onSubmit} className="my-3">
                <textarea
                    onChange={onChange} value={answerText}
                    name="content" id="content" rows="10" className="form-control">
                </textarea>
                <input type="submit" value="답변등록" className="btn btn-primary my-2" />
            </form>
        </div>
    )
}
export default BoardDetail;