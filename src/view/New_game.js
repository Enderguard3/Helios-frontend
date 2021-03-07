import Navbar from '../components/Navbar'
import {useState} from "react";
import {getGames} from '../services/data import/Games'
import {Table, TableCell} from "@material-ui/core";

const NewGame = () => {
    const [data, setData] = useState([])

    setData(getGames())

    const data_dom = data.map(d =>
        <TableCell>
            <p>{d.name}</p>
            <p>{d.desc}</p>
            <p>{d.prix}</p>
        </TableCell>
    )

    return <div>
        <Navbar name={"New Game"} />
        <Table>
            {data_dom}
        </Table>
    </div>
}

export default NewGame