import React from "react";

async function About() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div>
      <div>About</div>
      <h1>hello</h1>
      <h3>hi</h3>
      <h2>hey</h2>
      <h1>test</h1>
    </div>
  );
}

export default About;
