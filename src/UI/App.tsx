import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Config from "./Components/Config";
import GameCard from "./Components/GameCard";
import LeftSlider from "./Components/LeftSlider";
import { Result } from "./Components/Result";
import RightSlider from "./Components/RightSlider";
import { useEffect } from "react";
import conn from "../IM/init";

export default function App() {
  useEffect(() => {
    conn.open({
      user: "st66",
      pwd: "123"
    });
  }, []);

  return (
    <>
      <Result></Result>
      <Config></Config>
      <Box
        sx={{
          boxSizing: "border-box",
          height: "100vh"
        }}
      >
        <Grid
          container
          columns={{
            xs: 96
          }}
        >
          <Grid item xs={21}>
            <LeftSlider></LeftSlider>
          </Grid>
          <Grid item xs={53}>
            <GameCard />
          </Grid>
          <Grid item xs={22}>
            <RightSlider></RightSlider>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
