import imgPerfil from './img/1570104031199.jpeg';
import './App.css';


function App() {
  return (
    <div className="body">
        <div className='barra-lateral border-gradient border-gradient-purple'>

        <div>
        <img src={imgPerfil} className="img-perfil" alt="perfilImage" />
        </div>
        <div>
        <h1>MARCOS VINICIUS ASSIS SILVA</h1>
        <h2>DESENVOLVEDOR</h2>
        </div>

        <div className='menuOver'>
          
            <li><a href="#sobre" className='menuLink'>Sobre Mim</a></li>
            
            <li><a href="#experiencia" className='menuLink'>Minhas Experiencias</a></li>
            
            <li><a href="#portfolio" className='menuLink'>Meu Portfolio</a></li>
        </div>
        </div>
        <div id="sobre">
          <h1>
            Sobre Mim
          </h1>
        </div>
        <div id="experiencia">
          <h1>
            Minhas Experiencias
          </h1>
        </div>
        <div id="portfolio">
          <h1>
            Meu Portfolio
          </h1>
        </div>


    </div>
  );
}

export default App;
