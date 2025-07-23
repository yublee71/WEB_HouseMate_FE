import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  borderRadius: 15,
  position: "relative",
  backgroundColor: "#F3F6F9",
  border: "1px solid",
  borderColor: "#E0E3E7",
  fontSize: 16,
  maxWidth: "700px",
  flexGrow: 1,
  height: "35px",
  paddingLeft: "20px",
  paddingRight: "13px",
  transition: theme.transitions.create([
    "border-color",
    "background-color",
    "box-shadow",
  ]),
  "&:focus-within": {
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    borderColor: theme.palette.primary.main,
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
    borderColor: "#2D3843",
  }),
  [theme.breakpoints.down("sm")]: {
    width: "85px",
  },
}));

export function SearchBar() {
  return (
    <StyledInput
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
    ></StyledInput>
  );
}
