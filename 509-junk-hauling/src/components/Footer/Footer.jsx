const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='text-center mt-8 border-t pt-4'>
      <p className='text-sm text-gray-600'>
        © {currentYear} 509 Junk Hauling. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
