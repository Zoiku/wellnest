import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#BD8CE9" : "#BD8CE9",
  },
}));

const Progress = ({ value, max }) => {
  const transformedValue = (value / max) * 100;
  return (
    <BorderLinearProgress variant="determinate" value={transformedValue} />
  );
};

export default Progress;
