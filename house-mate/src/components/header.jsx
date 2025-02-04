import { SideBar } from "@/components/sidebar";
import { SearchBar } from "@/components/searchbar";
// import { Nav } from "@/components/nav";
import { Profiles } from "@/components/profiles";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-100);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  height: 3rem;
  width: 100vw;
  box-sizing: border-box;
  overflow: visible;
`;

const StyledHeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;
  gap: 1rem;
  align-items: center;
`;

export function Header({ logo, title }) {
  return (
    <StyledHeader>
      <SideBar />
      <StyledHeaderContent>
        <h1>
          <a href="/">
            <span className="emoji">{logo}</span> {title}
          </a>
        </h1>
        <SearchBar />
        <Profiles />
      </StyledHeaderContent>
    </StyledHeader>
  );
}
