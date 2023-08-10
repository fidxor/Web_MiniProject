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
            <div>
                <Link></Link>
            </div>
        </div>
    )
}

export default Board;