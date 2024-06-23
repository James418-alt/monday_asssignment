import Image from "next/image";
import React from "react";
import moment from "moment";

const page = async () => {
  const res = await fetch("https://monday-asssignment.vercel.app/api/card"!, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  let data = await res.json();

  return (
    <div>
      <div className="p-4 grid grid-rows-3 gap-4 w-full">
        {data?.data?.map((props: any) => (
          <div
            key={props?._id}
            className="overflow-hidden border rounded-md w-[300px] h-full"
          >
            <Image
              alt={props?.title}
              src={props?.image}
              width={1000}
              height={500}
              className="w-full h-[85%] border-b object-cover"
            />

            <p className="mt-1 ml-3 capitalize font-semibold">{props?.title}</p>
            <div className="flex justify-end p-2">
              <p className="text-[12px] text-gray-500">
                {moment
                  .utc(`${props?.createdAt}`)
                  .local()
                  .startOf("seconds")
                  .fromNow()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
