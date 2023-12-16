import React,{useState,useEffect} from 'react'
import Navbar from './components/MiainFile'
import BounceLoader from "react-spinners/BounceLoader";

const App = () => {
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading ? ( // Checking if loading is true
        <div className="h-screen w-full flex items-center justify-center">
          <BounceLoader // For Loading page animation
            color={"skyblue"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Navbar/>
      )}
    </>
  );
}

export default App