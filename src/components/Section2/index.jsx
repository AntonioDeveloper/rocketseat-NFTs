import './index.css';
import banner from "../../assets/banner.jpg";

export function Section2() {
  return (
    <section className='stats-container'>
      <aside className='left-bar'>
        <div><strong>10K+</strong>Artes</div>
        <div><strong>200+</strong>Vendas</div>
        <div><strong>20</strong>Artistas</div>
      </aside>

      <div className='container-right-box'>
        <div className='left-text'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span>potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
          </p>

          <a href="#">Lorem ipsum</a>
        </div>

        <div className='right-text'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <span>potenti diam</span> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.
          </p>

          <a href="#">Lorem ipsum</a>
        </div>

        <div className='stats-image'>
          <img src={banner} alt="banner" />
        </div>
      </div>


    </section>
  )
}