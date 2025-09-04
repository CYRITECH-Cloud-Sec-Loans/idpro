import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const PresentationPage = () => {
  return (
    <div className="presentation-container">
      {/* All 15 slides of the complete presentation */}
      <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(255,255,255,0.9)', borderRadius: '20px', marginBottom: '20px' }}>
        <h1 style={{ color: '#667eea', marginBottom: '20px' }}>IDPro+ - Présentation Complète</h1>
        <p style={{ fontSize: '1.2em', color: '#666' }}>
          Pour voir la présentation complète avec les 15 slides détaillées, 
          <a href="/idpro-presentation.html" style={{ color: '#667eea', textDecoration: 'none', fontWeight: 'bold' }}>
            cliquez ici pour ouvrir le fichier HTML complet
          </a>
        </p>
      </div>
    </div>
  );
};

const PresentationSlide = ({ slideNumber, children, className = "" }) => (
  <div className={`slide ${className}`}>
    <div className="slide-number">{slideNumber}/15</div>
    {children}
  </div>
);

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="presentation-container">
      {/* Slide 1: Titre */}
      <PresentationSlide slideNumber="1">
        <div className="hero-content">
          <h1>IDPro+</h1>
          <p className="hero-subtitle">Protection Avancée contre l'Usurpation d'Identité</p>
          <p style={{ fontSize: '1.2em', color: '#7f8c8d', fontWeight: 500 }}>
            Solution innovante de sécurisation documentaire par tokens numériques
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">€12M</span>
              <div className="stat-label">Marché visé 2025</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">250%</span>
              <div className="stat-label">Croissance annuelle</div>
            </div>
            <div className="stat-item">
              <span className="stat-number">3 ans</span>
              <div className="stat-label">ROI projeté</div>
            </div>
          </div>
        </div>
      </PresentationSlide>

      {/* Slide 2: Problématique */}
      <PresentationSlide slideNumber="2">
        <h2>Le Problème : Usurpation d'Identité en Hausse</h2>
        <div className="two-column">
          <div>
            <ul className="problem-list">
              <li><strong>165M de victimes</strong> d'usurpation d'identité en 2024</li>
              <li><strong>€56 milliards</strong> de pertes économiques annuelles</li>
              <li><strong>Documents falsifiés</strong> : +340% en 5 ans</li>
              <li><strong>Vérification manuelle</strong> lente et peu fiable</li>
              <li><strong>Technologies obsolètes</strong> facilement contournables</li>
            </ul>
          </div>
          <div className="market-chart">
            <h3 style={{ marginBottom: '30px' }}>Évolution de la Fraude Documentaire</h3>
            <div style={{ marginTop: '30px' }}>
              <div className="chart-bar">
                <div className="bar" style={{ height: '60px' }}></div>
                <div><strong>2020</strong></div>
                <div>15%</div>
              </div>
              <div className="chart-bar">
                <div className="bar" style={{ height: '90px' }}></div>
                <div><strong>2022</strong></div>
                <div>28%</div>
              </div>
              <div className="chart-bar">
                <div className="bar" style={{ height: '140px' }}></div>
                <div><strong>2024</strong></div>
                <div>42%</div>
              </div>
              <div className="chart-bar">
                <div className="bar" style={{ height: '180px' }}></div>
                <div><strong>2026*</strong></div>
                <div>65%</div>
              </div>
            </div>
          </div>
        </div>
      </PresentationSlide>

      {/* Slide 3: Notre Solution */}
      <PresentationSlide slideNumber="3">
        <h2>IDPro+ : La Solution Révolutionnaire</h2>
        <div className="two-column">
          <div>
            <ul className="solution-list">
              <li><strong>Tokens numériques uniques</strong> intégrés aux documents</li>
              <li><strong>Vérification instantanée</strong> en temps réel</li>
              <li><strong>Expiration automatique</strong> et contrôle d'usage</li>
              <li><strong>Chiffrement militaire</strong> AES-256</li>
              <li><strong>API universelle</strong> pour toute intégration</li>
              <li><strong>Multi-plateforme</strong> : Web, Mobile, Desktop</li>
            </ul>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)', 
              color: 'white', 
              padding: '50px', 
              borderRadius: '20px', 
              marginBottom: '25px', 
              boxShadow: '0 15px 30px rgba(102, 126, 234, 0.3)' 
            }}>
              <h3 style={{ marginBottom: '20px' }}>Token Example</h3>
              <div style={{ fontSize: '2.8em', fontWeight: '800', letterSpacing: '4px', margin: '25px 0' }}>
                ID7X9K2M4P
              </div>
              <p style={{ fontSize: '1.1em', margin: '0' }}>Expire: 24h | Usages: 3/3</p>
            </div>
            <p style={{ color: '#667eea', fontWeight: '700', fontSize: '1.3em' }}>99.99% de fiabilité</p>
          </div>
        </div>
      </PresentationSlide>

      {/* Slide 4: Fonctionnalités */}
      <PresentationSlide slideNumber="4">
        <h2>Fonctionnalités Avancées</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h4>🔒 Sécurité Maximale</h4>
            <p>Chiffrement AES-256, blockchain optionnelle, audit trail complet avec traçabilité complète</p>
          </div>
          <div className="feature-card">
            <h4>⚡ Performance Ultra-Rapide</h4>
            <p>10K tokens/heure, vérification &lt;100ms, 99.99% uptime garanti avec monitoring 24/7</p>
          </div>
          <div className="feature-card">
            <h4>🌐 Multi-plateforme</h4>
            <p>Web, iOS, Android, Desktop, API REST/GraphQL, SDK pour tous langages</p>
          </div>
          <div className="feature-card">
            <h4>🔗 Intégration Simplifiée</h4>
            <p>ERP, CRM, systèmes existants via webhooks et SDK, documentation complète</p>
          </div>
          <div className="feature-card">
            <h4>📊 Analytics & BI</h4>
            <p>Dashboard temps réel, métriques détaillées, alertes IA, rapports personnalisés</p>
          </div>
          <div className="feature-card">
            <h4>🏛️ Conformité Totale</h4>
            <p>RGPD, SOX, ISO 27001, Common Criteria, certifications internationales</p>
          </div>
        </div>
      </PresentationSlide>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2 style={{ fontSize: '2.5em', marginBottom: '25px', fontWeight: '700' }}>
          Prêts à Transformer la Cybersécurité ?
        </h2>
        <p style={{ fontSize: '1.3em', marginBottom: '35px', opacity: '0.95' }}>
          Investissez dans l'avenir de la protection documentaire numérique
        </p>
        <a href="/idpro-presentation.html" className="cta-button" style={{ marginRight: '20px' }}>
          📊 Voir Présentation Complète
        </a>
        <a href="#demo" className="cta-button">
          💰 Demander une Demo
        </a>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/presentation" element={<PresentationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
