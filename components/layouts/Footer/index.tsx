const Footer = () => {
  return (
    <footer
      style={{
        position: 'fixed',
        width: '100vw',
        bottom: '0',
        left: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: 'black',
      }}>
      <div
        className="text-center text-footer p-3"
        style={{ color: 'white' }}>
        © 2023 Footer
      </div>
    </footer>
  );
};

export default Footer;
