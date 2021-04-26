import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import * as actions from "../../stores/actions";
import { Link, withRouter } from 'react-router-dom';
import { Card } from 'antd';
import { Tableau } from '../../components/UI/table';
import {
    RightOutlined
} from '@ant-design/icons';

const { Meta } = Card;

const ViewPokemon = ({ location, ...props }) => {

    const pokemonURL = location && location.state && location.state.url
    const [pokemonType, setPokemonType] = useState(false)

    const dispatch = useDispatch()
    const getPokemonType = (url) => dispatch(actions.getPokemonTypeAction(url))

    useEffect(() => {
        pokemonURL && getPokemonType(pokemonURL).then(result => {
            console.log("result", result)
            setPokemonType(result && result.data)
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
                <Card
                    hoverable
                    style={{ width: 500 }}
                >
                    <Meta title={`id : ${pokemonType.id}`} description={`Type : ${pokemonType.name}`} />
                    <br />
                    <Tableau
                        data={pokemonType.pokemon}
                        columns={columns}
                    />
                </Card>)}

        </div>
    )
}

export default withRouter(ViewPokemon)
