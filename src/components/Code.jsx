import React, { useContext } from 'react'
import Editor from './Editor'

import {Box, styled, Button} from '@mui/material';
import { DataContext } from '../context/DataProvider';

const Container = styled(Box)`
  display: flex;
  background-color: #060606;
  height: 50vh;
`
const StyledButton = styled(Button)`
  height: 40px;
  position: absolute;
  top: 0;
  right: 0;
`;
const Code = () => {

  const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext);
  const handleReset = () => {
    // Reset all the content and also reset localStorage through the setters
    setHtml('');
    setCss('');
    setJs('');
  };

  return (
    <Container>
      <Editor 
        heading="HTML"
        icon='/'
        color='#FF3C41'
        value={html}
        onChange={setHtml}
        language="xml"
      />
      <Editor 
        heading="CSS"
        icon='*'
        color='#0EBEFF'
        value={css}
        onChange={setCss}
        language="css"
        />
      <Editor 
        heading="JavaScript"
        icon='( )'
        color='#FCD000'
        value={js}
        onChange={setJs}
        language="javascript"
      />
      <StyledButton
        variant="outlined"
        color="secondary"
        size="large"
        onClick={handleReset}
        style={{ margin: '16px' }}
      >
        Reset Code
      </StyledButton>
    </Container>
  )
}

export default Code
