import { Card, CardInfo } from '../../components/Card/Card';
import { Picture } from '../../components/Picture/Picture';

export function CardRandomPokemon({ random }) {
    if (random === undefined) {
        return null;
    }
    return (
        <div>
            <Card>
                <Picture src={random.sprites.front_default} alt={random.name} />
                <CardInfo>
                    {random.name}
                </CardInfo>
            </Card>
        </div>
    )
}