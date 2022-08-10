import './index.css';
import logo from '../../assets/logo.svg';
import metaMaskIcon from '../../assets/meta-mask-icon.svg';
import avatarsGroup from '../../assets/avatars-agrupado.png';
import badge from '../../assets/Badge.png';

import galeria1 from '../../assets/galeria-1.png';
import galeria2 from '../../assets/galeria-2.png';
import galeria3 from '../../assets/galeria-3.png';
import galeria4 from '../../assets/galeria-4.png';
import galeria5 from '../../assets/galeria-5.png';
import galeria6 from '../../assets/galeria-6.png';
import galeria7 from '../../assets/galeria-7.png';
import galeria8 from '../../assets/galeria-8.png';

export function Section1() {
  return (
    <section className='container'>
      <header className='top'>
        <img src={logo} alt="Rocket NFTs" />
        <nav className="menu">
          <ul>
            <li>
              <a href="#">Comprar NFT</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>
        <button className='connect-wallet'>
          <img src={metaMaskIcon} alt="meta mask icon" />
          Conectar carteira
        </button>
      </header>

      <div className='box-content'>
        <div className='left-content'>
          <p>
            Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
            Compre, venda e descubra ativos digitais exclusivos para você.
          </p>

          <div className='avatars-group'>
            <img src={avatarsGroup} alt="avatares agrupados" />
            <p><strong>+10</strong> <br /> Artistas selecionados</p>
          </div>
        </div>
        <div className='center-content'>
          <p>Descubra a verdadeira arte digital e colecione diversas <span>NFTs</span>
          </p>
        </div>
        <div className='right-content'>
          <img src={badge} alt="badge" />
        </div>
      </div>

      <div className='gallery'>
        <img src={galeria1} alt="image" />
        <img src={galeria2} alt="image" />
        <img src={galeria3} alt="image" />
        <img src={galeria4} alt="image" />
        <img src={galeria5} alt="image" />
        <img src={galeria6} alt="image" />
        <img src={galeria7} alt="image" />
        <img src={galeria8} alt="image" />
      </div>
    </section>
  )
}