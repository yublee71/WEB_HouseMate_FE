import "./section.css";

function Section({ title, options }) {
  return (
    <section class="main-section">
      <h2>{title}</h2>
      <div class="option-section">
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Section;
