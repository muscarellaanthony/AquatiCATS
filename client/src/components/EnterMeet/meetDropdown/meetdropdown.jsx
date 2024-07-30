"use client";

import { Dropdown } from "flowbite-react";

export function SwimStyle() {
  return (
    <Dropdown className="bg-white rounded-lg cursor-default shadow-md text-left w-full py-2 pr-10 pl-3 relative sm:text-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-white focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2"label="Dropdown button" dismissOnClick={false}>
      <Dropdown.Item>FreeStyle</Dropdown.Item>
      <Dropdown.Item>Butterfly</Dropdown.Item>
      <Dropdown.Item>Breast Stroke</Dropdown.Item>
      <Dropdown.Item>Back Stroke</Dropdown.Item>
    </Dropdown>
  );
}