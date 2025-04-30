import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import './App.css';


const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleYaleLogin = () => {
    window.location.href = "https://secure.its.yale.edu/cas/login?service=https%3A%2F%2Fwww.art.yale.edu%2Fusers%2Fauth%2Fcas%2Fcallback%3Furl%3Dhttps%253A%252F%252Fwww.art.yale.edu%252Flogin";
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password, rememberMe });
  };

  const handleBackToOptions = () => {
    setLoginMethod(null);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', resetEmail);
    // Add your password reset logic here
    setShowForgotPassword(false);
    setResetEmail('');
  };

  return (
    <div className="login-page">
      <main className="login-container">
        <div className="login-card">
          <h2>School of Art Login</h2>
          
          {loginMethod === null ? (
            <>
              <div className="login-options">
                <button onClick={() => setLoginMethod('yale')} className="button primary">
                  Log In with Yale NetID
                </button>
                <button onClick={() => setLoginMethod('email')} className="button secondary">
                  Log In without Yale NetID
                </button>
              </div>
            </>
          ) : loginMethod === 'yale' ? (
            <>
              <p>You will be redirected to Yale's Central Authentication Service.</p>
              <button onClick={handleYaleLogin} className="button primary">
                Continue to Yale Login
              </button>
              <button onClick={handleBackToOptions} className="button secondary">
                Back
              </button>
            </>
          ) : (
            <>
              <form onSubmit={handleEmailLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="remember-me-container">
                  <label className="remember-me-label">
                    <input 
                      type="checkbox" 
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Remember me</span>
                  </label>
                </div>
                <button type="submit" className="button primary">Log In</button>
              </form>
              <div className="login-links">
                <a href="#" onClick={handleForgotPassword}>Forgot password?</a>
                <button onClick={handleBackToOptions} className="button text-button">
                  Back to login options
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="modal-overlay">
          <div className="forgot-password-modal">
            <h3>Forgot your password?</h3>
            <form onSubmit={handleResetPassword}>
              <div className="form-group">
                <label htmlFor="reset-email">Email</label>
                <input
                  type="email"
                  id="reset-email"
                  placeholder="Enter your email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="button primary">
                Send me reset password instructions
              </button>
            </form>
            <button 
              onClick={() => {
                setShowForgotPassword(false);
                setResetEmail('');
              }} 
              className="button text-button"
            >
              Back to Sign in
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="contact-page">
      
      {/* Main Contact Content */}
      <main className="contact-container">
        <div className="container">
          <h2 className="page-title">Contact Us</h2>
          
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h3>Yale School of Art</h3>
              <address>
                1156 Chapel Street<br />
                New Haven, CT 06511<br /><br />
                <strong>Phone:</strong> (203) 432-2600<br />
                <strong>Fax:</strong> (203) 432-2605<br />
                <strong>Email:</strong> art.school@yale.edu
              </address>

              <div className="office-hours">
                <h4>Office Hours</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="your.email@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject">
                    <option value="">Select a subject</option>
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="general">General Inquiry</option>
                    <option value="events">Events Information</option>
                    <option value="faculty">Faculty Contact</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="button primary">Send Message</button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h3>Location</h3>
            <div className="map-container">
              <iframe 
                title="Yale School of Art Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.347365028644!2d-72.93432292401043!3d41.30827420218076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d9a2e5c0f6e5%3A0x3a8a6a8e0b9b9b9b!2sYale%20School%20of%20Art!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="400" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const YaleArtSchool = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/events" element={<Events />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/visit" element={<VisitPage />} />
            <Route path="/support" element={<Support />} />  
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add auth state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        {/* Top Utility Bar */}
        <div className="header-top-bar">
          <div className="container">
            <div className="logo-container">
              <img
                src="/images/Yale_logo.jpeg"
                alt="Yale University Logo"
                className="university-logo"
              />
              <span className="university-name">Yale University</span>
            </div>
            <nav className="utility-nav">
              <ul>
                <li><a href="https://www.yale.edu/">Yale.edu</a></li>
                <li><a href="https://directory.yale.edu/">Directory</a></li>
                
                <li><a href="/about/contact">Contact</a></li>
                <li><a href="/visit">Visit</a></li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="main-navigation">
          <div className="container">
            <div className="nav-left">
              <h1 className="school-name">
                <Link to="/">Yale School of Art</Link>
              </h1>
              
              <button 
                className="mobile-menu-toggle" 
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>

            <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><NavLink to="/" end activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/programs" activeclassname="active">Programs</NavLink></li>
                <li><NavLink to="/faculty" activeclassname="active">Faculty</NavLink></li>
                <li><NavLink to="/admissions" activeclassname="active">Admissions</NavLink></li>
                <li><NavLink to="/events" activeclassname="active">Events</NavLink></li>
                <li><NavLink to="/publication" activeclassname="active">Publications</NavLink></li>
                <li><NavLink to="/support" activeclassname="active">Support</NavLink></li>
              </ul>
            </nav>

            <div className="nav-right">
              <button className="search-button" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <button className="profile-button" onClick={toggleSidebar}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <button className="close-btn" onClick={toggleSidebar} aria-label="Close sidebar">
            &times;
          </button>
        </div>
        <div className="profile-info">
          <img 
            src="/images/avatar.jpg" 
            alt="Profile Avatar" 
            className="profile-avatar" 
          />
          <h2>{isLoggedIn ? "Welcome Back!" : "Welcome!"}</h2>
          {isLoggedIn && <p className="user-email">user@yale.edu</p>}
        </div>
        <ul className="sidebar-menu">
          {isLoggedIn ? (
            <>
              <li><Link to="/dashboard" onClick={toggleSidebar}>Dashboard</Link></li>
              <li><Link to="/account-settings" onClick={toggleSidebar}>Account Settings</Link></li>
              <li><Link to="/my-courses" onClick={toggleSidebar}>My Courses</Link></li>
              <li><Link to="/favorites" onClick={toggleSidebar}>Favorites</Link></li>
              <li><button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" onClick={toggleSidebar}>Login</Link></li>
              <li><Link to="/signup" onClick={toggleSidebar}>Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>

      {/* Background overlay when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};
const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <QuickLinks />
      <NewsSection />
      <FeaturedPrograms />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Left side: Content */}
        <div className="hero-content">
          <h1>Welcome to Yale School of Art</h1>
          <p>
            The Yale School of Art offers an intensive program for aspiring artists, with Master of Fine Arts degrees in <strong>Graphic Design</strong>, <strong>Painting/Printmaking</strong>, <strong>Photography</strong>, and <strong>Sculpture</strong>. 
            Ranked among the best in the world, our school fosters critical inquiry, personal vision, and innovative practice.
          </p>
          <div className="hero-buttons">
            <Link to="/programs" className="button primary">Explore Programs</Link>
            <a href="/Admissions" className="button secondary" target="_blank" rel="noopener noreferrer">
              Apply to Yale Art
            </a>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="hero-image">
          <img 
            src="/images/art_studio.jpg" 
            alt="Students at work inside Yale School of Art"
          />
        </div>
      </div>
    </section>
  );
};

const QuickLinks = () => {
  return (
    <section className="quick-links">
      <div className="container">
        <div className="quick-link-card">
          <h3>Upcoming Events</h3>
          <p>View our calendar of exhibitions, lectures, and critiques</p>
          <Link to="/events" className="button small">View Calendar</Link>
        </div>
        <div className="quick-link-card">
          <h3>Student Work</h3>
          <p>Explore recent work from our MFA candidates</p>
          <Link to="/publication" className="button small">View Publications</Link>
        </div>
        <div className="quick-link-card">
          <h3>Visiting Artists</h3>
          <p>Learn about our visiting artist lecture series</p>
          <Link to="/events" className="button small">Learn More</Link>
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="container">
        <h2 className="section-title">News & Announcements</h2>
        <div className="news-grid">
          <article className="news-card">
            <div className="news-image">
              <img 
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Student exhibition"
              />
            </div>
            <div className="news-content">
              <h3>2023 MFA Thesis Exhibitions Open</h3>
              <p className="news-date">May 15, 2023</p>
              <p>The annual thesis exhibitions showcase the work of graduating MFA candidates across all departments.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </article>
          <article className="news-card">
            <div className="news-image">
              <img 
                src="/images/Julie_Mehretu.webp" 
                alt="Artist lecture"
              />
            </div>
            <div className="news-content">
              <h3>Artist Talk: Julie Mehretu</h3>
              <p className="news-date">April 28, 2023</p>
              <p>Renowned painter Julie Mehretu will discuss her practice and recent work in this year's Distinguished Artist Lecture.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </article>
          <article className="news-card">
            <div className="news-image">
              <img 
                src="/images/New_facilities.jpg" 
                alt="New facilities"
              />
            </div>
            <div className="news-content">
              <h3>New Facilities Expansion</h3>
              <p className="news-date">March 10, 2023</p>
              <p>The School of Art announces plans for a 15,000 square foot addition to the Green Hall studio facilities.</p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const FeaturedPrograms = () => {
  return (
    <section className="featured-programs">
      <div className="container">
        <h2 className="section-title">Our Programs</h2>
        <div className="programs-grid">
          <div className="program-card">
            <h3>Graphic Design</h3>
            <p>A two-year program emphasizing the development of a cohesive, investigative body of work.</p>
            <Link to="/programs" className="button small">Learn More</Link>
          </div>
          <div className="program-card">
            <h3>Painting/Printmaking</h3>
            <p>Focusing on contemporary approaches to painting and printmaking as parallel disciplines.</p>
            <Link to="/programs" className="button small">Learn More</Link>
          </div>
          <div className="program-card">
            <h3>Photography</h3>
            <p>Exploring photography as an artistic medium with a focus on conceptual development.</p>
            <Link to="/programs" className="button small">Learn More</Link>
          </div>
          <div className="program-card">
            <h3>Sculpture</h3>
            <p>Encouraging experimentation across diverse media and approaches to three-dimensional work.</p>
            <Link to="/programs" className="button small">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const [activeTab, setActiveTab] = useState('graphic-design');

  const programsData = {
    'graphic-design': {
      title: 'Graphic Design',
      description: [
        "The graphic design program focuses on the development of a cohesive, investigative body of work, also known as the student's thesis. At Yale, the graphic design thesis is conceived as a loose framework within which each student's visual method is deployed across many diverse projects during the two-year course of study.",
        "While every thesis project is unique, there are several common features: a focus on methodology, the application of a visual method to studio work, and the organization of the work in a thoughtfully argued written document and exhibition."
      ],
      duration: '2 years',
      degree: 'MFA',
      students: '12',
      images: [
        '/images/student_work_GraphicDesign1.png',
        '/images/student_work_GraphicDesign2.png',
        '/images/student_work_GraphicDesign3.png'
      ]
    },
    'painting-printmaking': {
      title: 'Painting/Printmaking',
      description: [
        "The Painting/Printmaking program is committed to broadening the understanding of the disciplines of painting and printmaking. The program encourages diversity of practice and interpretation, innovation in technology, and a combination of experimentation and traditional practice.",
        "Students work independently in private studios and meet weekly for individual critiques with faculty and visiting artists. The program hosts regular group critiques and seminars to foster dialogue and exchange."
      ],
      duration: '2 years',
      degree: 'MFA',
      students: '20',
      images: [
        '/images/student_work_painting_1.jpg',
        '/images/student_work_painting_2.png',
        '/images/student_work_painting_3.png'
      ]
    },
    'photography': {
      title: 'Photography',
      description: [
        "The Photography program provides students with the opportunity to explore photography as a means of artistic expression and conceptual inquiry. The curriculum emphasizes the development of individual vision through a combination of technical instruction, critical analysis, and engagement with contemporary art practice.",
        "Students have access to state-of-the-art facilities including digital labs, darkrooms, and shooting studios. The program fosters interdisciplinary approaches and encourages students to experiment with the boundaries of photographic practice."
      ],
      duration: '2 years',
      degree: 'MFA',
      students: '10',
      images: [
        '/images/student_work_Photography1.png',
        '/images/student_work_Photography2.png',
        '/images/student_work_Photography3.png'
      ]
    },
    'sculpture': {
      title: 'Sculpture',
      description: [
        "The Sculpture program supports a wide range of approaches, from traditional object-making to installation, video, and performance. The program emphasizes the development of individual artistic practice within a context of critical discourse and engagement with contemporary art.",
        "Students have access to extensive facilities including wood and metal shops, a foundry, and digital fabrication tools. The program encourages experimentation with materials and processes while maintaining a strong emphasis on conceptual development."
      ],
      duration: '2 years',
      degree: 'MFA',
      students: '12',
      images: [
        '/images/student_work_sculpture1.jpg',
        '/images/student_work_sculpture2.webp',
        '/images/student_work_sculpture3.png'
      ]
    }
  };

  const activeProgram = programsData[activeTab];

  return (
    <div className="programs-page">
      <section className="page-header">
        <div className="container">
          <h1>Academic Programs</h1>
          <p>The Yale School of Art offers four graduate programs leading to the degree of Master of Fine Arts.</p>
        </div>
      </section>
      <section className="program-details">
        <div className="container">
          <div className="program-tabs">
            <button 
              className={activeTab === 'graphic-design' ? 'active' : ''}
              onClick={() => setActiveTab('graphic-design')}
            >
              Graphic Design
            </button>
            <button 
              className={activeTab === 'painting-printmaking' ? 'active' : ''}
              onClick={() => setActiveTab('painting-printmaking')}
            >
              Painting/Printmaking
            </button>
            <button 
              className={activeTab === 'photography' ? 'active' : ''}
              onClick={() => setActiveTab('photography')}
            >
              Photography
            </button>
            <button 
              className={activeTab === 'sculpture' ? 'active' : ''}
              onClick={() => setActiveTab('sculpture')}
            >
              Sculpture
            </button>
          </div>
          <div className="program-content">
            <h2>{activeProgram.title}</h2>
            {activeProgram.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            
            <div className="program-stats">
              <div className="stat-item">
                <h4>Duration</h4>
                <p>{activeProgram.duration}</p>
              </div>
              <div className="stat-item">
                <h4>Degree</h4>
                <p>{activeProgram.degree}</p>
              </div>
              <div className="stat-item">
                <h4>Students per year</h4>
                <p>{activeProgram.students}</p>
              </div>
            </div>
            
            <div className="program-images">
        {activeProgram.images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`${activeProgram.title} ${index === 0 ? 'student work' : index === 1 ? 'studio/facility' : 'program overview'}`}
            onError={(e) => {
              e.target.onerror = null;
              // Cycle through progressively more generic fallbacks
              const fallbacks = [
                'https://www.art.yale.edu/sites/default/files/styles/gallery_image/public/2022-06/gd_archive_work.jpg',
                'https://aperture.org/wp-content/uploads/2020/09/Graphic-Design-Showcase.jpg',
                'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              ];
              e.target.src = fallbacks.find(url => url.includes(activeTab)) || fallbacks[2];
            }}
          />
        ))}
      </div>
            
            <div className="program-cta">
              <Link to="/admissions" className="button primary">Admissions Information</Link>
              <Link to="/faculty" className="button secondary">Meet the Faculty</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Faculty = () => {
  return (
    <div className="faculty-page">
      <section className="page-header">
        <div className="container">
          <h1>Faculty</h1>
          <p>Our faculty consists of practicing artists and designers who bring their professional experience into the classroom.</p>
        </div>
      </section>
      <section className="faculty-list">
        <div className="container">
          <div className="faculty-grid">
            <div className="faculty-card">
              <div className="faculty-image">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Professor Sarah Lewis"
                />
              </div>
              <div className="faculty-info">
                <h3>Sarah Lewis</h3>
                <p className="faculty-title">Associate Professor, Painting/Printmaking</p>
                <p className="faculty-bio">Sarah Lewis's work examines the intersections of art, race, and justice through painting and printmaking.</p>
                <a href="#" className="faculty-link">View Profile</a>
              </div>
            </div>
            <div className="faculty-card">
              <div className="faculty-image">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Professor Michael Chen"
                />
              </div>
              <div className="faculty-info">
                <h3>Michael Chen</h3>
                <p className="faculty-title">Professor, Graphic Design</p>
                <p className="faculty-bio">Michael Chen's design practice explores systems, interfaces, and the visualization of complex information.</p>
                <a href="#" className="faculty-link">View Profile</a>
              </div>
            </div>
            <div className="faculty-card">
              <div className="faculty-image">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Professor Elena Rodriguez"
                />
              </div>
              <div className="faculty-info">
                <h3>Elena Rodriguez</h3>
                <p className="faculty-title">Assistant Professor, Photography</p>
                <p className="faculty-bio">Elena Rodriguez's photographic work investigates memory, migration, and the construction of identity.</p>
                <a href="#" className="faculty-link">View Profile</a>
              </div>
            </div>
            <div className="faculty-card">
              <div className="faculty-image">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Professor James Wilson"
                />
              </div>
              <div className="faculty-info">
                <h3>James Wilson</h3>
                <p className="faculty-title">Professor, Sculpture</p>
                <p className="faculty-bio">James Wilson's sculptural practice incorporates industrial materials and explores themes of labor and materiality.</p>
                <a href="#" className="faculty-link">View Profile</a>
              </div>
            </div>
          </div>
          <div className="view-all-faculty">
            <Link to="https://www.art.yale.edu/about/people/faculty-and-staff" className="button">View All Faculty</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Admissions = () => {
  return (
    <div className="admissions-page">
      <section className="page-header">
        <div className="container">
          <h1>Admissions</h1>
          <p>Learn about the application process, requirements, and deadlines for our MFA programs.</p>
        </div>
      </section>
      <section className="admissions-content">
        <div className="container">
          <div className="admissions-timeline">
            <h2>Application Timeline</h2>
            <div className="timeline-item">
              <h3>September 1</h3>
              <p>Application opens</p>
            </div>
            <div className="timeline-item">
              <h3>January 2</h3>
              <p>Application deadline</p>
            </div>
            <div className="timeline-item">
              <h3>February-March</h3>
              <p>Interviews conducted</p>
            </div>
            <div className="timeline-item">
              <h3>April 1</h3>
              <p>Admissions decisions released</p>
            </div>
          </div>
          <div className="admissions-requirements">
            <h2>Application Requirements</h2>
            <ul>
              <li>Completed online application form</li>
              <li>Portfolio of 20 images or time-based work</li>
              <li>Artist statement (500-1000 words)</li>
              <li>Three letters of recommendation</li>
              <li>Transcripts from all post-secondary institutions</li>
              <li>Application fee ($100)</li>
            </ul>
            <div className="requirements-note">
              <p>International applicants must also submit TOEFL or IELTS scores if English is not their first language.</p>
            </div>
          </div>
          <div className="admissions-cta">
            <a href="https://admissions.yale.edu/" className="button primary">Begin Application</a>
            <a href="https://yale.box.com/s/spazpelub0hp314m1irbbvs3g3ovfwd2" className="button secondary">Download Viewbook</a>
          </div>
        </div>
      </section>
      <section className="financial-aid">
        <div className="container">
          <h2>Financial Aid</h2>
          <p>All admitted MFA students receive a generous financial aid package that includes full tuition remission and a stipend for living expenses. Additional funding is available for research travel, materials, and summer study.</p>
          <a href="https://www.art.yale.edu/about/resources/financial-aid" className="button">Learn More About Financial Aid</a>
        </div>
      </section>
    </div>
  );
};

const Events = () => {
  return (
    <div className="events-page">
      <section className="page-header">
        <div className="container">
          <h1>Events</h1>
          <p>Lectures, exhibitions, critiques, and other public programs at the Yale School of Art.</p>
        </div>
      </section>
      <section className="events-calendar">
        <div className="container">
          <div className="calendar-header">
            <h2>Upcoming Events</h2>
            <div className="calendar-nav">
              <button>Month</button>
              <button className="active">Week</button>
              <button>Day</button>
            </div>
          </div>
          <div className="events-list">
            <div className="event-card">
              <div className="event-date">
                <span className="event-day">15</span>
                <span className="event-month">Jun</span>
              </div>
              <div className="event-info">
                <h3>MFA Thesis Exhibition Opening</h3>
                <p className="event-time">6:00 PM - 8:00 PM</p>
                <p className="event-location">Green Hall Gallery</p>
                <p className="event-description">Opening reception for the 2023 MFA Thesis Exhibitions featuring work from all departments.</p>
                <a href="#" className="event-link">More Info</a>
              </div>
            </div>
            <div className="event-card">
              <div className="event-date">
                <span className="event-day">18</span>
                <span className="event-month">Jun</span>
              </div>
              <div className="event-info">
                <h3>Artist Talk: Torkwase Dyson</h3>
                <p className="event-time">4:30 PM - 6:00 PM</p>
                <p className="event-location">Lecture Hall</p>
                <p className="event-description">Artist Torkwase Dyson discusses her interdisciplinary practice at the intersection of architecture, infrastructure, and environmental justice.</p>
                <a href="#" className="event-link">More Info</a>
              </div>
            </div>
            <div className="event-card">
              <div className="event-date">
                <span className="event-day">22</span>
                <span className="event-month">Jun</span>
              </div>
              <div className="event-info">
                <h3>Critique Session: Graphic Design</h3>
                <p className="event-time">10:00 AM - 12:00 PM</p>
                <p className="event-location">Room 203</p>
                <p className="event-description">Second-year graphic design students present thesis work for faculty critique.</p>
                <a href="#" className="event-link">More Info</a>
              </div>
            </div>
          </div>
          <div className="view-all-events">
            <Link to="https://soapublicevents.eventcalendarapp.com/" className="button">View Full Calendar</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const allPublicationsData = [
  {
    id: 1,
    title: 'First Year MFA Work',
    description: 'Annual publication featuring work by first-year MFA students across all disciplines.',
    imageUrl: 'https://www.art.yale.edu/sites/default/files/styles/publication_cover/public/2021-03/2021_first_year_mfa_cover.jpg',
    linkUrl: 'https://www.art.yale.edu/publications/first-year-mfa-work',
    category: 'Student Publications' // Added category
  },
  {
    id: 2,
    title: 'Second Year MFA Work',
    description: 'Showcase of graduating MFA candidates\' thesis work from all departments.',
    imageUrl: 'https://www.art.yale.edu/sites/default/files/styles/publication_cover/public/2021-03/2020_second_year_mfa_cover.jpg',
    linkUrl: 'https://www.art.yale.edu/publications/second-year-mfa-work',
    category: 'Student Publications' // Added category
  },
  {
    id: 3,
    title: 'Graphic Design Thesis',
    description: 'Compilation of Graphic Design MFA thesis projects and research.',
    imageUrl: 'https://www.art.yale.edu/sites/default/files/styles/publication_cover/public/2021-03/2020_graphic_design_thesis_cover.jpg',
    linkUrl: 'https://www.art.yale.edu/publications/graphic-design-thesis',
    category: 'Student Publications' // Added category
  },
  {
    id: 4,
    title: 'Painting/Printmaking Thesis',
    description: 'Documentation of Painting/Printmaking MFA thesis exhibitions.',
    imageUrl: 'https://www.art.yale.edu/sites/default/files/styles/publication_cover/public/2021-03/2019_painting_printmaking_thesis_cover.jpg',
    linkUrl: 'https://www.art.yale.edu/publications/painting-printmaking-thesis',
    category: 'Student Publications' // Added category - Assuming this is student work
  },
  {
    id: 5,
    title: 'Photography Thesis',
    description: 'Collection of Photography MFA thesis projects and artist statements.',
    imageUrl: 'https://www.art.yale.edu/sites/default/files/styles/publication_cover/public/2021-03/2019_photography_thesis_cover.jpg',
    linkUrl: 'https://www.art.yale.edu/publications/photography-thesis',
    category: 'Student Publications' // Added category - Assuming this is student work
  },
  {
    id: 6,
    title: 'Sculpture Thesis',
    description: 'Documentation of Sculpture MFA thesis work and installations.',
    imageUrl: 'https://www.art.yale.edu/sites/default/files/styles/publication_cover/public/2021-03/2018_sculpture_thesis_cover.jpg',
    linkUrl: 'https://www.art.yale.edu/publications/sculpture-thesis',
    category: 'Student Publications' // Added category - Assuming this is student work
  },
  // --- Add more publications with appropriate categories ---
  {
    id: 7,
    title: 'Sample Exhibition Catalog',
    description: 'Catalog for a fictional exhibition held at Green Gallery.',
    imageUrl: 'https://via.placeholder.com/300x400/cccccc/969696?text=Exhibition+Catalog', // Placeholder image
    linkUrl: '#', // Placeholder link
    category: 'Exhibition Catalogs'
  },
  {
    id: 8,
    title: 'Faculty Research Publication',
    description: 'Research paper published by a faculty member.',
    imageUrl: 'https://via.placeholder.com/300x400/dddddd/888888?text=Faculty+Research', // Placeholder image
    linkUrl: '#', // Placeholder link
    category: 'Faculty Research'
  },
   {
    id: 9,
    title: 'Archival Document Example',
    description: 'An example of an older, archived publication.',
    imageUrl: 'https://via.placeholder.com/300x400/eeeeee/777777?text=Archival+Pub', // Placeholder image
    linkUrl: '#', // Placeholder link
    category: 'Archival Publications'
  },
];

const Publication = () => {
  // 2. Manage State for the active filter
  const [activeFilter, setActiveFilter] = useState('All'); // Default filter

  // 3. Filter Logic: Determine which publications to show
  const filteredPublications = activeFilter === 'All'
    ? allPublicationsData // Show all if 'All' is selected
    : allPublicationsData.filter(pub => pub.category === activeFilter); // Otherwise, filter by category

  // Function to handle button clicks and update state
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Define the filter categories for buttons
  const filterCategories = ['All', 'Student Publications', 'Exhibition Catalogs', 'Faculty Research', 'Archival Publications'];

  return (
    <div className="publication-page">
      <section className="page-header">
        <div className="container">
          <h1>Publications</h1>
          <p>Explore publications by the Yale School of Art community, including student work, faculty research, and exhibition catalogs.</p>
        </div>
      </section>
      <section className="publication-content">
        <div className="container">
          <div className="publication-filter">
            {/* 4. & 6. Add onClick handlers and dynamic active class */}
            {filterCategories.map(category => (
              <button
                key={category}
                className={activeFilter === category ? 'active' : ''} // Apply 'active' class conditionally
                onClick={() => handleFilterClick(category)} // Update state on click
              >
                {category}
              </button>
            ))}
          </div>

          {/* 5. Dynamic Rendering: Map over the filtered list */}
          <div className="publication-grid">
            {filteredPublications.length > 0 ? (
              filteredPublications.map(pub => (
                <div className="publication-item" key={pub.id}> {/* Use a unique key */}
                  <img
                    src={pub.imageUrl}
                    alt={`${pub.title} publication`}
                  />
                  <div className="publication-item-info">
                    <h3>{pub.title}</h3>
                    <p>{pub.description}</p>
                    <a href={pub.linkUrl} className="publication-item-link" target="_blank" rel="noopener noreferrer"> {/* Added target and rel for external links */}
                      View Publication
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No publications found for this category.</p> // Optional: Message when no items match
            )}
          </div>

          <div className="publication-info">
            <h2>About Our Publications</h2>
            <p>The Yale School of Art produces a variety of publications documenting student work, exhibitions, and faculty research. These publications serve as an archive of the School's creative output and a resource for the art community.</p>
            <p>Publications include annual documentation of thesis work, exhibition catalogs from our Green Gallery and Edgewood Gallery, faculty monographs, and special projects. Many publications are available for purchase through the School's office.</p>
            <p>For inquiries about specific publications or availability, please contact the publications office at <a href="mailto:art.publications@yale.edu">art.publications@yale.edu</a>.</p>
          </div>
          <div className="view-all-works">
            {/* This button now links externally, which is fine. If you wanted it to also reset the filter, you could add an onClick */}
            <a href="https://www.art.yale.edu/publications" className="button primary" target="_blank" rel="noopener noreferrer">
              View All Publications (External)
            </a>
            {/* Optional: Add a button to reset filter within the page */}
            {/* <button className="button secondary" onClick={() => handleFilterClick('All')}>
              Show All Here
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

const VisitPage = () => {
  return (
    <div className="visit-page">
      
        <title>Visit | Yale School of Art</title>
        <meta name="description" content="Plan your visit to the Yale School of Art. Find information about our location, hours, exhibitions, and public events." />
    
      <section className="page-header">
        <div className="container">
          <h1>Visit Yale School of Art</h1>
          <p className="lead">Experience our community of artists, exhibitions, and public programs</p>
        </div>
      </section>

      <div className="container main-content">
        <div className="visit-grid">
          {/* Location Section */}
          <section className="visit-section location-section">
            <h2 className="section-title">Location & Hours</h2>
            <div className="content-card">
              <div className="map-container">
                <iframe 
                  title="Yale School of Art Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.347231018541!2d-72.9343229242707!3d41.30826220169564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d9b1a99d8c7d%3A0x4a01e8dfc4b3e6e5!2sYale%20School%20of%20Art!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="address-hours">
                <h3>Green Hall Gallery</h3>
                <address>
                  Yale School of Art<br />
                  1156 Chapel Street<br />
                  New Haven, CT 06511
                </address>
                
                <div className="hours">
                  <h4>Gallery Hours:</h4>
                  <ul>
                    <li><strong>Monday-Friday:</strong> 9:00am - 5:00pm</li>
                    <li><strong>Weekends:</strong> Closed</li>
                    <li><strong>Holidays:</strong> Closed</li>
                  </ul>
                  <p className="note">Hours may vary during exhibitions and school breaks</p>
                </div>
              </div>
            </div>
          </section>

          {/* Exhibitions Section */}
          <section className="visit-section exhibitions-section">
            <h2 className="section-title">Current Exhibitions</h2>
            <div className="content-card">
              <div className="exhibition-highlight">
                <h3>Graduate Thesis Exhibition</h3>
                <p className="dates">May 1 - June 15, 2024</p>
                <p>Featuring work from our graduating MFA students across all disciplines.</p>
                <a href="/exhibitions/thesis-2024" className="button">View Exhibition Details</a>
              </div>
              
              <div className="upcoming-exhibitions">
                <h4>Upcoming Exhibitions:</h4>
                <ul>
                  <li>
                    <strong>Faculty Biennial:</strong> July 10 - August 30, 2024
                  </li>
                  <li>
                    <strong>First-Year Showcase:</strong> September 15 - October 30, 2024
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Visitor Information */}
          <section className="visit-section visitor-info">
            <h2 className="section-title">Visitor Information</h2>
            <div className="content-card">
              <div className="info-grid">
                <div className="info-item">
                  <h3>Accessibility</h3>
                  <p>Green Hall is fully accessible. Wheelchair access is available at the Chapel Street entrance.</p>
                </div>
                
                <div className="info-item">
                  <h3>Parking</h3>
                  <p>Limited street parking is available. We recommend using Yale's visitor parking lots:</p>
                  <ul>
                    <li>Yale Lot 51 (150 York Street)</li>
                    <li>Yale Lot 78 (260 Whitney Avenue)</li>
                  </ul>
                </div>
                
                <div className="info-item">
                  <h3>Tours</h3>
                  <p>Guided tours are available by appointment for prospective students and groups.</p>
                  <a href="/about/tours" className="button outline">Schedule a Tour</a>
                </div>
                
                <div className="info-item">
                  <h3>Contact</h3>
                  <p>For visitor inquiries:</p>
                  <p>
                    <strong>Phone:</strong> (203) 432-2600<br />
                    <strong>Email:</strong> art.visitors@yale.edu
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Events Section */}
          <section className="visit-section events-section">
            <h2 className="section-title">Public Events</h2>
            <div className="content-card">
              <div className="event-highlight">
                <h3>Artist Lecture Series</h3>
                <p className="date">Every Thursday at 6:30pm during the academic year</p>
                <p>Free and open to the public. Featuring visiting artists, critics, and scholars.</p>
                <a href="/events/lectures" className="button">View Lecture Schedule</a>
              </div>
              
              <div className="calendar-cta">
                <h4>Full Event Calendar</h4>
                <p>Explore all public lectures, exhibitions, and special events at the School of Art.</p>
                <a href="/events" className="button outline">View Full Calendar</a>
              </div>
            </div>
          </section>

          {/* Directions Section */}
          <section className="visit-section directions-section">
            <h2 className="section-title">Directions</h2>
            <div className="content-card">
              <div className="transport-options">
                <div className="option">
                  <h3>By Train</h3>
                  <p>New Haven Union Station is served by Amtrak and Metro-North. The School of Art is a 15-minute walk or 5-minute taxi ride from the station.</p>
                </div>
                
                <div className="option">
                  <h3>By Car</h3>
                  <p>From I-91: Take exit 3 (Trumbull Street). Follow signs for Yale University. Parking is available in nearby Yale lots.</p>
                </div>
                
                <div className="option">
                  <h3>By Air</h3>
                  <p>Tweed New Haven Airport (HVN) is 5 miles away. Larger international airports include Bradley International (BDL) and JFK/LGA.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const Support = () => {
  return (
    <div className="support-page">
      <section className="page-header">
        <div className="container">
          <h1>Support the School of Art</h1>
          <p>Your generosity helps sustain our mission to educate artists of exceptional talent</p>
        </div>
      </section>

      <section className="support-content">
        <div className="container">
          <div className="support-intro">
            <h2>Ways to Give</h2>
            <p>The Yale School of Art relies on the generosity of alumni and friends to maintain its position as one of the world's leading art schools. Your support helps provide scholarships for talented students, funds faculty research and teaching, and maintains our facilities and resources.</p>
          </div>

          <div className="giving-options">
            <div className="giving-option">
              <div className="giving-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
                </svg>
              </div>
              <h3>Annual Fund</h3>
              <p>Unrestricted gifts to the Annual Fund provide flexible resources that address the School's most pressing needs.</p>
              <a href="https://giving.yale.edu/art" className="button secondary">Give Now</a>
            </div>

            <div className="giving-option">
              <div className="giving-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                </svg>
              </div>
              <h3>Scholarship Support</h3>
              <p>Help ensure that the most talented students can attend Yale regardless of financial circumstances.</p>
              <a href="https://giving.yale.edu/art/scholarships" className="button secondary">Support Scholarships</a>
            </div>

            <div className="giving-option">
              <div className="giving-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
                </svg>
              </div>
              <h3>Program Support</h3>
              <p>Funds for specific departments or programs help maintain excellence across all areas of study.</p>
              <a href="https://giving.yale.edu/art/programs" className="button secondary">Support Programs</a>
            </div>
          </div>

          <div className="impact-section">
            <h2>Your Impact</h2>
            <div className="impact-stats">
              <div className="impact-stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">of students receive some form of financial aid</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">$3.5M</div>
                <div className="stat-label">awarded in scholarships annually</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">visiting artists supported each year</div>
              </div>
            </div>
          </div>

          <div className="donor-recognition">
            <h2>Donor Recognition</h2>
            <p>The School of Art recognizes donors through various giving societies and special events. Leadership donors are invited to exclusive studio visits, exhibition previews, and conversations with faculty and students.</p>
            <div className="recognition-levels">
              <div className="recognition-level">
                <h4>Dean's Circle</h4>
                <p>$10,000 and above</p>
              </div>
              <div className="recognition-level">
                <h4>Director's Circle</h4>
                <p>$5,000 - $9,999</p>
              </div>
              <div className="recognition-level">
                <h4>Faculty Circle</h4>
                <p>$1,000 - $4,999</p>
              </div>
            </div>
          </div>

          <div className="planned-giving">
            <h2>Planned Giving</h2>
            <p>Including Yale School of Art in your estate plans creates a lasting legacy. Planned gifts can provide tax benefits while supporting future generations of artists.</p>
            <div className="planned-giving-options">
              <div className="planned-giving-option">
                <h4>Bequests</h4>
                <p>Designate the School as a beneficiary in your will or trust.</p>
              </div>
              <div className="planned-giving-option">
                <h4>Retirement Plans</h4>
                <p>Name the School as a beneficiary of your IRA or other retirement account.</p>
              </div>
              <div className="planned-giving-option">
                <h4>Life Income Gifts</h4>
                <p>Create a gift that provides you with income during your lifetime.</p>
              </div>
            </div>
            <a href="https://plannedgiving.yale.edu" className="button primary">Learn More</a>
          </div>

          <div className="contact-support">
            <h2>Contact Development</h2>
            <p>For more information about supporting the Yale School of Art, please contact:</p>
            <div className="contact-info">
              <div className="contact-detail">
                <h5>Development Office</h5>
                <p>Yale School of Art</p>
                <p>1156 Chapel Street, New Haven, CT 06511</p>
              </div>
              <div className="contact-detail">
                <h5>Phone</h5>
                <p>(203) 432-2600</p>
              </div>
              <div className="contact-detail">
                <h5>Email</h5>
                <p><a href="mailto:art.development@yale.edu">art.development@yale.edu</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Yale School of Art</h3>
            <address>
              1156 Chapel Street<br />
              New Haven, CT 06511<br />
              <a href="tel:+12034323700">(203) 432-3700</a>
            </address>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/publication">Publications</Link></li>
              <li><Link to="/support">Support</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Academic Calendar</a></li>
              <li><a href="#">Course Catalog</a></li>
              <li><a href="#">Student Resources</a></li>
              <li><a href="#">Visiting Artists</a></li>
              <li><a href="#">Facilities</a></li>
            </ul>
          </div>
          <div className="social-media">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/YaleSchoolofArt/" className="social-circle">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/yaleschoolofart/" className="social-circle">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCDwJT0mYodTSodcpH-hGmdA" className="social-circle">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
  
            <div className="newsletter">
              <h4>Subscribe to our newsletter</h4>
              <form>
                <input type="email" placeholder="Your email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Yale School of Art. All rights reserved.</p>
          <ul>
            <li><a href="https://privacy.yale.edu/resources/privacy-statement">Privacy Policy</a></li>
            <li><a href="https://your.yale.edu/policies-procedures/policies/1605-web-accessibility-policy">Accessibility</a></li>
            <li><Link to="/about/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default YaleArtSchool;