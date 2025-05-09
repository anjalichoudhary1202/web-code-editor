import {useState} from 'react';
import { Box , styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import ReactCodeMirror from '@uiw/react-codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/comment/comment';

import '../App.css';

const Container = styled(Box)`
  flex-grow:1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`
const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
`

const Header = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 700;
`
const Editor = ({heading, icon, color, value, onChange, language}) => {

  const [open, setOpen] = useState(true);

  const handleChange = (value) => {    
    onChange(value);
  }

  return (
    <Container style={open ? null : {flexGrow:0}}>
      <Header>
        <Heading>
          <Box 
            component="span"
            style={{
              background:color,
              height: 20,
              width: 20,
              display: 'flex',
              placeContent: 'center',
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "#000",
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon 
          fontSize="small"
          style={{alignSelf: 'center'}}
          onClick={()=>setOpen(prevState=> !prevState) }
        />
      </Header>
      <ReactCodeMirror
        className='controlled-editor'
        value={value}
        onChange={handleChange}
        options={{
          lineWrapping: true,
          theme: 'material',
          lineNumbers: true,
          // autoCloseBrackets: true,
          autoCloseTags: true,  
          mode: language,
        }}
      />
    </Container>
  )
}

export default Editor
