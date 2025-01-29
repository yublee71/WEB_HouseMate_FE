import Nav from "@/components/nav";

function Header(props) {
  let { title } = props;
  return (
    <header>
      <h1>
        <a href="/">{title}</a>
      </h1>
      <Nav></Nav>
    </header>
  );
}

export default Header;
