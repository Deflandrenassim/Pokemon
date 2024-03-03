import './Picture.css';

export function Picture({ src, alt, size, spinner }) {
    return (
        <img className={`picture ${size} ${spinner }`} src={src} alt={alt} />
    )

}