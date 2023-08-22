"use client";
import { TypeAnimation } from "react-type-animation";

export default function ThingsToEmail() {
  return (
    <TypeAnimation
      sequence={[
        "an attachment.",
        2000,
        "a few links.",
        2000,
        "a note.",
        2000,
      ]}
      wrapper="span"
      speed={30}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
