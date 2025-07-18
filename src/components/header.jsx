import { SideBar } from "@/components/sidebar";
import { SearchBar } from "@/components/searchbar";
// import { Nav } from "@/components/nav";
import { Profiles } from "./auth/profiles";
import { styled } from "@mui/material/styles";

const StyledHeader = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  margin: 0,
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  padding: "2rem",
  height: "3rem",
  width: "100vw",
  boxSizing: "border-box",
}));

const StyledHeaderContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  gap: "5%",
  alignItems: "center",
}));

export function Header({ logo, title }) {
  return (
    <StyledHeader>
      <SideBar />
      <StyledHeaderContent>
        <h1>
          <a href="/">
            <span className="emoji"></span> {title}
          </a>
        </h1>
        <SearchBar />
        <Profiles />
      </StyledHeaderContent>
    </StyledHeader>
  );
}
