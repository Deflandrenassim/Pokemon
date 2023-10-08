import './Variant.css';

export function Variant({ children, type }) {
    return (
        <span className={`variant ${type}`}>
            {children}
        </span>
    )
}