"use client";

import "@/css/Numbers.css";
import useCountUpOnView from "@/hooks/useCountUpOnView";

export default function Numbers() {
  useCountUpOnView();

  return (
    <section className="numbers-section fit-body" id="numbers">
      <div className="number-card">
        <h1 className="count" data-target="234">
          0
        </h1>
        <p>Services Provided</p>
      </div>
      <div className="number-card">
        <h1 className="count" data-target="55">
          0
        </h1>
        <p>Happy Clients</p>
      </div>
      <div className="number-card">
        <h1 className="count" data-target="27">
          0
        </h1>
        <p>Managed Talent</p>
      </div>
    </section>
  );
}
