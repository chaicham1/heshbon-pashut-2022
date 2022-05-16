import React, { useState } from "react";
import GameBoard from "./GameBoard";
import { Alert, AlertTitle, Dialog, DialogContent } from "@mui/material";

const GameContainer = ({ drill, options, changeDrillAndAnswer }) => {
  const [open, setOpen] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (isCorrectAnswer) changeDrillAndAnswer();
    setOpen(false);
  };

  const handleAnswerCallback = (isCorrectAnswerCallback) => {
    setIsCorrectAnswer(isCorrectAnswerCallback);
    handleClickOpen();
  };

  return (
    <>
      <GameBoard
        drill={drill}
        options={options}
        answerCallback={handleAnswerCallback}
      />
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        dir={"rtl"}
      >
        <DialogContent>
          {isCorrectAnswer ? (
            <Alert severity="success">
              <AlertTitle>תשובה נכונה!</AlertTitle>
              <strong>כל הכבוד, עבודה טובה</strong>
            </Alert>
          ) : (
            <Alert severity="error">
              <AlertTitle>טעות</AlertTitle>
              <strong>ננסה שוב, בסוף נצליח</strong>
            </Alert>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GameContainer;
