import React from "react";
import styles from "../../../page.module.scss";
import Image from "next/image";

const Expectations = () => {
  const expectData = [
    {
      activity: "Fellowship",
      image: "/youthCampSunset.jpg",
      description:
        "Connect with fellow campers and build lifelong friendships around the campfire.",
    },
    {
      activity: "Preaching",
      image: "/john-macarthur.jpeg",
      description:
        "Engage in thought-provoking sermons and gain spiritual insights from experienced speakers.",
    },
    {
      activity: "Worship",
      image: "/worshipExample.jpg",
      description:
        "Experience powerful worship sessions surrounded by the beauty of nature.",
    },
    {
      activity: "Food",
      image: "/campFoodExample.jpg",
      description:
        "Savor delicious meals prepared with fresh ingredients, served with a side of community.",
    },
    {
      activity: "Summer Activities",
      image: "/summerActivityExample.jpg",
      description:
        "Participate in a variety of outdoor adventures and recreational activities tailored for summer fun.",
    },
    {
      activity: "Surprise",
      image: "/testPhoto.jpg",
      description:
        "Stay tuned for a special surprise event that promises excitement and unforgettable memories.",
    },
  ];

  return (
    <div className={styles.expectations}>
      {expectData.map((item, index) => (
        <div className={styles.expectationItem} key={index}>
          <Image
            src={item.image}
            alt={item.activity}
            layout="fill"
            objectFit="cover"
            loading="eager"
          />
          <div className={styles.overlay}>
            <div className={styles.description}>
              <h5 className={styles.activity}>{item.activity}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expectations;
