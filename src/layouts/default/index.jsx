import Footer from "../../components/footer"
import { Outlet } from 'react-router-dom'
import Header from "../../components/header"

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet /> 
            </main>
            <Footer />
        </>
    )
}