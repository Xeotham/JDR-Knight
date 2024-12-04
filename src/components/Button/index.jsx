import { Link } from "react-router-dom"
import "./button.scss"


export default function Button(props) {
    return (
        <div className='buttonContainer'>
            <Link to={props.buttonLink}>
                <button type="button" className="button">
                    <p className="button__text prestage">{props.buttonTitle}</p>
                </button>
            </Link>
        </div>

    )
}