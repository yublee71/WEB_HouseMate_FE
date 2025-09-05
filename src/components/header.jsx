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
  boxSizing: "border-box",
  [theme.breakpoints.down("sm")]: {
    gap: 0,
    paddingLeft: 15,
    paddingRight: 15,
  },
}));

const StyledHeaderContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexGrow: 1,
  gap: "15px",
  alignItems: "center",
  margin: "0 20px",
  [theme.breakpoints.down("sm")]: {
    margin: 0,
    justifyContent: "space-around",
  },
}));

export function Header({ logo, title, usr, isLoading }) {
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
        <Profiles usr={usr} isLoading={isLoading} />
      </StyledHeaderContent>
    </StyledHeader>
  );
}
