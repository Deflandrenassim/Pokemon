import './Variant.css';
import { Button } from '../Button/Button';
export function Variant({ children, type }) {
    return (
        <div className={`variant ${type}`}>
            {children}
        </div>
    )
}
export function VariantBtn({ children, type, appareance, onClick }) {
    return (
        <Button onClick={onClick} className={`variant ${type} ${appareance}`}>
            {children}
        </Button>
    )
}