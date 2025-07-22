import { COLORS } from "../utilities/colors";

const Loader = ({ className = "" }) => {
  const loaderStyle = {
    animation: 'rotate 1s infinite',
    height: '50px',
    width: '50px'
  };

  const beforeStyle = {
    borderRadius: '50%',
    content: '""',
    display: 'block',
    height: '20px',
    width: '20px',
    animation: 'ball1 1s infinite',
    backgroundColor: 'rgb(36, 103, 56)',
    boxShadow: '30px 0 0 rgb(36, 103, 56)',
    marginBottom: '10px'
  };

  const afterStyle = {
    borderRadius: '50%',
    content: '""',
    display: 'block',
    height: '20px',
    width: '20px',
    animation: 'ball2 1s infinite',
    backgroundColor: '#ff3d00',
    boxShadow: '30px 0 0 #fff'
  };

  return (
    <div className={`flex items-center justify-center min-h-screen ${className} ${COLORS.background.primary}`}>
      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg) scale(0.8) }
          50% { transform: rotate(360deg) scale(1.2) }
          100% { transform: rotate(720deg) scale(0.8) }
        }
        
        @keyframes ball1 {
          0% { box-shadow: 30px 0 0 rgb(245, 227, 159); }
          50% { 
            box-shadow: 0 0 0 rgb(42, 74, 52); 
            margin-bottom: 0; 
            transform: translate(15px, 15px); 
          }
          100% { 
            box-shadow: 30px 0 0 rgb(245, 227, 159);; 
            margin-bottom: 10px; 
          }
        }
        
        @keyframes ball2 {
          0% { box-shadow: 30px 0 0 #fff; }
          50% { 
            box-shadow: 0 0 0 #fff; 
            margin-top: -20px; 
            transform: translate(15px, 15px); 
          }
          100% { 
            box-shadow: 30px 0 0 rgb(18, 163, 61); 
            margin-top: 0; 
          }
        }
      `}</style>

      <div style={loaderStyle}>
        <div style={beforeStyle}></div>
        <div style={afterStyle}></div>
      </div>
    </div>
  );
};

export default Loader;