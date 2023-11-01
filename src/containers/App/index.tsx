import { Dropdown, exampleList } from 'components/Dropdown';
import { Footer } from 'components/Footer';
import { FooterIcon } from 'components/FooterIcon';
import { Navbar } from 'components/NavBar';
import { loginRegisterItems, menuItems } from 'interfaces/data';

const App = () => (
  <main className="main-container">
    <div className="separator"></div>
    <Navbar menuItems={menuItems} loginRegisterItems={loginRegisterItems}>
      <Dropdown dropdownName="Menu" dropList={exampleList} />
    </Navbar>
    <div className="separator"></div>
    <Footer pageName="Example Page" copyrightBy="Example Bussines">
      <FooterIcon icon="facebook" webUrl="https://www.facebook.com/" />
      <FooterIcon icon="twitter" webUrl="https://twitter.com/home" />
      <FooterIcon icon="instagram" webUrl="https://www.instagram.com/angel_luis_vn/" />
    </Footer>
  </main>
);

export default App;
