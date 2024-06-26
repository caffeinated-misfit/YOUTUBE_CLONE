import { AppBar, Toolbar, IconButton, InputBase, Stack } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center"}}>
        <img src={logo} alt="youtube logo" height={45} />
      </Link>
      <SearchBar/>
    </Stack>
  );
};

export default Header;
