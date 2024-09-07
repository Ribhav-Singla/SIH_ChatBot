import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";


export default function Avatar_() {
  return (
    <Avatar>
      <AvatarImage src={"https://github.com/shadcn.png"} />
      <AvatarFallback className="text-black bg-slate-100 font-semibold">RS</AvatarFallback>
    </Avatar>
  );
}
