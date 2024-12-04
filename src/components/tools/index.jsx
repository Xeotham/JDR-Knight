import "./tools.scss"
import Button from "../Button"


export default function Tool({ tool }) {
    return (
        <>
            <article className="toolCard">
                <img src={tool.picture} alt={tool.alt} className="toolCard__img" />
                <h3 className="toolCard__title aref">{tool.title}</h3>
                <p className="toolCard__content aref">{tool.content}</p>
                <Button buttonTitle='En savoir plus' buttonLink='/' className="moreButton" />
            </article>
            
        </>
    )
}