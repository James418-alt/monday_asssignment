import Image from "next/image";
import React from "react";

const page = async () => {
  const url = "http://localhost:3000";
  const res = await fetch(`${url}/api/card`, {
    method: "GET",
    cache: "no-cache",
    next: {
      tags: ["card"],
    },
  });

  const data = await res.json();

  return (
    <div>
      {data?.data?.map((el: any) => {
        return (
          <div key={el?._id}>
            <Image alt={el?.title} src={el?.image} width={100} height={100} />

            <p className="mt-1 ml-3 capitalize font-sans">{el?.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default page;
