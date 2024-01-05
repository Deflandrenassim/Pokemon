import './Modal.css';

export function Modal({ children, active, PokeUi, variant }) {
    if (active === true) {
        return (
            <div className={`modal ${PokeUi} ${variant}`}>
                {children}
            </div>
        )
    }
}