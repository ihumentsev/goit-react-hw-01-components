export default function Section({children, title}) {
    return (
<section className="statistics">
            {title && <h2 className="title">{title}</h2>}
            {children}
</section>
    );
}