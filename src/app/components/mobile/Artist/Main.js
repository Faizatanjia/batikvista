"use client";

import React from "react";

import Blog from "@/app/components/mobile/Blog/Main";

export default function Main() {
  const data = {
    type: "artist",
    title: "Raden Saleh",
    subTitle: "e.t. 1807 or 1811 - 1880",
    introduction: "Raden Saleh (1811–1880) was an Indonesian painter considered a pioneer in modern Indonesian art. Born in Java, Saleh gained recognition for his artistic talent and received training in Europe, notably in the Netherlands and Germany. He merged Western painting techniques with traditional Indonesian themes, creating unique and influential works. His art often depicted scenes from Indonesian history, wildlife, and culture, showcasing a blend of European academic styles and his native artistic sensibilities. Raden Saleh's contributions to the development of Indonesian art remain highly regarded, and he is celebrated as a key figure in the nation's cultural heritage.",
    blogContent: [
      {
        title: "Legacy", 
        content: [
          "Raden Saleh's legacy is enduring and multifaceted, leaving an indelible mark on the cultural landscape of Indonesia. As a pioneering artist, he played a pivotal role in bridging the gap between traditional Indonesian artistic expressions and Western painting techniques. By studying in Europe and incorporating elements of academic realism into his works, Saleh not only elevated the standards of Indonesian art but also contributed to its international recognition. His ability to seamlessly blend Western and indigenous influences set a precedent for future generations of Indonesian artists, inspiring a vibrant and diverse artistic scene that continues to thrive.",
          "Beyond his artistic contributions, Raden Saleh holds historical significance as a nationalist figure. Living during a time of colonial rule, Saleh's life and work are emblematic of the struggles and aspirations of his era. His success as an artist of noble Javanese descent challenged prevailing notions of racial and social hierarchies, paving the way for a more inclusive and diverse cultural identity in Indonesia. Today, Raden Saleh is remembered not only for his groundbreaking artistic achievements but also for his role in shaping the narrative of Indonesian independence and fostering a sense of cultural pride among his compatriots."
        ]
      }
    ],
    imageUrlMinimized: "/mobile/artist/raden-saleh/raden-saleh-minimized.png",
    imageUrlExpanded: "/mobile/artist/raden-saleh/raden-saleh-expanded.png",
    tags: ["Artist", "Oil painting", "Romantic", "Wildlife"],
    artistDetailImageUrl: "/mobile/artist/raden-saleh/raden-saleh-detail.png"
  }

  const handleBack = () => {

  }

  return (
    <div>
        <Blog data={data} handleBack={handleBack}/>
    </div>
  );
}
