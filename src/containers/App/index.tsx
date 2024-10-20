import { Dropdown, exampleList } from 'components/Dropdown';
import { Footer } from 'components/Footer';
import { FooterIcon } from 'components/FooterIcon';
import { Galery } from 'components/Galery';
import { Navbar } from 'components/NavBar';
import { loginRegisterItems, menuItems, stockImages } from 'interfaces/data';

const App = () => (
  <>
    <div className="separator"></div>
    <Navbar menuItems={menuItems} loginRegisterItems={loginRegisterItems}>
      <Dropdown dropdownName="Menu" dropList={exampleList} />
    </Navbar>
    <div className="separator"></div>
    <main className="main-container">
      <Galery images={stockImages} />
      <Footer pageName="Example Page" copyrightBy="Example Bussines">
        <FooterIcon icon="facebook" webUrl="https://www.facebook.com/" />
        <FooterIcon icon="instagram" webUrl="https://www.instagram.com/angel_luis_vn/" />
        <FooterIcon icon="twitter" webUrl="https://twitter.com/home" />
      </Footer>
    </main>
  </>
);

export default App;
