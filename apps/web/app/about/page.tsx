import React from "react";

async function About() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div>
      <div>About</div>
    </div>
  );
}

export default About;
