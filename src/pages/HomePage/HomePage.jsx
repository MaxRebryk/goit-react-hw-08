import css from "./HomePage.module.css";
export default function HomePage() {
  return (
    <main>
      <div className={css.greet}>
        <h1>Hello User!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, eos
          deserunt impedit ipsa, amet minus dolor minima saepe tempore quidem
          quasi quaerat sequi unde, eaque aut. Assumenda sapiente impedit
          distinctio?
        </p>
      </div>
    </main>
  );
}
