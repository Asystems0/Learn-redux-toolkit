import React from "react";

const ActorItem = ({ actor }) => {
  return (
    <div className="actorItem">
      <h4>
        Full name:{" "}
        <a
          href={`https://www.google.com/search?q=${actor.fullName}`}
          target="_blank"
        >
          {actor.fullName}
        </a>
      </h4>

      <p>Title: {actor.title}</p>
      <p>Family: {actor.family}</p>
      <a href={actor.imageUrl}>
        <img src={actor.imageUrl} alt={actor.image} className="actorImage" />
      </a>
    </div>
  );
};

export default ActorItem;

// firstName": "Daenerys",
//         "lastName": "Targaryen",
//         "fullName": "Daenerys Targaryen",
//         "title": "Mother of Dragons",
//         "family": "House Targaryen",
//         "image": "daenerys.jpg",
//         "imageUrl"
