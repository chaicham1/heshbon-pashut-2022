import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { COLORS, PATH } from "../../utils/constants";
import { useLocation } from "react-router-dom";

const GameBoard = ({ drill, options, answerCallback }) => {
  const location = useLocation();

  const checkIfSimple =
    location.pathname === PATH.ADD ||
    location.pathname === PATH.SUB ||
    location.pathname === PATH.MULT;

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent={"center"}
      alignItems={"center"}
      dir="ltr"
    >
      <Grid
        container
        item
        sm={12}
        justifyContent={"center"}
        alignItems={"center"}
        color={"white"}
        sx={{
          backgroundColor: COLORS.EXERSIZE,
          borderRadius: 5,
        }}
      >
        <Grid
          container
          item
          sm={8}
          py={10}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h3" display="block" textAlign={"center"}>
            {drill}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        my={5}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={5}
      >
        {options?.map((option, index) => {
          let backgroundColor =
            (index === 0 && COLORS.OPTION1) ||
            (index === 1 && COLORS.OPTION2) ||
            (index === 2 && COLORS.OPTION3);
          return (
            <Grid
              key={index}
              container
              item
              sm={4}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Button
                fullWidth
                variant="contained"
                size="large"
                color={"inherit"}
                sx={{
                  marginBottom: 1,
                  fontSize: 20,
                  backgroundColor: backgroundColor,
                }}
                onClick={() => {
                  answerCallback(option.isCorrect);
                }}
              >
                {checkIfSimple ? Math.floor(option.value) : option.value}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default GameBoard;
