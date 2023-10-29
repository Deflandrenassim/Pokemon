import { Card, CardInfo } from '../../components/Card/Card';
// import { Picture } from '../../components/Picture/Picture';

export function CardRandomPokemon({ random }) {
    return (
        <div>
            <Card>
                {/* <Picture src={props.sprites.front_default} alt={props.name} size /> */}
                <CardInfo>
                    {random.name}
                </CardInfo>
            </Card>
        </div>
    )
}