---
posted: 2024-01-16
---

Pretty straight forward react star rating component i made and thought was cool.

```tsx
import { useState } from "react";
import clsx from "clsx";
import { Star, StarHalf } from "lucide-react";

export default function StarRating() {
  const [hover, setHover] = useState(-1);
  return (
    <div className="flex">
      {[...(Array(5) as unknown[])].map((_, i) => (
        <div key={i} className="relative text-gray-800">
          <button
            onMouseEnter={() => setHover(i * 2)}
            onMouseLeave={() => setHover(-1)}
            className="absolute left-0 z-20 h-full w-1/2 bg-gray-100"
          >
            <StarHalf
              strokeWidth={1}
              className={clsx(
                hover >= i * 2 && "fill-yellow-400 text-yellow-400",
                "z-10 h-7 w-7",
              )}
            />
          </button>
          <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gray-100">
            <Star
              strokeWidth={1}
              className={clsx(
                hover >= i * 2 + 1 && "fill-yellow-400 text-yellow-400",
                "h-7 w-7",
              )}
            />
          </div>
          <button
            onMouseEnter={() => setHover(i * 2 + 1)}
            onMouseLeave={() => setHover(-1)}
            className="absolute right-0 z-20 h-full w-1/2"
          />
          <button
            onMouseEnter={() => setHover(i * 2)}
            onMouseLeave={() => setHover(-1)}
            className="absolute left-0 z-20 h-full w-1/2"
          />
          <div>
            <Star strokeWidth={0} className="h-7 w-7" />
          </div>
        </div>
      ))}
    </div>
  );
}
```
