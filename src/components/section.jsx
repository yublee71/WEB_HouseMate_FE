import { Box, Tab, Tabs, Divider } from "@mui/material";
import styled from "styled-components";

const StyledSection = styled.section`
  width: 30%;
  height: 80%;
  @media (max-width: 600px) {
    width: 40%;
  }
`;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0px;
  margin-top: 40px;
  font-size: 18px;
  @media (max-width: 600px) {
    gap: 10px;
    margin-top: 15px;
  }
`;
// const StyledSectionDiv = styled.div`
//   height: 3rem;
//   margin: 10px 0;
//   border-radius: 15px;
//   background-color: var(--color-grey-100);
//   display: flex;
//   align-items: center;
//   div {
//     width: 50%;
//   }
//   div:first-child {
//     height: 2.2rem;
//     width: 50%;
//     border-radius: 13px;
//     margin: 0 8px;
//     background-color: white;
//     box-shadow: 0px 1px 9px rgba(128, 128, 128, 0.404);
//   }
// `;

const StyledInput = styled.input`
  display: inline-block;
  margin-right: 14px;
`;

export function Section({ title, content }) {
  const lis = [];
  for (let i = 0; i < content.length; i++) {
    let t = content[i];
    lis.push(
      <div>
        <StyledInput type="checkbox" key={i} />
        {t.item}
        <Divider sx={{ marginTop: "20px" }} />
      </div>
    );
  }
  return (
    <StyledSection>
      <h2>{title}</h2>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          aria-label="basic tabs example"
          variant="fullWidth"
          centered
          sx={{ fontSize: "18px" }}
        >
          <Tab
            label="Recurring"
            value="1"
            sx={{ zIndex: "-1", textTransform: "none", font: "inherit" }}
          />
          <Tab
            label="One-off"
            value="2"
            sx={{ zIndex: "-1", textTransform: "none", font: "inherit" }}
          />
        </Tabs>
      </Box>
      {/* <StyledSectionDiv>
        <div></div>
        <div></div>
      </StyledSectionDiv> */}
      <StyledUl>{lis}</StyledUl>
    </StyledSection>
  );
}
