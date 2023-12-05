import './home.css';
import { Pokemons } from '../container/pokemons/Pokemon';
import { TbArrowBigUpLine } from "react-icons/tb";
import { Button } from '../components/Button/Button';

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
      <div className="home-btn-top">
        <Button onClick={goToTop}> <TbArrowBigUpLine /> </Button>
      </div>
    </div>

  )
}
export default Home;
