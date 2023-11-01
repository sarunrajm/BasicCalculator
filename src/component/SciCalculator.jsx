import React, { useState } from 'react';
import { Container, Box, Button } from '@mui/material';

function SciCalculator() {
  const [input, setInput] = useState('0'); // Initialize with '0' as the default result
  const [darkMode, setDarkMode] = useState(false);

  const handleButtonClick = (value) => {
    setInput(input === '0' ? value : input + value);
  };

  const handleClear = () => {
    setInput('0');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleSquareRoot = () => {
    try {
      const sqrtResult = Math.sqrt(eval(input));
      setInput(sqrtResult.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const buttonStyle = {
    minWidth: '75px',
    minHeight: '75px',
    borderRadius: '50%',
    fontSize: '24px',
    padding: '8px',
    border: `2px solid ${darkMode ? 'black' : 'white'}`, // Conditional border color
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
  };

  return (
    <Container style={{border:'1px solid', borderRadius:'20px', marginTop: '50px', height: '550px', width: '400px', backgroundColor: darkMode ? 'black' : 'white' }}>
      <Box>
        <input style={{borderRadius:'20px',marginTop: '30px', marginBottom: '20px', width: '21rem' }} value={input} readOnly type="text" />
      </Box>

      <Box>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleBackspace()}>
          ←
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleSquareRoot()}>
          √
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('/')}>
          / {/* Division */}
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={toggleDarkMode}>
          {darkMode ? 'L' : 'D'}
        </Button>
      </Box>

      <Box className="button-row m-2">
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('7')}>
          7
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('8')}>
          8
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('9')}>
          9
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('+')}>
          + {/* Addition */}
        </Button>
      </Box>
      <Box className="button-row m-1">
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('4')}>
          4
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('5')}>
          5
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('6')}>
          6
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('*')}>
          * {/* Multiplication */}
        </Button>
      </Box>
      <Box className="button-row m-1">
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('1')}>
          1
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('2')}>
          2
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('3')}>
          3
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('-')}>
          - {/* Subtraction */}
        </Button>
      </Box>
      <Box className="button-row m-1">
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('0')}>
          0
        </Button>
        <Button className="me-2" sx={buttonStyle} variant="outlined" onClick={() => handleButtonClick('.')}>
          .
        </Button>
        <Button className="clear-button me-2" sx={buttonStyle} variant="outlined" color="error" onClick={handleClear}>
          C
        </Button>
        <Button className="equals-button me-2" sx={buttonStyle} variant="outlined" color="success" onClick={handleCalculate}>
          =
        </Button>
      </Box>
    </Container>
  );
}

export default SciCalculator;
