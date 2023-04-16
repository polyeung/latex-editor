import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as katex from 'katex';
import get_mathjax_svg from './Math';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';





import { Typography, Box, Button} from '@mui/material';
function App() {
  const [text, setText] = React.useState<string>("");
  const [math, setMath] = React.useState<string>("");

  const [allResStr, setAll] = React.useState<Array<string>>([]);
  const [resStr, setResStr] = React.useState<string>("");
  
  return (
    <div className="App" style={{padding: "40px"}}>
     
      <Typography variant='h4'>Text Editor supporting Latex</Typography>
      <Grid container spacing={0}>
      <Grid item xs={4}>
      
      </Grid>
      
      <Grid item xs={4}>
      <TextField style={{marginTop: '10px'}}value={math} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMath(event.target.value)}/>
      <Button onClick={() => {setAll([...allResStr, get_mathjax_svg(math)]);setMath("");}} variant="contained" style={{marginLeft: '10px'}}> Submit Math Equation</Button>
      </Grid>
      
      </Grid>
      {allResStr.map((str) => (
        <Box
          color={"white"}
          style={{ backgroundColor: "black", height: "50px", marginTop: "20px" }}
          dangerouslySetInnerHTML={{ __html: str }}
        ></Box>))}


    </div>
  );
}

export default App;
