import './Variant.css';
import { Button } from '../Button/Button';
export function Variant({ children, type }) {
    return (
        <div className={`variant ${type}`}>
            {children}
        </div>
    )
}
export function VariantBtn({ children, type, appareance }) {
    return (
        <Button className={`variant ${type} ${appareance}`}>
            {children}
        </Button>
    )
}