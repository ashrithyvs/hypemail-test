import React from "react";
import {
  GrFacebookOption,
  GrTwitter,
  GrGithub,
  GrDribbble,
} from "react-icons/gr";
export default function Footer() {
  return (
    <div className="px-20 py-10 flex justify-between">
      <h4 className="font-semibold text-md text-gray-400">
        © 2021 Themesberg, LLC. All rights reserved.
      </h4>
      <div className="flex space-x-6">
        <GrFacebookOption className="cursor-pointer" />
        <GrTwitter className="cursor-pointer" />
        <GrGithub className="cursor-pointer" />
        <GrDribbble className="cursor-pointer" />
      </div>
    </div>
  );
}
