import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../../pages/detail/Detail";
import { Home } from "../../pages/home/Home";
import React from "react";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<div>Error 404 - page is not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
