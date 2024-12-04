import { Link } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"
import "./error404.scss"

export default function Error404() {
    return (
        <>
            <Header/>
            <section className="error404">
                <h3 className="error404__error prestage">ERREUR 404</h3>
                <p className="error404__message aref">Cette page n'exite pas! Vous pouvez retourner sur la page <Link to="/" className="aref">d'Accueil.</Link></p>
            </section>
            <Footer/>
        </>
    )
}
