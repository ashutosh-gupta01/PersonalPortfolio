import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      
        <p style={styles.text}>
          © {currentYear} Ashutosh Gupta | Made with ❤️ using React
        </p>
       
      
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
    marginTop: "auto",
  },


  
};

export default Footer;
