import './PlayerPoint.css'
import { useCountPoint } from "../../context/Point"

export function PlayerPoint() {
    const { point } = useCountPoint();

    return (
        <div className="points">
            <div> {point.playerPointOne} </div>
            <div>  {point.playerPointTwo} </div>
        </div>
    )
}