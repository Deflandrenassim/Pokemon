import './Modal.css';

export function Modal({ children, active, PokeUi }) {
    if (active === true) {
        return (
            <div className={`modal ${PokeUi}`}>
                {children}
            </div>
        )
    }
}