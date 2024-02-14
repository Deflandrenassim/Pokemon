import './Input.css';

export function Input({ type, placeholder, onChange }) {
    return (

        <input className="input" type={type} placeholder={placeholder} onChange={onChange} />

    )
}