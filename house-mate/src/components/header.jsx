import Nav from "@/components/nav";
import SearchBar from "@/components/searchbar";
import Profiles from "@/components/profiles";
import SideBar from "@/components/sidebar";
import "./header.css";

function Header({ logo, title }) {
  return (
    <header>
      <SideBar></SideBar>
      <div class="header-main">
        <h1>
          <a href="/">
            <span class="emoji">{logo}</span> {title}
          </a>
        </h1>
        <SearchBar></SearchBar>
        <Profiles></Profiles>
      </div>
    </header>
  );
}

export default Header;
