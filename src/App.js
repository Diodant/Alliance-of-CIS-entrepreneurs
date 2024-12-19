import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './components/MainPage';
import CharterPage from './components/CharterPage';
import Ethical from './components/Ethical';
import Members from './components/Members';
import About from './components/About';
import Executive_Committee from './components/Committee/Executive_Committee';
import Legal_Committee from './components/Committee/Legal_Committee';
import Quality_of_Life_Committee from './components/Committee/Quality_of_Life_Committee';
import Marketing_Committee from './components/Committee/Marketing_Committee';
import Real_Estate_Committee from './components/Committee/Real_Estate_Committee';
import Industrial_Committee from './components/Committee/Industrial_Committee';
import Resources_Committee from './components/Committee/Resources_Committee';
import Finance_Committee from './components/Committee/Finance_Committee';
import Innovation_Committee from './components/Committee/Innovation_Committee';
// import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
// import Submit from './components/Submit';
import ArticlesList from './components/ArticlesList';
import Article from './components/Article';
import Footer from './components/Footer';
import './css/all.css';
import './css/colorbox.css';
import './css/core_date.min.css';
import './css/core.min.css';
import './css/jquery-ui.css';
import './css/jquery.fancybox.css';
import './css/jquery.reject.css';
import './css/main.css';
import './css/main.popup.bundle.min.css';
import './css/styles.css';
import './css/template_styles.css';
import './css/validationEngine.jquery.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
        <Router>
        <div className="App">
        <Header />
          <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/charter" element={<CharterPage  />} />
          <Route path="/members" element={<Members />} />
          <Route path="/ethical" element={<Ethical />} />
          <Route path="/executive-committee" element={<Executive_Committee />} />
          <Route path="/legal-committee" element={<Legal_Committee />} />
          <Route path="/finance_committee" element={<Finance_Committee />} />
          <Route path="/resources_committee" element={<Resources_Committee />} />
          <Route path="/quality_of_life_committee" element={<Quality_of_Life_Committee />} />
          <Route path="/marketing_committee" element={<Marketing_Committee />} />
          <Route path="/real_estate_committee" element={<Real_Estate_Committee />} />
          <Route path="/industrial_committee" element={<Industrial_Committee />} />
          <Route path="/innovation_committee" element={<Innovation_Committee />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<Article />} />
            {/* 
            
            
            <Route path="/awards2024" element={<Awards2024 />} />
            
            <Route path="/awards2022" element={<Awards2022 />} />
            <Route path="/awards2021" element={<Awards2021 />} />
            <Route path="/awards2020" element={<Awards2020 />} />
            <Route path="/awards2019" element={<Awards2019 />} />
            <Route path="/awards2018" element={<Awards2018 />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/contacts" element={<Contacts />} /> */}
          </Routes>
          <Footer  />
        </div>
      </Router>
  );
}

export default App;
