import logo from "./logo.svg";
import "./App.css";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Jumbotron from "./Components/Jumbotron/Jumbotron";
import DocumentCard from "./Components/Card/DocumentCard";

function App() {
  const documentos = [
    {
      title: 'acta de nacimiento',
      type: 'personal'
    },
    {
      title: 'cédula profesional',
      type: 'universidad'
    },
    {
      title: 'título licenciatura',
      type: 'universidad'
    },
    {
      title: 'licencia de conducir',
      type: 'personal'
    }
]
  return (
    <div>
      <Jumbotron />
      <Box sx={{ flexGrow: 1}}>
      <Grid
        container
        spacing={2}
      >
        {
          documentos.map(documento => {
            return (
              <Grid item md={3}>
                <DocumentCard title={documento.title} type={documento.type}/>
              </Grid>
            )
          })
        }
      </Grid>
      </Box>
    </div>
  );
}

export default App;
