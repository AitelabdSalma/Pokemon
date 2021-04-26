import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import * as actions from "../../stores/actions";
import { Link, withRouter } from 'react-router-dom';
import { Card } from 'antd';
import { Tableau } from '../../components/UI/table';
import {
    RightOutlined
} from '@ant-design/icons';
import Title from "../../components/partials/Titre";
import Loader from "../../components/UI/loader";

const { Meta } = Card;

const ViewPokemon = ({ location }) => {

    const pokemonURL = location && location.state && location.state.url;
    const [pokemon, setPokemon] = useState(false);

    const dispatch = useDispatch();
    const getPokemon = (url) => dispatch(actions.getPokemonAction(url));

    useEffect(() => {
        pokemonURL &&
            getPokemon(pokemonURL).then((result) => {
                setPokemon(result && result.data);
            });
    }, [pokemonURL]); // eslint-disable-line react-hooks/exhaustive-deps

    const columns = [
        {
            title: "Type",
            dataIndex: "type",
            key: "name",
            render: (text, record) => record.type && record.type.name,
        },
        {
            title: "View type",
            dataIndex: "url",
            key: "url",
            render: (text, record) => (
                <span className="icon">
                    {record.url}
                    <Link
                        to={{
                            pathname: `/type`,
                            state: {
                                url: record.type && record.type.url,
                            },
                        }}
                    >
                        <RightOutlined />
                    </Link>
                </span>
            ),
        },
    ];

    if (pokemon) {
        return (
            <div>
                <Title title={`Pokemon Card : ${(pokemon.name) || ""}`} />

                <Card
                    hoverable
                    style={{ width: 500, margin: "0 auto" }}
                    cover={
                        <img
                            alt={pokemon.name}
                            src={pokemon.sprites?.other["official-artwork"].front_default}
                        />
                    }
                >
                    <Meta
                        title={`Name : ${pokemon.name}`}
                        description={`Weight : ${pokemon.weight}`}
                    />
                    <br />
                    <Tableau data={pokemon.types} columns={columns} />
                </Card>

            </div>
        );
    }
    return <Loader />;
};

export default withRouter(ViewPokemon);
