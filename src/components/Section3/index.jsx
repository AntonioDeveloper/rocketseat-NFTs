import './index.css';
import astronaut1 from '../../assets/galeria-2.png';
import astronaut2 from '../../assets/galeria-3.png';
import astronaut3 from '../../assets/galeria-4.png';
import astronaut4 from '../../assets/galeria-8.png';

export function Section3() {
  return (
    <section className="popular">
      <h1 className='h1-populares'><strong>Populares</strong> da semana</h1>
      <div className='all-astronauts'>
        <div className='odd-astronauts'>
          <div className='astronaut1'>
            <span>
              <p>Astronauta 1</p>
              <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9881 16.2079L15.6347 26.3674L17.7544 27.6929L24.1078 17.5334L25.8123 24.9286L28.248 24.3671L25.585 12.8136L14.0316 15.4766L14.593 17.9124L21.9881 16.2079Z" fill="#FFF" />
              </svg>

            </span>
            <span>
              <p>Mayk Brito</p>
              <p>1.50 RKT</p>
            </span>
            <img src={astronaut1} alt="astronauta 1" />
          </div>

          <div className='astronaut3'>
            <span>
              <p>Astronauta 3</p>
              <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9881 16.2079L15.6347 26.3674L17.7544 27.6929L24.1078 17.5334L25.8123 24.9286L28.248 24.3671L25.585 12.8136L14.0316 15.4766L14.593 17.9124L21.9881 16.2079Z" fill="#FFF" />
              </svg>

            </span>
            <span>
              <p>João Inácio (Biro)</p>
              <p>3.75 RKT</p>
            </span>
            <img src={astronaut3} alt="astronauta 3" />
          </div>
        </div>
        <div className='even-astronauts'>
          <div className='astronaut2'>
            <span>
              <p>Astronauta 2</p>
              <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9881 16.2079L15.6347 26.3674L17.7544 27.6929L24.1078 17.5334L25.8123 24.9286L28.248 24.3671L25.585 12.8136L14.0316 15.4766L14.593 17.9124L21.9881 16.2079Z" fill="#FFF" />
              </svg>

            </span>
            <span>
              <p>Mayk Brito</p>
              <p>1.50 RKT</p>
            </span>
            <img src={astronaut2} alt="astronauta 2" />
          </div>

          <div className='astronaut4'>
            <span>
              <p>Astronauta 4</p>
              <svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.9881 16.2079L15.6347 26.3674L17.7544 27.6929L24.1078 17.5334L25.8123 24.9286L28.248 24.3671L25.585 12.8136L14.0316 15.4766L14.593 17.9124L21.9881 16.2079Z" fill="#FFF" />
              </svg>

            </span>
            <span>
              <p>João Inácio (Biro)</p>
              <p>3.75 RKT</p>
            </span>
            <img src={astronaut4} alt="astronauta 4" />
          </div>
        </div>

      </div>
    </section>
  );
}