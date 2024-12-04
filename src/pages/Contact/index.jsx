import BigBanner from "../../components/bigBanner"
import bigBannerImg from "../../assets/images/Contact.jpg"
import Form from "../../components/form/index"
import "./contact.scss"
import Banner from "../../components/banner"
import Map from "../../components/map"

export default function Contact() {
    return (
        <>
            <BigBanner bigBannerImg={bigBannerImg} bigBannerAlt="Bandeau Contact Enveloppes" />
            <Banner bannerTitle="NOUS CONTACTER" />
            <section className="contact">
                <div className="contact__head">
                    <h1 className="contact__head__title">Charente || Angoulême || Torsac</h1>
                    <p className="contact__head__subtitle gras">✉ <span>contact@radreams.com</span><br />Consultations sur rdv uniquement<br />06 34 10 83 49 || 06 72 89 61 65</p>
                </div>
                <Map />
                <Form />
            </section>
        </>
    )
}
