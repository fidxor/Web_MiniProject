import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Board() {
    const [questionList, setQuestionList] = useState([]);
    useEffect(()=> {
        async function getQuestionList() {
            try {
                const result = await axios.get("http://localhost:8080/board");
                console.log(result);
                setQuestionList(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        getQuestionList();
    }, [])
    return(
        <div>
            <Link className="btn btn-primary" to="/question-create">게시글등록</Link>
            <table className="table text-center my-3">
                <thead className="table-dark">
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성일시</th>
                    </tr>
                </thead>
                <tbody>
                    {questionList.map((question, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                    <Link
                                        className="text-decoration-none"
                                        to={`/board/${question.id}`}
                                        >
                                        {question.subject}
                                        <sup className="text-danger ms-2">[{question.answerList.length}]</sup>
                                    </Link>
                                </td>
                                <td>{question.createDate}</td>
                            </tr>
                        )
                })}
                </tbody>
            </table>
        </div>
    );
}
export default Board;