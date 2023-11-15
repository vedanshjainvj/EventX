import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import BounceLoader from "react-spinners/BounceLoader";
import Partners from './components/Partners'
import Cards from './components/Cards'
import Ourapp from './components/Ourapp'
import Login from './components/Login'
import Hero from './components/Hero'
import Eventadd from './components/Eventadd'

const App = () => {
  
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {loading ? ( // Checking if loading is true
        <div className="h-screen w-full flex items-center justify-center">
          <BounceLoader // For Loading page animation
            color={"darkorchid"}
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