import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = (props: CircularProgressProps) => {
  return (
    <Container>
      <CircularProgress {...props} />
    </Container>
  );
};
