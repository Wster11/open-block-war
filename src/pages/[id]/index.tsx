import { useParams, useSearchParams } from "react-router-dom";
import App from "../../UI/App";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Box from "@mui/material/Box";
import { applyLocalConfig, setLiveId, setTheme } from "../../store/configSlice";
import { colorToString } from "../../paid/theme";
export default function () {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const theme = searchParams.get("theme");

  dispatch(setLiveId(parseInt(id as string)));
  dispatch(setTheme(theme));
  dispatch(applyLocalConfig());

  const { styleTheme } = useSelector((state: RootState) => state.config);
  const { theme: themeClassName } = useSelector(
    (state: RootState) => state.config
  );


  return (
    <Box
      className={themeClassName}
      sx={{
        backgroundColor: colorToString(styleTheme.backgroundColor, "#ebffe2"),
        color: colorToString(styleTheme.textColor, "#000000")
      }}
    >
      <App />
    </Box>
  );
}
