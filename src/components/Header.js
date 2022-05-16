import React, { useContext } from "react";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import HelpButton from "./HelpButton";
import LevelContext from "../store/level-context";
import { COLORS, LEVEL, PATH, TITLES } from "../utils/constants";

const Header = ({ levelCallback }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const ctx = useContext(LevelContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" dir="rtl" color="info">
        <Toolbar>
          <Grid container item xs={12} my={1}>
            <Grid
              container
              item
              sm={6}
              justifyContent={"right"}
              alignItems={"center"}
            >
              <HelpButton buttonSize={"small"} color={"white"} />
              <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                <Button
                  color="inherit"
                  size={"large"}
                  sx={{ fontSize: 20 }}
                  onClick={() => {
                    levelCallback(LEVEL.UNDEFINED);
                    navigate("/");
                  }}
                >
                  {TITLES.BACK_TO_START_GAME}
                </Button>
              </Typography>
            </Grid>
            <Grid
              container
              item
              sm={6}
              justifyContent={"left"}
              alignItems={"center"}
            >
              {ctx.level === LEVEL.EASY && (
                <>
                  <Button
                    variant={
                      location.pathname === PATH.ADD ? "contained" : "text"
                    }
                    color="inherit"
                    sx={
                      location.pathname === PATH.ADD && {
                        backgroundColor: COLORS.OPARATION,
                        color: "black",
                      }
                    }
                    onClick={() => navigate(PATH.ADD)}
                  >
                    חיבור
                  </Button>
                  <Button
                    variant={
                      location.pathname === PATH.SUB ? "contained" : "text"
                    }
                    color="inherit"
                    sx={
                      location.pathname === PATH.SUB && {
                        backgroundColor: COLORS.OPARATION,
                        color: "black",
                      }
                    }
                    onClick={() => navigate(PATH.SUB)}
                  >
                    חיסור
                  </Button>
                  <Button
                    variant={
                      location.pathname === PATH.MULT ? "contained" : "text"
                    }
                    color="inherit"
                    sx={
                      location.pathname === PATH.MULT && {
                        backgroundColor: COLORS.OPARATION,
                        color: "black",
                      }
                    }
                    onClick={() => navigate(PATH.MULT)}
                  >
                    כפל
                  </Button>
                  <Button
                    variant={
                      location.pathname === PATH.DIVI ? "contained" : "text"
                    }
                    color="inherit"
                    sx={
                      location.pathname === PATH.DIVI && {
                        backgroundColor: COLORS.OPARATION,
                        color: "black",
                      }
                    }
                    onClick={() => navigate(PATH.DIVI)}
                  >
                    חילוק
                  </Button>
                </>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
