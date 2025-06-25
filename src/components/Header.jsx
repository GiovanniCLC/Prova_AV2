import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Container,
  Box,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function NavBar() {
  const location = useLocation();
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#424242", // cinza escuro
        borderRadius: 3,
        boxShadow: "none",
        borderBottom: "1px solid #757575", // cinza médio
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              ml: 2,
              color: "#fff", // branco para contraste
              letterSpacing: 1,
            }}
          >
            Cadastro de Produtos
          </Typography>
          <Box
            sx={{
              background: "#616161", // cinza intermediário
              borderRadius: "14px",
              px: 2,
              py: 1,
              display: "flex",
              alignItems: "center",
              boxShadow: "0 2px 8px #0003",
              border: "1.5px solid #757575",
            }}
          >
            <Stack direction="row" spacing={2} mr={2}>
              <Button
                color="secondary"
                variant={location.pathname === "/" ? "contained" : "outlined"}
                component={RouterLink}
                to="/"
                startIcon={<ListAltIcon />}
                sx={{
                  backgroundColor:
                    location.pathname === "/"
                      ? "#bdbdbd" // cinza claro
                      : "transparent",
                  color: location.pathname === "/" ? "#212121" : "#fff",
                  borderColor: "#bdbdbd",
                  "&:hover": {
                    backgroundColor: "#e0e0e0", // cinza mais claro
                    color: "#212121",
                    borderColor: "#e0e0e0",
                  },
                  fontWeight: "bold",
                  borderWidth: 2,
                }}
              >
                Produtos
              </Button>
              <Button
                color="secondary"
                variant={
                  location.pathname === "/novo" ? "contained" : "outlined"
                }
                component={RouterLink}
                to="/novo"
                startIcon={<AddCircleOutlineIcon />}
                sx={{
                  backgroundColor:
                    location.pathname === "/novo"
                      ? "#bdbdbd"
                      : "transparent",
                  color: location.pathname === "/novo" ? "#212121" : "#fff",
                  borderColor: "#bdbdbd",
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                    color: "#212121",
                    borderColor: "#e0e0e0",
                  },
                  fontWeight: "bold",
                  borderWidth: 2,
                }}
              >
                Novo Produto
              </Button>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
