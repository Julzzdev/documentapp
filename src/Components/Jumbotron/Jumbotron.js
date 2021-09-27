import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function Jumbotron() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "50vh",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" color="white">
        Documentapp
      </Typography>
    </Container>
  );
}
