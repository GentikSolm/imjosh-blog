---
posted: 2024-01-16
---

Pretty straight forward react star rating component i made and thought was cool.

```tsx
"use client";

import { useState } from "react";
import clsx from "clsx";
import { Star, StarHalf } from "lucide-react";
import { toast } from "sonner";

import { trpc } from "~/app/providers";

export default function StarRating({
  thing,
  initial,
  title,
}: {
  thing: string;
  initial: number | null;
  title: string;
}) {
  const [hover, setHover] = useState(initial ?? -1);
  const [rating, setRating] = useState(initial ?? -1);
  const rate = trpc.thing.setRating.useMutation({
    // your api should return the rating that was set.
    onSuccess: (r) => {
      setRating(r);
      toast.success(`Rated ${thing} ${r / 2}/5 Stars`);
    },
  });
  return (
    <div className="flex">
      {[...(Array(5) as unknown[])].map((_, i) => (
        <div key={i} className="relative text-gray-800">
          <div className="absolute left-0 z-20 h-full w-1/2 bg-gray-100">
            <StarHalf
              strokeWidth={1}
              className={clsx(
                hover >= i * 2 && "fill-yellow-400 text-yellow-400",
                "z-10 h-7 w-7",
              )}
            />
          </div>
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
            onMouseLeave={() => setHover(rating)}
            onClick={() => rate.mutate({ book, rating: i * 2 + 1 })}
            className="absolute right-0 z-20 h-full w-1/2"
          />
          <button
            onMouseEnter={() => setHover(i * 2)}
            onMouseLeave={() => setHover(rating)}
            onClick={() => rate.mutate({ book, rating: i * 2 })}
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
