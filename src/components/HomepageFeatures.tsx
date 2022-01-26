import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to use",
    image: "/img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        gliff.ai was designed by data scientists for everybody - we take the
        hassle (and the code) out of preparing AI datasets.
      </>
    ),
  },
  {
    title: "Annotate your data",
    image: "/img/undraw_docusaurus_tree.svg",
    description: (
      <>
        gliff.ai is a data platform that allows you to annotate your images with
        shapes and labels.
      </>
    ),
  },
  {
    title: "Collaborate with your team",
    image: "/img/undraw_docusaurus_react.svg",
    description: (
      <>
        gliff.ai is designed for secure collaboration between domain experts and
        AI experts across the globe.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
