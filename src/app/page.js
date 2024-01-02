import React from "react";

import Censored from "./Censored";
import HitCounter from "./HitCounter";

function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <Censored>
        <HitCounter />
      </Censored>
    </main>
  );
}

export default Home;
