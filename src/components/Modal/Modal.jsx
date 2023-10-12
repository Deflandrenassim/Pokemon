import './Modal.css';

export function Modal({ children, active }) {
    if (active === true) {
        return (
            <div className="modal">
                {children}
            </div>
        )
    }
}