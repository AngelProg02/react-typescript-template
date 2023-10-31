import { Dropdown, exampleList } from 'components/Dropdown';
import { Footer } from 'components/Footer';
import { Navbar } from 'components/NavBar';
import { loginRegisterItems, menuItems } from 'interfaces/data';

const App = () => (
  <main className="main-container">
    <div className="separator"></div>
    <Navbar menuItems={menuItems} loginRegisterItems={loginRegisterItems}>
      <Dropdown dropdownName={'Menu'} dropList={exampleList} />
    </Navbar>
    <div className="separator"></div>
    <Footer />
  </main>
);

export default App;
