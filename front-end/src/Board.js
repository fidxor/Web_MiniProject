import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Board() {
    const [mainBoardList, setMainBoardList] = useState([]);
     
    useEffect(() => {
        async function getMainBoardList() {
            try {
                const result = await axios.get("http://localhost:8080/board");
                setMainBoardList(result.data);
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
        getMainBoardList();
    },[])

    return (
        <div>
            <table className="table text-center my-3">
                <thead className="table-dark">
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성일시</th>
                    </tr>
                </thead>
                <tbody>
                    {getMainBoardList.map((mainboard, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                    <Link to={`/board/${mainboard.bnum}`}>{mainboard.body}</Link>
                                </td>
                                <td>{mainboard.creat_time}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Board;