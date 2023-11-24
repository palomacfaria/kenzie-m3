import bannerImg from "../../../assets/banner.jpg"

export const BannerSection = () => {
    return (
        <section>
          <img src={bannerImg} alt="Banner da página" />
          <div>
            <h1>FASHION STORE</h1>
            <p>Fique por dentro das nossas ultimas promoções</p>
            <button>CONFIRA NOSSAS OFERTAS</button>
          </div>
        </section>
    )
}