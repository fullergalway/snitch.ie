import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { Motion, spring } from "react-motion";
import CookieConsent from "react-cookie-consent";
import TwitterIcon from "@mui/icons-material/Twitter";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://snitch.ie/">
        snitch.ie
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [randX, setRandX] = useState(0);
  const [randY, setRandY] = useState(0);

  const move = (e) => {
    e.preventDefault();
    setOpen(true || !open);
    setRandX(Math.floor(Math.random() * (window.innerWidth - 400)));
    setRandY(Math.floor(Math.random() * (window.innerHeight - 100)));
  };

  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <Container fixed>
          <Typography variant="h4" component="h2" gutterBottom>
            Public health science violation reporting system.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Please help keep everyone safe.
          </Typography>
          <Button variant="outlined" href="https://twitter.com/notmisleading">
              <TwitterIcon /> Keep Updated
          </Button><br />
          <Motion
            style={{ x: spring(open ? randX : 0), y: spring(open ? randY : 0) }}
          >
            {({ x, y }) => (
              <Button
                style={{
                  position: "absolute",
                  WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
                  transform: `translate3d(${x}px, ${y}px, 0)`,
                }}
                variant="outlined"
                onMouseDown={move}
                onMouseOver={move}
                onTouchStart={move}
              >
                Report Non-Compliance
              </Button>
            )}
          </Motion>

        </Container>
      </div>

      <CookieConsent>
        This website uses cookies to help keep everyone safe.
      </CookieConsent>
    </>
  );
}
