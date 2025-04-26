import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      {/* Main Login Content */}
      <main className="login-container">
        <div className="login-card">
          <h2>School of Art Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">NetID</label>
              <input 
                type="text" 
                id="username" 
                placeholder="Enter your NetID"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="button primary">Log In</button>
          </form>
          <div className="login-links">
            <a href="#">Forgot password?</a>
            <a href="#">Don't have NetID?</a>
          </div>
        </div>
      </main>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Header is already included in your App.js */}
      
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
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="header-top-bar">
        <div className="logo-container">
          <img src="/images/Yale_logo.jpeg" alt="Yale University Logo" className="university-logo" />
          <span className="university-name">Yale University</span>
        </div>
        <nav className="utility-nav">
          <ul>
            <li><a href="https://www.yale.edu/">Yale.edu</a></li>
            <li><a href="#">Directory</a></li>
            <li><a href="#">MyYale</a></li>
          </ul>
        </nav>
      </div>
      
      <div className="main-navigation">
        <h1 className="school-name">
          <Link to="/">School of Art</Link>
        </h1>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/faculty">Faculty</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
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
      <div className="container">
        <div className="hero-content">
          <h2>Advancing Art Through Critical Inquiry and Creative Practice</h2>
          <p>Yale School of Art is a graduate school that confers MFAs in Graphic Design, Painting/Printmaking, Photography, and Sculpture</p>
          <div className="hero-buttons">
            <Link to="/programs" className="button primary">Explore Programs</Link>
            <Link to="/admissions" className="button secondary">Apply Now</Link>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="/images/art_studio.jpg" 
          alt="Art studio at Yale"
        />
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
          <Link to="/gallery" className="button small">View Gallery</Link>
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
            <Link to="/programs/graphic-design" className="button small">Learn More</Link>
          </div>
          <div className="program-card">
            <h3>Painting/Printmaking</h3>
            <p>Focusing on contemporary approaches to painting and printmaking as parallel disciplines.</p>
            <Link to="/programs/painting-printmaking" className="button small">Learn More</Link>
          </div>
          <div className="program-card">
            <h3>Photography</h3>
            <p>Exploring photography as an artistic medium with a focus on conceptual development.</p>
            <Link to="/programs/photography" className="button small">Learn More</Link>
          </div>
          <div className="program-card">
            <h3>Sculpture</h3>
            <p>Encouraging experimentation across diverse media and approaches to three-dimensional work.</p>
            <Link to="/programs/sculpture" className="button small">Learn More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
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
            <button className="active">Graphic Design</button>
            <button>Painting/Printmaking</button>
            <button>Photography</button>
            <button>Sculpture</button>
          </div>
          <div className="program-content">
            <h2>Graphic Design</h2>
            <p>The graphic design program focuses on the development of a cohesive, investigative body of work, also known as the student's thesis. At Yale, the graphic design thesis is conceived as a loose framework within which each student's visual method is deployed across many diverse projects during the two-year course of study.</p>
            <p>While every thesis project is unique, there are several common features: a focus on methodology, the application of a visual method to studio work, and the organization of the work in a thoughtfully argued written document and exhibition.</p>
            
            <div className="program-stats">
              <div className="stat-item">
                <h4>Duration</h4>
                <p>2 years</p>
              </div>
              <div className="stat-item">
                <h4>Degree</h4>
                <p>MFA</p>
              </div>
              <div className="stat-item">
                <h4>Students per year</h4>
                <p>12</p>
              </div>
            </div>
            
            <div className="program-images">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Graphic design student work"
              />
              <img 
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Graphic design studio"
              />
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
            <Link to="#" className="button">View All Faculty</Link>
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
            <a href="#" className="button primary">Begin Application</a>
            <a href="#" className="button secondary">Download Viewbook</a>
          </div>
        </div>
      </section>
      <section className="financial-aid">
        <div className="container">
          <h2>Financial Aid</h2>
          <p>All admitted MFA students receive a generous financial aid package that includes full tuition remission and a stipend for living expenses. Additional funding is available for research travel, materials, and summer study.</p>
          <a href="#" className="button">Learn More About Financial Aid</a>
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
            <Link to="#" className="button">View Full Calendar</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="gallery-page">
      <section className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore work by current students, alumni, and faculty of the Yale School of Art.</p>
        </div>
      </section>
      <section className="gallery-content">
        <div className="container">
          <div className="gallery-filter">
            <button className="active">All</button>
            <button>Graphic Design</button>
            <button>Painting/Printmaking</button>
            <button>Photography</button>
            <button>Sculpture</button>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Student artwork"
              />
              <div className="gallery-item-info">
                <h3>Untitled</h3>
                <p>Jane Smith, Painting '23</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Student artwork"
              />
              <div className="gallery-item-info">
                <h3>Systematic</h3>
                <p>Alex Johnson, Graphic Design '23</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Student artwork"
              />
              <div className="gallery-item-info">
                <h3>Composition #4</h3>
                <p>Maria Garcia, Graphic Design '22</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Student artwork"
              />
              <div className="gallery-item-info">
                <h3>Erosion</h3>
                <p>David Kim, Sculpture '23</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Student artwork"
              />
              <div className="gallery-item-info">
                <h3>Passage</h3>
                <p>Sarah Chen, Photography '22</p>
              </div>
            </div>
            <div className="gallery-item">
              <img 
                src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Student artwork"
              />
              <div className="gallery-item-info">
                <h3>Monolith</h3>
                <p>James Wilson, Sculpture Faculty</p>
              </div>
            </div>
          </div>
          <div className="view-all-works">
            <Link to="#" className="button">View More Works</Link>
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
              <li><Link to="/gallery">Gallery</Link></li>
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
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><Link to="/about/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default YaleArtSchool;