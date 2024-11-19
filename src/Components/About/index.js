import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
const About = () => {
  const [about, setAbout] = useState({});
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    // setLoading(true);
    const aboutRef = ref(db, "about");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
      // setLoading(false);
    });
  }, []);
return (
<div className="intro section" id="about">
<div className="container">
  <p>Hi, I’m Jethro Supit</p>
  <div className="units-row units-split wrap">
    <div className="unit-20">
      <img src="img/gga skli.jpg" alt="Avatar" />
    </div>
    <div className="unit-80">
      <h1>I live in<br /><span id="typed" /></h1>
    </div>
    <p>
      {about.para}
    </p>
  </div>
</div>
</div>
    );
};

export default About;