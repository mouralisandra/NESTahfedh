import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  home: {
    height: "calc(100vh - 70px)",
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "center",
      alignItems: "end",
      margin: "0 7rem",
      marginTop :"-.4rem",
    },
  },
  container: {
    display: "flex !important",
    flexDirection: "column",
    height: "80%",
    zIndex: 1,
    marginTop : "-5rem",
    color: "black",
  },
   type: {
    color: "#e256e2" ,
  },
  text: {
    color: "black",
    padding: "1rem",
    paddingRight: "0",
    alignSelf: "flex-start",
    fontSize: "1.9rem !important",
    fontWeight: "700 !important",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.2rem !important",
    }
  },
  aboutText: {
    fontSize: "1.2rem !important",
    lineHeight: "1.7 !important",
  },
  aboutImage: {
    width: "100%",
    marginTop: "1rem",
    [theme.breakpoints.only("sm")]: {
      width: "70%",
    },
  },
  colorText: {
    color: '#d72d90',
  },
  aboutContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },

  },
}));