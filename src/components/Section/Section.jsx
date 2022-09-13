import css from "../Section/Section.module.css"
export default function Section({ children, title }) {
    
    return (
<section className={css.section}>
            {title && <h2 className={css.title}>{title}</h2>}
            {children}
</section>
    );
}