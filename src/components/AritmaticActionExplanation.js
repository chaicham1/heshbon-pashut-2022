import React from "react";
import { Grid, Typography } from "@mui/material";

const AritmaticActionExplanation = ({ text, image, alt }) => {
  return (
    <Grid
      container
      item
      xs={12}
      justifyContent={"center"}
      alignItems={"center"}
      dir="rtl"
    >
      <Grid
        container
        item
        sm={8}
        justifyContent={"center"}
        alignItems={"center"}
        dir="rtl"
      >
        <Typography
          variant="body1"
          component="div"
          display="block"
          gutterBottom
        >
          {text}
        </Typography>
      </Grid>
      <Grid
        container
        item
        sm={4}
        justifyContent={"center"}
        alignItems={"center"}
        dir="rtl"
      >
        <img src={image} alt={alt} width={120} />
      </Grid>
    </Grid>
  );
};

export default AritmaticActionExplanation;
