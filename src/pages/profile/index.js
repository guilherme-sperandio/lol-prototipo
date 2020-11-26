import React from 'react';
import Logo from '../../assets/logo-lol.svg';
import {VscSearch} from 'react-icons/vsc';
import './styles.css';

function Profile({location}){
    console.log(location.state.invocador);
    return(
        <div className="body">
            <header>
                <div className="img-logo">
                    <img src={Logo}/>   
                </div>
                <div className="search-bar">
                    <form>
                        <VscSearch color="#CDBE91" size={22}/>
                        <input type="text" placeholder="Buscar invocador"/>
                    </form>
                </div>
            </header>
            <main>
                <div className="left-side-info">
                    <div className="card-lol">

                    </div>
                    <div className="elo-lol">

                    </div>
                </div>
                <div className="rigth-side-info">
                    <div className="winrate-info">

                    </div>
                    <div className="game-history">

                    </div>

                </div>
            </main>
        </div>
    );
}

export default Profile;