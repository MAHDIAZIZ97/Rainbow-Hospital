import React from "react";
import { Container, Box } from "@mui/material";

const MapEmbed = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.9273125899044!2d88.08117547384616!3d22.46936563674894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0285d7f3adcc29%3A0x70ab3438852dc098!2sRainbow%20Hospital!5e0!3m2!1sen!2sin!4v1738569461470!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Container>
  );
};

export default MapEmbed;
