import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from './../helpers/getHeroById';

const Hero = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const hero = useMemo( () => getHeroById(id), [id]); 

    const onNavigateNack = () => {
        // el -1 te manda para atras
        navigate(-1);
    }

    if( !hero ) {
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ `/assets/${ id }.jpg ` } 
                    alt={ hero.superhero } 
                    className="img-thumbnail animate__animated animate__flipInX "

                />
            </div>

            <div className="col-8">
                <h3> {hero.superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b>{hero.alter_ego} </li>
                    <li className="list-group-item"> <b>Publicado:</b> {hero.publisher} </li>
                    <li className="list-group-item"> <b>Primera Aparicion:</b> {hero.first_appearance} </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p> {hero.characters} </p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={ onNavigateNack }
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}

export default Hero
