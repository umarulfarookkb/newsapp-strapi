import "./App.css";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import NewsList from "./pages/NewsList";
import NewsView from "./pages/NewsView";
import Header from "./components/Header";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <div className="container">
        <main className="main">
          
            <Routes>
              <Route path="/" element={<NewsList />}/>
                
              
              <Route path="newsview/:id" element={<NewsView />}/>
                
            
              {/* <Route exact path="/" element={<Navigate to="/news" />}/> */}
                
              
              <Route path="*" element={<NewsList />}/>
                
           
            </Routes>
          
        </main>
      </div>
      </BrowserRouter>
    </>
  );
}
export default App;