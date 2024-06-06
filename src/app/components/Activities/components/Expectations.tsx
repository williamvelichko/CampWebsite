import React from "react";
import styles from "../styles/Expectations.module.scss";
import Image from "next/image";
import expectData from "../data/expectData.json";

const Expectations = () => {
  return (
    <div className={styles.expectationsContainer}>
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
    </div>
  );
};

export default Expectations;

// import React from "react";
// import styles from "../styles/Expectations.module.scss";
// import Image from "next/image";
// import expectData from "../data/expectData.json";

// const Expectations = () => {
//   return (
//     <div className={styles.expectationsContainer}>
//       <div className={styles.expectations}>
//         {expectData.map((item, index) => (
//           <div className={styles.expectationItem} key={index}>
//             <picture>
//               <source srcSet={item.imageWebp} type="image/webp" />
//               <source srcSet={item.image} type="image/JPG" />
//               <Image
//                 src={item.image}
//                 alt={item.activity}
//                 layout="fill"
//                 objectFit="cover"
//                 loading="lazy"
//               />
//             </picture>
//             <div className={styles.overlay}>
//               <div className={styles.description}>
//                 <h5 className={styles.activity}>{item.activity}</h5>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Expectations;
