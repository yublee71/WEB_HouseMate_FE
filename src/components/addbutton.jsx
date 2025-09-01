import { styled } from "@mui/material";
import { useState } from "react";
import { AddSection } from "@/components/addsection";

const StyledAddButton = styled("button")(({ theme }) => ({
  position: "fixed",
  width: "68px",
  height: "68px",
  borderRadius: "50%",
  border: "none",
  bottom: "32px",
  right: "32px",
  backgroundColor: theme.palette.secondary.main,
  padding: "2px 0 0 2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  img: {
    height: "30%",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export function AddButton({
  groceries,
  setGroceries,
  chores,
  setchores,
  groceriesCategories,
  choresCategories,
  users,
}) {
  const [isVisible, setisVisible] = useState(false);
  return (
    <>
      <StyledAddButton
        onClick={() => {
          setisVisible(true);
        }}
      >
        <img src="/addsign.png" alt="add sign" height="24px" />
      </StyledAddButton>
      {isVisible && (
        <AddSection
          setVisibility={setisVisible}
          groceries={groceries}
          setGroceries={setGroceries}
          chores={chores}
          setchores={setchores}
          groceriesCategories={groceriesCategories}
          choresCategories={choresCategories}
          users={users}
        />
      )}
    </>
  );
}
