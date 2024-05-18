import React from 'react';

const Navbar = ({ setCategory }) => {
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>Dream Potential</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button onClick={() => handleCategoryChange('general')} className="nav-link active" aria-current="page">General</button>
            <button onClick={() => handleCategoryChange('technology')} className="nav-link">Technology</button>
            <button onClick={() => handleCategoryChange('business')} className="nav-link">Business</button>
            <button onClick={() => handleCategoryChange('health')} className="nav-link">Health</button>
            <button onClick={() => handleCategoryChange('science')} className="nav-link">Science</button>
            <button onClick={() => handleCategoryChange('sports')} className="nav-link">Sports</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
