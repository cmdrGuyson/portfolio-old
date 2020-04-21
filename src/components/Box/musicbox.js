import React from "react";
import "./box.css";

function musicbox() {
  return (
    <div>
      <div className="about" style={{ marginTop: 150 }}>
        <h1>My Music</h1>
        <p>
          "Ex Animo" meaning "From the heart" is my first EP. It's still in the
          making. Until then you can listen to my new single{" "}
          <span className="song-title">"Fallen for you".</span>
        </p>
        <iframe
          width="90%"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          title="fallen-for-you"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/776738947&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </div>
    </div>
  );
}

export default musicbox;
