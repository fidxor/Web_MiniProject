import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Board() {
    const [MainBoardList, setMainBoardList] = useState([]);
    useEffect(()=> {
        async function MainBoardList() {
            try {
                const result = await axios.get("http://localhost:8080/board");
                console.log(result.data);
                setMainBoardList(result.data);
            } catch (error) {
                console.log(error);
            }
        }
        MainBoardList();
    }, [])
    return(
        <div>
            <Link className="btn btn-primary" to="/MainBoard-create">게시글등록</Link>
            <table className="table text-center my-3">
                <thead className="table-dark">
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성일시</th>
                    </tr>
                </thead>
                <tbody>
                    {MainBoardList.map((MainBoard, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                    <Link
                                        className="text-decoration-none"
                                        to={`/board/${MainBoard.bnum}`}
                                        >
                                        {MainBoard.head}
                                        <sup className="text-danger ms-2">[{MainBoard.commnetList.length}]</sup>
                                    </Link>
                                </td>
                                <td>{MainBoard.creatTime}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}
export default Board;