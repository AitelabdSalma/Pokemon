import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import * as actions from "../../stores/actions";
import { Link, withRouter } from 'react-router-dom';
import { Tableau } from '../../components/UI/table';
import {
    RightOutlined
} from '@ant-design/icons';
import Title from '../../components/partials/Titre';

const TypePokemon = ({ location, ...props }) => {
    const pageSize = 20

    const pokemonURL = location && location.state && location.state.url
    const [pokemonType, setPokemonType] = useState(false)
    const [total, setTotal] = useState(0)


    const [currentPage, setCurrentPage] = useState(0)
    const dispatch = useDispatch()
    const getPokemonType = (url) => dispatch(actions.getPokemonTypeAction(url))

    useEffect(() => {
        pokemonURL && getPokemonType(pokemonURL).then(result => {
            setPokemonType(result && result.data)
            let count = result && result.data && result.data.pokemon && result.data.pokemon.length
            setTotal((count / pageSize))
        })
    }, [pokemonURL])// eslint-disable-line react-hooks/exhaustive-deps

    const columns = [
        {
            title: 'Pokemon',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => record.pokemon && record.pokemon.name
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
                                url: record.pokemon && record.pokemon.url
                            }
                        }}
                    >
                        <RightOutlined />
                    </Link>

                </span>)
        }
    ];

    return (
        <div >
            {pokemonType && (
                <div>
                    <Title
                        title={`Pokemon type : ${pokemonType.id}  -  ${pokemonType.name}`}
                    />
                    <br />
                    <Tableau
                        data={pokemonType.pokemon}
                        columns={columns}
                        current={currentPage}
                        onChange={(page) => setCurrentPage(page)}
                        total={total}
                    />
                </div>)}

        </div>
    )
}

export default withRouter(TypePokemon)
