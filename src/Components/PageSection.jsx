export default function PageSection({ children, className }) {
  return (
    <section className={`py-14 ${className ? className : ""}`}>
      <div className="container">{children}</div>
    </section>
  );
}
