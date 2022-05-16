import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import AritmaticActionExplanation from "./AritmaticActionExplanation";

import addImage from "../images/add.png";
import subImage from "../images/sub.png";
import multImage from "../images/mult.png";
import divideImage from "../images/divide.png";

const HelpButton = ({ buttonSize = "large", color }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addObject = {
    text: '    \'משמעותו המקובלת של החיבור היא משמעות של צירוף. המספרים הנתונים לחיבור נקראים "מחוברים" (כאשר כל אחד מהם נקרא "מחובר"), והמספר המתקבל כתוצאה מהחיבור נקרא "סכום". פעולת החיבור מסומנת בסימן  +, המבוטא "ועוד" או "פלוס". לכן, את הביטוי 3 + 5 יש לקרוא "חמש ועוד שלוש" או "חמש פלוס שלוש".\';\n',
    image: addImage,
    alt: "חיבור",
  };
  const subObject = {
    text: 'בפעולת החיסור ניתנים כרגיל שני מספרים, הראשון אשר ממנו מחסרים נקרא "מְחוּסַר", והשני, שאותו מחסרים, נקרא "מְחַסְר". המספר המתקבל כתוצאה מהחיסור נקרא "הֶפְרֵשׁ". פעולת החיסור מסומנת בסימן  -, המבוטא "מינוס" או "פחות". לכן, את הביטוי 2 - 5 יש לקרוא "חמש מינוס שתיים" או "חמש פחות שתיים". בחינת תוצאת החיסור נעשית באמצעות חיבור ההפרש למחסר. הדרך האינטואיטיבית המקובלת לחשוב על חיסור היא כעל גריעה: אם בקבוצה היה מספר כלשהו של עצמים וגרענו מהקבוצה חלק מהעצמים, כמה נשארו? ',
    image: subImage,
    alt: "חיסור",
  };
  const multObject = {
    text: 'בפעולת כפל נתונים שני מספרים. האחד - הראשון בסדר הכתיבה אשר אותו מכפילים - נקרא "נִכְפָּל", והשני - בו מכפילים - נקרא" "כּוֹפֵל". שניהם יחדו נקראים "גורמים". עבור שאלות מילוליות - הנכפל נושא תמיד את השם הנתון בשאלה (כדורים / בובות וכו\'). הכופל מראה פי כמה להגדיל את הנכפל, ולכן מיחסים לו את השם "פעמים". המספר המתקבל כתוצאה מהכפל נקרא "מַכְפֵּלָה". את הביטוי 3X5 יש לקרוא "שלוש כפול חמש" או "חמש פעמים שלוש ".',
    image: multImage,
    alt: "כפל",
  };
  const divideObject = {
    text: 'בפעולת חילוק נתונים שני מספרים. הראשון שאותו מחלקים, נקרא "מחולק". והשני, שבו מחלקים את הראשון, נקרא "מחלק". המספר המתקבל כתוצאה מהחילוק נקרא "מנה". בחילוק אי אפשר לשנות את מיקומם של המספרים הנתונים בו. הבחינה של תוצאת החילוק נעשית באמצעות כפל - מכפילים את המחלק במנה, וכשיש שארית מוסיפים אותה למכפלה של המחלק במנה. את התוצאה משווים למחולק.',
    image: divideImage,
    alt: "חילוק",
  };

  return (
    <>
      <IconButton
        aria-label="help"
        size={buttonSize}
        sx={color && { color: color }}
        onClick={handleClickOpen}
      >
        <HelpIcon fontSize="inherit" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        dir={"rtl"}
      >
        <DialogTitle id="alert-dialog-title">צריך עזרה?</DialogTitle>
        <DialogContent id="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">חיבור</DialogTitle>
          <DialogContent>
            <AritmaticActionExplanation
              text={addObject.text}
              image={addObject.image}
              alt={addObject.alt}
            />
          </DialogContent>
          <DialogTitle id="alert-dialog-title">חיסור</DialogTitle>
          <DialogContent>
            <AritmaticActionExplanation
              text={subObject.text}
              image={subObject.image}
              alt={subObject.alt}
            />
          </DialogContent>
          <DialogTitle id="alert-dialog-title">כפל</DialogTitle>
          <DialogContent>
            <AritmaticActionExplanation
              text={multObject.text}
              image={multObject.image}
              alt={multObject.alt}
            />
          </DialogContent>
          <DialogTitle id="alert-dialog-title">חילוק</DialogTitle>
          <DialogContent>
            <AritmaticActionExplanation
              text={divideObject.text}
              image={divideObject.image}
              alt={divideObject.alt}
            />
          </DialogContent>
          <DialogTitle id="alert-dialog-title">סדר פעולות חשבון</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              בתרגילים בהם יש גם כפל וחילוק וגם חיבור וחיסור, נבצע את פעולות
              החשבון לפי הסדר הבא: כפל וחילוק, חיבור וחיסור. במידה וקיימים
              בתרגיל כמה פעמים פעולות של כפל וחילוק, נפתור אותם משמאל לימין.
            </DialogContentText>
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            הבנתי
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HelpButton;
