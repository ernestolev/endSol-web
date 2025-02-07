import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Home.module.css';
import React, { useRef, useState, useEffect } from 'react';
import RotatingText from '../RotatingText/RotatingText';

export default function Home() {


    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const rotation = useTransform(scrollYProgress, [0, 0.4], [0, -45]);
    const scale = useTransform(scrollYProgress, [0, 0.3], [1, 50]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 1]);
    const backgroundDarken = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const xPosition = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
    const yPosition = useTransform(scrollYProgress, [0, 0.4], [0, 0]);

    // Section 2 scroll phases
    // Update scroll transforms
    const nextSectionY = useTransform(scrollYProgress, [0.3, 0.35], ["100vh", "0vh"]);
    const cornerTitleOpacity = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
    const cornerTitleY = useTransform(scrollYProgress, [0.5, 0.55], [50, 0]);

    const item1Opacity = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]);
    const item1Y = useTransform(scrollYProgress, [0.55, 0.6], [50, 0]);

    const item2Opacity = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);
    const item2Y = useTransform(scrollYProgress, [0.6, 0.65], [50, 0]);

    const item3Opacity = useTransform(scrollYProgress, [0.65, 0.7], [0, 1]);
    const item3Y = useTransform(scrollYProgress, [0.65, 0.7], [50, 0]);

    // Section 3 entrance
    const section3Y = useTransform(scrollYProgress, [0.7, 0.75], ["100vh", "0vh"]);


    const section4Y = useTransform(scrollYProgress, [0.85, 0.9], ["100vh", "0vh"]);
    const section4Opacity = useTransform(scrollYProgress, [0.85, 0.9], [0, 1]);
    const titleOpacity = useTransform(scrollYProgress, [0.9, 0.92], [0, 1]);
    const titleY = useTransform(scrollYProgress, [0.9, 0.92], [20, 0]);
    
    const carouselX = useTransform(
        scrollYProgress,
        [0.92, 1.25], // Increased range
        ["0%", "-450%"]
    );
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(latest => {
            if (latest >= 0.6) {
                setShowContent(true);
            } else {
                setShowContent(false);
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    const fallingTextVariants = {
        initial: (i) => ({
            y: -50,
            opacity: 0
        }),
        animate: (i) => ({
            y: 0,
            opacity: [0, 1, 0.1],
            transition: {
                duration: 0.5,
                delay: i * 0.1,
                opacity: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                }
            }
        })
    };


    const serviceCards = [
        {
            type: "Web Development",
            subtypes: ["Frontend Dev", "Backend Dev", "Full Stack"],
        },
        {
            type: "UI/UX Design",
            subtypes: ["User Research", "Wireframing", "Prototyping"],
        },
        {
            type: "Digital Marketing",
            subtypes: ["SEO", "Social Media", "Content Strategy"],
        },
        {
            type: "Brand Strategy",
            subtypes: ["Identity Design", "Brand Voice", "Guidelines"],
        },
        {
            type: "Mobile Development",
            subtypes: ["iOS Native", "Android Native", "Cross Platform"],
        },
        {
            type: "Cloud Services",
            subtypes: ["AWS", "Azure", "Google Cloud"],
        },
        {
            type: "Data Analytics",
            subtypes: ["Big Data", "Visualization", "Reporting"],
        },
        {
            type: "AI Solutions",
            subtypes: ["Machine Learning", "NLP", "Computer Vision"],
        }
    ];

    const [showContent, setShowContent] = useState(false);
    const initialCards = serviceCards.slice(0, 4);
    const slidingCards = serviceCards.slice(4);




    return (
        <div ref={containerRef} className={styles.container}>
            <motion.div
                className={styles.hero}
                style={{
                    x: xPosition,
                    y: yPosition,
                    scale
                }}
            >
                <div className={styles.content}>
                    <motion.h1
                        className={styles.title}
                        style={{
                            opacity: textOpacity,
                            rotate: rotation,
                            transformOrigin: "60% 10%"
                        }}
                    >
                        A <motion.div className={styles.rotatingContainer}>
                            <RotatingText
                                texts={['creative', 'innovative', 'powerful', 'dynamic']}
                                mainClassName={styles.rotatingText}
                                rotationInterval={2000}
                            />
                        </motion.div> consulting
                    </motion.h1>
                    <motion.p
                        className={styles.description}
                        style={{
                            opacity: textOpacity,
                            rotate: rotation,
                            transformOrigin: "35% 40%"
                        }}
                    >
                        We create innovative solutions for your digital needs.
                        Our team of experts is ready to help you transform your ideas into reality.
                    </motion.p>
                </div>
            </motion.div>

            <motion.div
                className={styles.nextSection}
                style={{
                    y: nextSectionY,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh'
                }}
            >
                <div className={styles.lavaLamp}>
                    <div className={styles.lavaBlob1}></div>
                    <div className={styles.lavaBlob2}></div>
                    <div className={styles.lavaBlob3}></div>
                    <div className={styles.lavaBlob4}></div>
                    <div className={styles.lavaBlob5}></div>
                    <div className={styles.lavaBlob6}></div>
                </div>
                <div className={styles.gridOverlay} />
                <motion.h2
                    className={styles.cornerTitle}
                    style={{
                        opacity: cornerTitleOpacity,
                        y: cornerTitleY
                    }}
                >
                    In this ever-evolving digital landscape, we are…
                </motion.h2>

                <motion.div className={styles.rightContent}>
                    <motion.div
                        className={styles.contentItem}
                        style={{
                            opacity: item1Opacity,
                            y: item1Y
                        }}
                    >
                        <h3>Blending Creativity with Technology</h3>
                        <p>We fuse artistic vision with cutting-edge solutions to bring your brand to life.</p>
                    </motion.div>

                    <motion.div
                        className={styles.contentItem}
                        style={{
                            opacity: item2Opacity,
                            y: item2Y
                        }}
                    >
                        <h3>Designing Exceptional Experiences</h3>
                        <p>Passionately crafting digital journeys that captivate, engage, and leave a lasting impact.</p>
                    </motion.div>

                    <motion.div
                        className={styles.contentItem}
                        style={{
                            opacity: item3Opacity,
                            y: item3Y
                        }}
                    >
                        <h3>Challenging Limits</h3>
                        <p>We don't just follow trends—we redefine them.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                className={styles.section3}
                style={{ y: section3Y }}
            >
                <div className={styles.serviceGrid}>
                    {Array(24).fill('SERVICES').map((text, index) => (
                        <motion.span
                            key={index}
                            className={styles.serviceText}
                            custom={index}
                            variants={fallingTextVariants}
                            initial="initial"
                            animate="animate"
                        >
                            {text}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            <motion.div
                className={styles.section4}
                style={{
                    y: section4Y,
                    opacity: section4Opacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 5
                }}
            >
                <div className={styles.servicesContainer}>
                    <motion.h2
                        style={{
                            opacity: titleOpacity,
                            y: titleY
                        }}
                    >
                        Our Services
                    </motion.h2>
                    <div className={styles.servicesWrapper}>
                        <motion.div
                            className={styles.servicesGrids}
                            style={{ x: carouselX }}
                        >
                            {serviceCards.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.serviceCard}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        delay: 0.5 + (index * 0.1),
                                        duration: 0.5
                                    }}
                                >
                                    <div className={styles.subtypesBox}>
                                        {service.subtypes.map((subtype, idx) => (
                                            <motion.span
                                                key={idx}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{
                                                    opacity: [0, 1, 1, 0],
                                                    y: [20, 0, 0, -20]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    delay: idx * 2,
                                                    repeat: Infinity,
                                                    repeatDelay: service.subtypes.length * 3 - 3
                                                }}
                                            >
                                                {subtype}
                                            </motion.span>
                                        ))}
                                    </div>
                                    <h3>{service.type}</h3>
                                    <motion.button
                                        className={styles.viewButton}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View
                                    </motion.button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}