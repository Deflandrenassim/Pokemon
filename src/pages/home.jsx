import './home.css';
import { Pokemons } from '../container/pokemons/Pokemon';
import { TbArrowBigUpLine } from "react-icons/tb";
import { NavBarLinks } from '../components/Navbar/Navbar'


function Home() {
  function goToTop() {
    console.log("onclick")
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="pokemon_page">
      <div className="pokemon_page_background">
        <Pokemons />
      </div>
      <div className="home-btn-top" onClick={goToTop} >
        <TbArrowBigUpLine size={30} />
      </div>
      <NavBarLinks page="home" />
    </div>

  )
}
export default Home;
