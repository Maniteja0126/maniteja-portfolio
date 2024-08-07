import React from "react";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className=" dark:text-gray-300 mb-10 px-4 text-center">
      <small className="mb-2 text-xs">
        &copy; {year} Mani Teja. All rights reserved.
      </small>
      <p className="text-xs font-semibold">
        Designed and built with ❤️ by{" "}
        <span className=" dark:text-white">Mani Teja</span>
      </p>
    </footer>
  );
}
