import './Variant.css';

export function Variant({ children, type }) {
    return (
        <div className={`variant ${type}`}>
            {children}
        </div>
    )
}
export function VariantBtn({ children, type }) {
    return (
        <button className={`variant ${type}`}>
            {children}
        </button>
    )
}