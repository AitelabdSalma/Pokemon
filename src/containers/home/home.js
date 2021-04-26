import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import * as actions from "../../stores/actions";
import { Tableau } from "../../components/UI/table"
import {
    RightOutlined
} from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';

const Home = () => {
    const pageSize = 20

    const [offSet, setOffSet] = useState(0)
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)


    const [currentPage, setCurrentPage] = useState(0)
    const [pokemonList, setPokemonList] = useState([])

    const dispatch = useDispatch()
    const getPokemonList = (offset) => dispatch(actions.getPokemonListAction(pageSize, offset))

    useEffect(() => {
        setLoading(true)
        getPokemonList(offSet).then(result => {
            setPokemonList(result && result.data && result.data.results)
            let count = result && result.data && result.data.count
            setTotal((count / pageSize))
            setLoading(false)
        })
    }, [offSet])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setOffSet(currentPage * pageSize)
    }, [currentPage])

    const columns = [
        {
            title: 'Pokemon',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'View pokemon',
            dataIndex: 'url',
            key: 'url',
            render: (text, record) => (
                <span className="icon">
                    <Link
                        to={{
                            pathname: `/viewPokemon`,
                            state: {
                                url: record.url
                            }
                        }}
                    >
                        <RightOutlined />
                    </Link>

                </span>)
        }
    ];

    return (
        <div className="App">
            <Tableau
                data={pokemonList}
                loading={loading}
                columns={columns}
                current={currentPage}
                onChange={(page) => setCurrentPage(page)}
                total={total} />
        </div>
    )
}

export default withRouter(Home)
