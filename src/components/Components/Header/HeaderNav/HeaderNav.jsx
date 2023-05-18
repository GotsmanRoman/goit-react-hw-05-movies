import { NavLink } from 'react-router-dom';
import { List, ListItem } from './HeaderNav.module';

export default function HeaderNav() {
  return (
    <List>
      <ListItem>
        <NavLink to="/">Home</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="/movies">Movies</NavLink>
      </ListItem>
    </List>
  );
}
