import '../styles/footer.css';

export interface FooterProps {
  children: React.ReactNode;
  pageName?: string;
  copyrightBy?: string;
}

export const Footer = ({ children, pageName, copyrightBy }: FooterProps) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const copyright = ' - ©Copyright by ';
  return (
    <footer className="footer-container">
      <div className="footer-icons">{children}</div>
      <div>
        {pageName}
        {copyright}
        {copyrightBy}
        <span> </span>
        {currentYear}
      </div>
    </footer>
  );
};
