import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import NewsList from "./pages/NewsList";
import NewsView from "./pages/NewsView";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="main">
          <BrowserRouter>
            <Routes>
              <Route path="/news" element={<NewsList />}/>
                
              
              <Route path="newsview/:id" element={<NewsView />}/>
                
            
              <Route exact path="/" element={<Navigate to="/news" />}/>
                
              
              <Route path="*" element={<NewsList />}/>
                
           
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </>
  );
}
export default App;