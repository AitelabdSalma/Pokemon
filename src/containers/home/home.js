import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import * as actions from "../../stores/actions";
import { Tableau } from "../../components/UI/table"
import {
    RightOutlined
} from '@ant-design/icons';

const Home = () => {
    const pageSize = 20

    const [offSet, setOffSet] = useState(0)

    const [currentPage, setCurrentPage] = useState(0)
    const [pokemonList, setPokemonList] = useState([])

    const dispatch = useDispatch()
    const getPokemonList = (offset) => dispatch(actions.getPokemonListAction(pageSize, offset))

    useEffect(() => {
        console.log("result pokemonList", pokemonList)
    }, [pokemonList])


    useEffect(() => {
        setOffSet(currentPage * pageSize)
    }, [currentPage])


    useEffect(() => {
        console.log("result 1", getPokemonList(offSet));
        getPokemonList(offSet).then(result => {
            console.log("result", result && result.data, result && result.data && result.data.results)
            return setPokemonList(result && result.data && result.data.results)
        })
    }, [offSet])


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'View pokemon',
            dataIndex: 'url',
            key: 'url',
            render: (text, record) => (
                <span className="icon">
                    <a
                        href
                        onClick={() => console.log("hehehe")
                            //handleRedirectToView(record.referenceDossier, record.etape.code)
                        }
                    >
                        <RightOutlined />
                    </a>
                </span>)
        }
    ];

    return (
        <div className="App">
            <Tableau
                data={pokemonList}
                columns={columns}
                current={currentPage}
                onChange={(page) => setCurrentPage(page)} />
        </div>
    );
}

export default Home;
