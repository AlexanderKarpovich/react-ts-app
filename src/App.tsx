import { NavLink } from 'react-router-dom';
import EventsPage from './components/pages/events/EventsPage';
import UsersPage from './components/pages/users/UsersPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserItemPage from './components/pages/users/UserItemPage';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'end', gap: 5}}>
          <NavLink to='/users'>Пользователи</NavLink>
          <NavLink to='/events'>События</NavLink>
        </div>
        <Routes>
          <Route path={'/'} element={<UsersPage />} />
          <Route path={'/users'} element={<UsersPage />} />
          <Route path={'/events'} element={<EventsPage />} />
          <Route path={'/users/:id'} element={<UserItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
