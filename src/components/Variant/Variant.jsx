import './Variant.css';

export function Variant({ children, type }) {
    return (

        <div className={`variant ${type}`}>
            {children}
        </div>

    )
}