import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import HelpButton from "../components/HelpButton";
import { COLORS, LEVEL, PATH } from "../utils/constants";
import { useNavigate } from "react-router-dom";

import minionSmall from "../images/small-minion.png";
import minionBig from "../images/big-minion.png";
import title from "../images/title.png";

const StartGamePage = ({ levelCallback }) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent={"center"}
      alignItems={"center"}
      dir="rtl"
      color={COLORS.EXERSIZE}
    >
      <Grid
        container
        item
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          marginBottom: 1,
          fontSize: 30,
          minHeight: 150,
          background: `url(${title}) no-repeat center`,
        }}
      />
      <Grid
        container
        item
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          container
          item
          xs={12}
          md={6}
          p={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            container
            item
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button
              variant={"contained"}
              color="inherit"
              sx={{
                marginBottom: 1,
                fontSize: 30,
                minHeight: 200,
                minWidth: 200,
                background: `url(${minionSmall}) no-repeat center`,
                backgroundColor: COLORS.OPARATION,
              }}
              onClick={() => {
                levelCallback(LEVEL.EASY);
                navigate(PATH.ADD);
              }}
            />
            <Grid
              container
              item
              xs={12}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="h4"
                component="div"
                display="block"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                לגילאים 6-8
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="body1"
                component="div"
                display="block"
                gutterBottom
              >
                שאלות בסיסיות בחיבור, חיסור, כפל וחילוק.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          p={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            container
            item
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button
              variant={"contained"}
              color="inherit"
              sx={{
                marginBottom: 1,
                fontSize: 30,
                minHeight: 200,
                minWidth: 200,
                background: `url(${minionBig}) no-repeat center`,
                backgroundColor: COLORS.EXERSIZE,
              }}
              onClick={() => {
                levelCallback(LEVEL.HARD);
                navigate(PATH.COMP);
              }}
            />
            <Grid
              container
              item
              xs={12}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="h4"
                component="div"
                display="block"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                לגילאים 8-10
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                variant="body1"
                component="div"
                display="block"
                gutterBottom
              >
                שאלות מתקדמות בחיבור, חיסור, כפל וחילוק, כולל סדר פעולות חשבון.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        my={5}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          container
          item
          sm={10}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            variant="h5"
            display="block"
            gutterBottom
            textAlign={"center"}
          >
            משחק זה מיועד למי שרוצה ללמוד את פעולות החשבון הבסיסיות שהן: חיבור,
            חיסור, כפל, וחילוק. בכל שלב ניתן ללחוץ על כפתור
            <HelpButton />
            כדי לקבל עזרה איך לבצע את התרגיל.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StartGamePage;
