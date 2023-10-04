import './Picture.css';

export function Picture({ src, alt, size }) {
    return (
        <img className={`picture ${size}`} src={src} alt={alt} />
    )

}