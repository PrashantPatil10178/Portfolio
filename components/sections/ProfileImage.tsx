"use client";

import Image from "next/image";

interface ProfileImageProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
}

export function ProfileImage({
  imageUrl,
  firstName,
  lastName,
}: ProfileImageProps) {
  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden w-full">
      <Image
        src={imageUrl}
        alt={`${firstName} ${lastName}`}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
