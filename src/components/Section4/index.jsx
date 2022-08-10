import './index.css';
import artist1 from '../../assets/artista-1.png';
import artist2 from '../../assets/artista-2.png';
import artist3 from '../../assets/artista-3.png';
import artist4 from '../../assets/artista-4.png';
import artist5 from '../../assets/artista-5.png';
import artist6 from '../../assets/artista-6.png';
import arrow from '../../assets/Arrow.svg';

export function Section4() {
  return (
    <section className='artists'>
      <h2 className='h2-artistas'>Melhores <strong>artistas</strong></h2>
      <div className='blocks'>
        <a href="#" className='cards'>
          <img src={artist1} alt="Mayk Brito" />
          <div className='text'>
            <p>Mayk Brito</p>
            <p>80 Fotografias</p>
          </div>
        </a>
        <a href="#" className='cards'>
          <img src={artist2} alt="Jakeliny G." />
          <div className='text'>
            <p>Jakeliny G.</p>
            <p>99 Fotografias</p>
          </div>
        </a>
        <a href="#" className='cards'>
          <img src={artist3} alt="João I. (Biro)" />
          <div className='text'>
            <p>João I. (Biro)</p>
            <p>50 Fotografias</p>
          </div>
        </a>
        <a href="#" className='cards'>
          <img src={artist4} alt="Tamires Santos" />
          <div className='text'>
            <p>Tamires Santos</p>
            <p>43 Fotografias</p>
          </div>
        </a>
        <a href="#" className='cards'>
          <img src={artist5} alt="Ana Silva" />
          <div className='text'>
            <p>Ana Silva</p>
            <p>28 Fotografias</p>
          </div>
        </a>
        <a href="#" className='cards'>
          <img src={artist6} alt="Diego F." />
          <div className='text'>
            <p>Diego F.</p>
            <p>20 Fotografias</p>
          </div>
        </a>

      </div>

      <a href="" className='see-more'>Ver todos os artistas <img src={arrow} /></a>
    </section>
  )
}