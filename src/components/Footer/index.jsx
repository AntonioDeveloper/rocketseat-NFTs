import './index.css';
import imgLogo from '../../assets/logo.svg';
import logoInsta from '../../assets/instagram.svg';
import logoYoutube from '../../assets/youtube.svg';
import logoTwitter from '../../assets/twitter.svg';
import logoEmail from '../../assets/email.svg';

export function Footer() {
  return (
    <footer>
      <div className='header-footer'>
        <img src={imgLogo} alt="Rocket NFTs" />
        <div className='button-up'>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" transform="rotate(-32)" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9881 16.2079L15.6347 26.3674L17.7544 27.6929L24.1078 17.5334L25.8123 24.9286L28.248 24.3671L25.585 12.8136L14.0316 15.4766L14.593 17.9124L21.9881 16.2079Z" fill="#000" />
          </svg>
        </div>
      </div>
      <div className='main-content'>
        <div className='footer-left'>
          <p className='text-news'>Fique por dentro de <br /> <span>todas as novidades</span></p>
          <form>
            <input id="email" name="email" placeholder='nft@rocketseat.com.br' />
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className='footer-right'>
          <ul className='menu-empresa'>
            <li>
              <strong>Empresa</strong>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Time</a>
            </li>
            <li>
              <a href="#">Carreira</a>
            </li>
          </ul>

          <ul className='menu-mapa'>
            <li>
              <strong>Mapa</strong>
            </li>
            <li>
              <a href="#">Galeria</a>
            </li>
            <li>
              <a href="#">Populares</a>
            </li>
            <li>
              <a href="#">Vendas</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>

          <ul className='menu-links'>
            <li>
              <strong>Links</strong>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Termos</a>
            </li>
            <li>
              <a href="#">Política</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='social'>
        <a className="rocket-link" href="https:www.rocketseat.com.br">www.rocketseat.com.br</a>
        <ul className='social-nets'>
          <li>
            <a href="#">
              <img src={logoInsta} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logoYoutube} alt="Youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logoTwitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logoEmail} alt="Email" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}