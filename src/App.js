import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import { HashLoader } from "react-spinners";
import Modal from "@mui/material/Modal";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(() => false);
  const [open, setOpen] = useState(() => false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "none",
    bgcolor: "#c0c0c0",
    borderRadius: 3,
    p: 4
  };
  const style1 = {
    left: "80%"
  }
  const style2 = {
    fontSize: 20,
  }
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, []);

  function handleClose() {
    setOpen(false);
  }

  return (
    <React.Fragment>
        { loading ? 
          <div className='spinner'>
            <HashLoader color='#e1ad01' />
          </div>
          :
          <div>
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Button sx={style1} onClick={handleClose}><i class='bx bx-window-close bx-tada bx-flip-horizontal' ></i></Button>
                <div style={style2} id="modal-modal-title" variant="h6" component="h2">
                  Only available for Web
                </div>
                <div className='mt-3' style={style2} id="modal-modal-description" sx={{ mt: 2 }}>
                  Mobile view yet to be developed
                </div>
              </Box>
            </Modal>
            <main>
              <div className='sticky-top'>
                <Header></Header>
              </div>

              <div className='Home' id="Home">
                <Home></Home>
              </div>

              <div className='About' id='About'>
                <About></About>
              </div>

              <div className='Skills' id='Skills'>
                <Skills></Skills>
              </div>

              <div className='Works' id='Works'>
                <Works></Works>
              </div>

              <div className='Footer' id='Footer'>
                <Footer></Footer>              
              </div>
          </main>
        </div>
        }
    </React.Fragment>
  )
}

export default App;
