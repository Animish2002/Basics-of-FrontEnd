import React from "react";
import { myData } from "../../dummy_data/data";
import { useState } from "react";

const Map = () => {
  const [user, setUser] = useState(myData);

  console.log(user);

  return (
    <div>
      {user.map((item, index) => (
        <div key={item.id} className="flex ">
          <p className="text-xs p-2">{index + 1}</p>
          <p className="text-xs p-2">{item.first_name}</p>
          <p className="text-xs p-2">{item.last_name}</p>
        </div>
      ))}
    </div>
  );
};

export default Map;
