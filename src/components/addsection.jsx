import styled from "styled-components";
import { useState } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

const StyledAddSection = styled.section`
  position: fixed;
  top: 15%;
  left: 15%;
  height: 70%;
  width: 70%;
  background-color: var(--color-grey-100);
  border-radius: 15px;
  box-shadow: 0px 1px 9px rgba(128, 128, 128, 0.404);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  img {
    &:hover {
      cursor: pointer;
    }
    position: absolute;
    right: 30px;
    top: 30px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  * {
    width: 500px;
    box-sizing: border-box;
    height: 60px;
  }
`;

export function AddSection(props) {
  let setVisibility = props.setVisibility;
  let groceries = props.groceries;
  let chores = props.chores;
  let setGroceries = props.setGroceries;
  let setchores = props.setchores;
  let groceriesCategories = props.groceriesCategories;
  let choresCategories = props.choresCategories;
  let users = props.users;
  const [maincategory, setMaincategory] = useState("To-buy");
  const [subcategory, setSubcategory] = useState("");
  const [owner, setOwner] = useState("");
  const handleMaincategoryChange = (e) => {
    setMaincategory(e.target.value);
  };
  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };
  const handleOwnerChange = (e) => {
    setOwner(e.target.value);
  };
  return (
    <StyledAddSection>
      <img
        src="close.png"
        alt="close"
        height="24px"
        onClick={() => {
          setVisibility(false);
        }}
      />
      <RadioGroup
        area-labelledby="main-category"
        defaultValue="To-buy"
        name="main-category-group"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
        value={maincategory}
        onChange={handleMaincategoryChange}
      >
        <FormControlLabel
          value="To-buy"
          control={<Radio />}
          label="To-buy"
        ></FormControlLabel>
        <FormControlLabel
          value="To-do"
          control={<Radio />}
          label="To-do"
        ></FormControlLabel>
      </RadioGroup>

      <StyledForm
        action=""
        method="GET"
        onSubmit={(event) => {
          event.preventDefault();
          const new_item = event.target.item.value;
          if (maincategory == "To-buy")
            setGroceries([
              ...groceries,
              { item: new_item, category: subcategory },
            ]);
          else if (maincategory == "To-do")
            setchores([...chores, { item: new_item, owner: owner }]);
          setVisibility(false);
        }}
      >
        <TextField
          label="Item"
          type="text"
          id="item"
          size="medium"
          sx={{
            "& .MuiFormLabel-asterisk": { display: "none" },
          }}
          name="item"
          required
        ></TextField>
        <FormControl>
          {maincategory == "To-buy" ? (
            <>
              <InputLabel id="subcategory">Category</InputLabel>
              <Select
                labelId="subcategory"
                id="subcategory-select"
                label="subcategory"
                value={subcategory}
                size="medium"
                onChange={handleSubcategoryChange}
                required
              >
                <MenuItem value={groceriesCategories[0]}>
                  {groceriesCategories[0]}
                </MenuItem>
                <MenuItem value={groceriesCategories[1]}>
                  {groceriesCategories[1]}
                </MenuItem>
              </Select>
            </>
          ) : (
            <>
              <InputLabel id="owner">Owner</InputLabel>
              <Select
                labelId="owner"
                id="owner-select"
                label="owner"
                value={owner}
                size="medium"
                onChange={handleOwnerChange}
                required
              >
                <MenuItem value={users[0]}>{users[0]}</MenuItem>
                <MenuItem value={users[1]}>{users[1]}</MenuItem>
              </Select>
            </>
          )}
        </FormControl>
        <Button type="submit" variant="contained">
          Add
        </Button>
      </StyledForm>
    </StyledAddSection>
  );
}
