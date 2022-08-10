import './index.css';
import arrow from '../../assets/Arrow.png';
import astronaut1 from '../../assets/astronauta-1.png';
import astronaut2 from '../../assets/astronauta-2.png';
import astronaut3 from '../../assets/astronauta-3.png';
import astronaut4 from '../../assets/astronauta-4.png';

export function Section3() {
  return (
    <section className="popular">
      <h1 className='h1-populares'><strong>Populares</strong> da semana</h1>
      <div className='all-astronauts'>
        <div className='odd-astronauts'>
          <div className='astronaut1'>
            <span className='astronaut-title'>
              <p>Astronauta 1</p>
              <img src={arrow} alt="" />
            </span>
            <span>
              <p>Mayk Brito</p>
              <p>1.50 RKT</p>
            </span>
            <img src={astronaut1} alt="astronauta 1" />
          </div>

          <div className='astronaut3'>
            <span className='astronaut-title'>
              <p>Astronauta 3</p>
              <img src={arrow} alt="" />

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
            <span className='astronaut-title'>
              <p>Astronauta 2</p>
              <img src={arrow} alt="" />

            </span>
            <span>
              <p>Jakeliny Gracielly</p>
              <p>2.0 RKT</p>
            </span>
            <img src={astronaut2} alt="astronauta 2" />
          </div>

          <div className='astronaut4'>
            <span className='astronaut-title'>
              <p>Astronauta 4</p>
              <img src={arrow} alt="" />

            </span>
            <span>
              <p>Tamires Santos</p>
              <p>4.30 RKT</p>
            </span>
            <img src={astronaut4} alt="astronauta 4" />
          </div>
        </div>

      </div>
    </section>
  );
}