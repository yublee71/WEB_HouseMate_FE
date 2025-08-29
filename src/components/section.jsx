import { Box, Tab, Tabs, Divider, Typography } from "@mui/material";
import { useState } from "react";
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
  /* margin-top: 40px; */
  font-size: 18px;
  @media (max-width: 600px) {
    gap: 10px;
    margin-top: 15px;
  }
`;

const StyledInput = styled.input`
  display: inline-block;
  margin-right: 14px;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>
        <StyledUl>{children}</StyledUl>
      </Box>
    </Typography>
  );
}

function allyProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export function Section({ title, content }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const recurringLis = [];
  for (let i = 0; i < content.length; i++) {
    let t = content[i];
    if (t.category == 0)
      recurringLis.push(
        <div key={i}>
          <StyledInput type="checkbox" />
          {t.item}
          <Divider sx={{ marginTop: "20px" }} />
        </div>
      );
  }
  const oneOffLis = [];
  for (let i = 0; i < content.length; i++) {
    let t = content[i];
    if (t.category == 1)
      oneOffLis.push(
        <div key={i}>
          <StyledInput type="checkbox" />
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
          aria-label="section tabs"
          variant="fullWidth"
          scrollButtons="auto"
          centered
          value={value}
          onChange={handleChange}
          sx={{ fontSize: "18px" }}
        >
          <Tab
            label="Recurring"
            value={0}
            sx={{ textTransform: "none", font: "inherit" }}
            {...allyProps(0)}
          />
          <Tab
            label="One-off"
            value={1}
            sx={{ textTransform: "none", font: "inherit" }}
            {...allyProps(1)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {recurringLis}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {oneOffLis}
      </TabPanel>
      {/* <StyledUl>{lis}</StyledUl> */}
    </StyledSection>
  );
}
