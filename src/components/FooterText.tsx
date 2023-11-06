interface FooterProps {
    colorClass: string
}

const FooterText = ({ colorClass }: FooterProps) => {
    return (
        <footer className={`footer footer-center pt-5 ${colorClass}`}>
            <div>
                <a href="https://github.com/gxjakkap" target="_blank" rel="noreferrer">Copyright © 2023 - GuntxJakka</a>
            </div>
        </footer>
    )
}

export default FooterText