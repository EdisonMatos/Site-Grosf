import React, { useState } from "react";
import AboutFading from "./AboutFading";

export default function ParagraphWithFading() {
  return (
    <p className="text-white text-opacity-80">
      <AboutFading />
    </p>
  );
}
