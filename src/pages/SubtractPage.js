import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import GameContainer from "../components/Game/GameContainer";
import LevelContext from "../store/level-context";
import { useNavigate } from "react-router-dom";
import { LEVEL } from "../utils/constants";
import { createSimpleDrill, MainArray } from "../utils/calculations";

const SubtractPage = () => {
  const navigate = useNavigate();
  const ctx = useContext(LevelContext);

  const [drill, setDrill] = useState("");
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setDrill(createSimpleDrill("-"));
    setAnswers(MainArray);
  }, []);

  useEffect(() => {
    if (ctx.level === LEVEL.UNDEFINED) {
      navigate("/");
    }
  }, [ctx.level, navigate]);

  const changeDrillAndAnswerCallback = () => {
    setDrill(createSimpleDrill("-"));
    setAnswers(MainArray);
  };

  return (
    <Grid
      container
      item
      xs={12}
      py={5}
      px={2}
      justifyContent={"center"}
      alignItems={"center"}
      dir="rtl"
    >
      <GameContainer
        drill={drill}
        options={answers}
        changeDrillAndAnswer={changeDrillAndAnswerCallback}
      />
    </Grid>
  );
};

export default SubtractPage;
