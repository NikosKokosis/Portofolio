function showSection(sectionId) {
    const sections = ['skills', 'analysisprojects', 'scienceprojects'];
    sections.forEach(id => {
      document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
    });
  }
  