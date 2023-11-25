import bannerImg from "../../../assets/banner.jpg"
import style from "./style.module.css";

export const BannerSection = () => {
    return (
        <section className={style.container}>
          <img src={bannerImg} alt="Banner da página" />
          <div className={style.container__infos}>
            <h1 className="title1">FASHION STORE</h1>
            <p className="paragraph1">Fique por dentro das nossas ultimas promoções</p>
            <button className="btn">CONFIRA NOSSAS OFERTAS</button>
          </div>
        </section>
    )
}