import HeroCard from './../components/HeroCard';
import queryString from 'query-string';
import { useForm } from './../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from './../helpers/getHeroesByName';


const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = ''} = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const {searchText, onInputChange} = useForm({
        searchText: q
    });

    // prevent default es para evitar un refresh / evitar la propagacion de un formulario
    // puede ser e o event
    // el <= 1 es para que haya mas de una letra en el buscador para que pueda buscar
    const onSearchSubmit = (event) => {
        event.preventDefault();
        // if (searchText.trim().length <= 1) return;

        navigate(`?q=${ searchText }`);
    }

    return (
        <>
            <h1>Buscar</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Busqueda</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input type="text" 
                            placeholder="Busca un Heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={ searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-outline-primary mt-2">
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Resultado</h4>
                    <hr />

                    {
                        ( q === '') ? <div className="alert alert-primary">
                        Busca un Heroe
                    </div> : ( heroes.length === 0) && <div className="alert alert-danger">
                        No hay un Heroe con <b>{ q }</b>
                    </div>
                    }

                    {
                        heroes.map( hero => (
                            <HeroCard key={ hero.id} {...hero} />
                        ))
                    }
                    

                </div>
            </div>
            
        </>
    )
}

export default Search
