import { Link } from "react-router-dom"
import Banner from "../../components/banner"
import "./deontologie.scss"

export default function Deontologie() {
    return (
        <>
            <Banner bannerTitle="DÉONTOLOGIE" />

            <section className="deontologieContainer">

                <h1 className="deontologieContainer__sectionTitle aref"><Link to="/" className="aref">Ra Dreams</Link> s’appuie sur les grands principes suivants :</h1>

                <h3 className="deontologieContainer__title prestage">I. Étique – Intégrité</h3>
                <p className="deontologieContainer__content aref">
                    Vos praticiens : <br /> <br />
                    - Font preuve d’intégrité personnelle et d’honnêteté dans les relations qu’ils entretiennent avec vous et l’ensemble des parties prenantes <br />
                    - Prennent en considération votre bien-être, votre intégrité physique et psychique <br />
                    - Vous accompagnent dans le respect de votre identité, de votre originalité et de votre dignité <br />
                    - Vous accompagnent dans votre intégralité : environnement, expériences, valeurs et croyances <br />
                    - Interdisent toute propagande ou prosélytisme religieux ou idéologique au sein de leurs cabinets ou lieux d’intervention
                </p>
                <h3 className="deontologieContainer__title prestage">II. Confidentialité</h3>
                <p className="deontologieContainer__content aref">
                    Vos praticiens : <br /><br />
                    Garantissent la confidentialité des informations collectées durant les accompagnements individuels ou de groupes
                </p>
                <h3 className="deontologieContainer__title prestage">III. Posture des praticiens</h3>
                <p className="deontologieContainer__content aref">
                    Vos praticiens : <br /><br />
                    - Maintiennent et développent un état d’esprit ouvert, bienveillant et sans jugement <br />
                    - Développent un espace de confiance et de sécurité<br />
                    - Co-construisent avec vous en reconnaissant et en favorisant l’expression de vos sentiments, perceptions, préoccupations, convictions…<br />
                    - Vous reconnaissent la responsabilité de vos propres choix<br />
                    - Sont engagés dans une démarche d’actualisation de leurs savoirs, de formation et de développement continus<br />
                    - Respectent leurs propres limites et celles de leurs spécialités
                </p>
                <h3 className="deontologieContainer__title prestage">IV. Limites de pratique</h3>
                <p className="deontologieContainer__content aref">
                    Vos praticiens : <br /> <br />
                    - Se réservent le droit de refuser tout accompagnement avec vous s’il paraît raisonnable de devoir consulter un médecin au préalable (Exemple : la gestion de la douleur…). Dans ce cas, ils travailleront uniquement après évaluation et autorisation de celui-ci <br />
                    - Se réservent le droit de vous demander un mandat écrit d’un médecin ou professionnel de la santé autorisant la pratique de leur discipline s’ils l’estiment nécessaire<br />
                    - Utilisent leurs disciplines dans les limites strictes de leur entraînement, de leurs compétences<br />
                    - S’engagent à ne pas se substituer aux professionnels de santé, à ne pas prodiguer de diagnostic, de prescriptions médicales et à ne pas interférer avec des traitements médicaux en cours.<br />
                    - Vous orientent vers un autre professionnel lorsque l’accompagnement nécessite un traitement ou une aide thérapeutique ne relevant pas de leurs compétences
                </p>
            </section>
        </>
    )
}
