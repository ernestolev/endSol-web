import Lenis from '@studio-freight/lenis'
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Home.module.css';
import React, { useRef, useState, useEffect } from 'react';
import RotatingText from '../../EN/RotatingText/RotatingText';
import StarField from '../../EN/components/Backgrounds/StarField';

export default function Home() {


    const motionConfig = {
        transform: true,
        opacity: true,
        layoutDependency: false,
        reducedMotion: "user"
    };
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const rotation = useTransform(scrollYProgress, [0, 0.06], [0, -45]);
    const scale = useTransform(scrollYProgress, [0, 0.06], [1, 50]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.3], [1, 1]);
    const backgroundDarken = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const xPosition = useTransform(scrollYProgress, [0, 0.1], [0, -50]);
    const yPosition = useTransform(scrollYProgress, [0, 0.1], [0, 0]);

    // Section 2 scroll phases
    // Update scroll transforms
    const nextSectionY = useTransform(scrollYProgress, [0.02, 0.04], ["100vh", "0vh"]);
    const cornerTitleOpacity = useTransform(scrollYProgress, [0.03, 0.06], [0, 1]);
    const cornerTitleY = useTransform(scrollYProgress, [0.03, 0.06], [50, 0]);

    const item1Opacity = useTransform(scrollYProgress, [0.06, 0.07], [0, 1]);
    const item1Y = useTransform(scrollYProgress, [0.05, 0.07], [50, 0]);

    const item2Opacity = useTransform(scrollYProgress, [0.08, 0.09], [0, 1]);
    const item2Y = useTransform(scrollYProgress, [0.07, 0.09], [50, 0]);

    const item3Opacity = useTransform(scrollYProgress, [0.10, 0.11], [0, 1]);
    const item3Y = useTransform(scrollYProgress, [0.09, 0.11], [50, 0]);

    // Section 3 entrance
    const section3Y = useTransform(scrollYProgress, [0.12, 0.13], ["100vh", "0vh"]);


    const section4Y = useTransform(scrollYProgress, [0.14, 0.16], ["100vh", "0vh"]);
    const section4Opacity = useTransform(scrollYProgress, [0.15, 0.16], [0, 1]);

    const titleOpacity = useTransform(scrollYProgress, [0.15, 0.16], [0, 1]);

    const titleY = useTransform(scrollYProgress, [0.15, 0.16], [20, 0]);

    const carouselX = useTransform(
        scrollYProgress,
        [0.17, 0.185], // Increased range
        ["0%", "-50%"]
    );

    const carouselSkew = useTransform(
        scrollYProgress,
        [0.17, 0.175, 0.185],
        [0, 15, 0]  // Changed from -15 to 15 for opposite direction
    );

    const cardRotation = useTransform(
        scrollYProgress,
        [0.17, 0.175, 0.185],
        [0, -25, 0]  // Changed from 15 to -15 for opposite rotation
    );

    const projectItems = [
        {
            title: "Play Place",
            description: "A SaaS platform for booking sports fields in Peru, acting as an intermediary between players and field owners. It uses Cloud Firestore as a cloud database to manage availability, rates, and reservations in real-time. It features Google authentication, payment integration, and an optimized design for accessibility and performance. Users can view an interactive map with real-time field locations, book online, and efficiently manage records.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            color: "#355070",
            tags: [
                "Cloud Firestore", "Firebase Authentication", "React", "JavaScript",
                "CSS", "Tailwind CSS", "Stripe API", "Google Maps API",
                "Serverless", "Full-Stack Development", "Gamification",
                "Python", "Data Analytics", "Real-Time Database"
            ]
        },
        {
            title: "Alumni Platform",
            description: "A SaaS web platform designed to strengthen the alumni community of a Peruvian national school, providing access to news, events, and exclusive activities. Built with a cloud-based architecture, it integrates Firebase Authentication for secure user management and a role-based system for administrators and members.",
            image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9",
            color: "#6d597a",
            tags: [
                "Firebase Authentication", "Firestore", "React", "JavaScript",
                "SaaS", "Cloud Database", "Role-based Access",
                "Serverless", "Hosting", "Figma", "UI/UX", "Full-Stack Development"
            ]
        },
        {
            title: "PULSE",
            description: "Real-time Analytics Platform",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            color: "#6d597a",
            tags: ["Next.js", "GraphQL", "MongoDB", "WebSocket"]
        }
    ];


    // Add new scroll transforms after section 4
    const section5Y = useTransform(scrollYProgress, [0.185, 0.20], ["100vh", "0vh"]);
    const section5Opacity = useTransform(scrollYProgress, [0.19, 0.20], [0, 1]);
    const section5TextY = useTransform(scrollYProgress, [0.20, 0.21], [50, 0]);

    const section6Y = useTransform(scrollYProgress, [0.22, 0.24], ["100vh", "0vh"]);
    const section6Opacity = useTransform(scrollYProgress, [0.22, 0.24], [0, 1]);

    const section7Y = useTransform(scrollYProgress, [0.25, 0.27], ["100vh", "0vh"]);
    const section7Opacity = useTransform(scrollYProgress, [0.25, 0.26], [0, 1]);
    const section7FullScreen = useTransform(scrollYProgress, [0.29, 0.30], [0, 1]);

    const projectIndex = useTransform(
        scrollYProgress,
        [0.31, 0.34, 0.38], // Increased ranges
        [0, 1, 2]  // Added final value to hold last project
    );

    const section8Y = useTransform(scrollYProgress, [0.42, 0.45], ["100vh", "0vh"]);
    const section8Opacity = useTransform(scrollYProgress, [0.42, 0.45], [0, 1]);
    const section8Exit = useTransform(scrollYProgress, [0.48, 0.5], [0, -100]);

    const leftTitleY = useTransform(scrollYProgress, [0.45, 0.46], [50, 0]);
    const leftTitleOpacity = useTransform(scrollYProgress, [0.45, 0.46], [0, 1]);

    const section9Y = useTransform(scrollYProgress, [0.47, 0.5], ["100vh", "0vh"]);
    const section9Opacity = useTransform(scrollYProgress, [0.48, 0.485], [0, 1]);
    const section9Exit = useTransform(scrollYProgress, [0.56, 0.57], [0, "-100vh"]); // Add exit animation


    const rightItems = [
        useTransform(scrollYProgress, [0.46, 0.47], [50, 0]),
        useTransform(scrollYProgress, [0.465, 0.475], [50, 0]),
        useTransform(scrollYProgress, [0.47, 0.48], [50, 0])
    ];

    const rightItemsOpacity = [
        useTransform(scrollYProgress, [0.46, 0.47], [0, 1]),
        useTransform(scrollYProgress, [0.465, 0.475], [0, 1]),
        useTransform(scrollYProgress, [0.47, 0.48], [0, 1])
    ];

    const section10Y = useTransform(scrollYProgress, [0.57, 0.58], ["100vh", "0vh"]);
    const section10Opacity = useTransform(scrollYProgress, [0.57, 0.58], [0, 1]);

    const section10TitleScale = useTransform(
        scrollYProgress,
        [0.58, 0.63],
        [205, 1]  // Reduced scale for smoother transition
    );

    const section10TitleRotate = useTransform(
        scrollYProgress,
        [0.58, 0.63],
        [-80, 0]  // Reduced rotation
    );

    const section10TitleX = useTransform(
        scrollYProgress,
        [0.57, 0.63],
        ['1500%', '4rem']  // Usar porcentaje para centrar inicialmente
    );

    const section10TitleY = useTransform(
        scrollYProgress,
        [0.57, 0.63],
        ['4800%', '4rem']  // Ajustar posición vertical
    );


    const footerY = useTransform(scrollYProgress, [0.79, 0.85], ["100vh", "0vh"]);
    const footerOpacity = useTransform(scrollYProgress, [0.80, 0.85], [0, 1]);



    const formItemsY = Array.from({ length: 8 }).map((_, i) =>
        useTransform(scrollYProgress, [0.61 + (i * 0.02), 0.63 + (i * 0.02)], [50, 0])
    );

    const formItemsOpacity = Array.from({ length: 8 }).map((_, i) =>
        useTransform(scrollYProgress, [0.61 + (i * 0.02), 0.63 + (i * 0.02)], [0, 1])
    );

    const formFields = [
        {
            label: "Name*",
            type: "text",
            placeholder: "Please enter your full name.",
            required: true,
            gridColumn: "1 / 2"
        },
        {
            label: "Email*",
            type: "email",
            placeholder: "Provide a valid email address.",
            required: true,
            gridColumn: "2 / 3"
        },
        {
            label: "Phone number*",
            type: "tel",
            placeholder: "Enter your phone number including area code.",
            required: true,
            gridColumn: "1 / 2"
        },
        {
            label: "Company name*",
            type: "text",
            placeholder: "Enter your company or organization name.",
            required: true,
            gridColumn: "2 / 3"
        },
        {
            label: "Budget*",
            type: "select",
            options: ["$10,000 - $25,000", "$25,000 - $50,000", "$50,000+"],
            placeholder: "Select your budget range",
            required: true,
            gridColumn: "1 / 2"
        },
        {
            label: "Services*",
            type: "select",
            options: ["Web Development", "Mobile App Development", "UI/UX Design", "Digital Marketing"],
            placeholder: "Select required services",
            required: true,
            gridColumn: "2 / 3"
        },
        {
            label: "Message",
            type: "textarea",
            placeholder: "Provide any additional information or project details here.",
            required: false,
            gridColumn: "1 / 3"
        }
    ];


    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false // Add this
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }
    }, [])

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", latest => {
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

    const wordItems = [
        { text: "FROM", delay: 0, className: styles.wordSmall },
        { text: "IDEA", delay: 0.1, className: styles.wordLarge },
        { text: "TO", delay: 0.2, className: styles.wordSmall },
        { text: "DELIVERY", delay: 0.3, className: styles.wordLarge },
        { text: "AND", delay: 0.4, className: styles.wordSmall },
        { text: "BEYOND", delay: 0.5, className: styles.wordLarge }
    ];


    const [showContent, setShowContent] = useState(false);
    const initialCards = serviceCards.slice(0, 4);
    const slidingCards = serviceCards.slice(4);




    return (
        <div ref={containerRef} className={styles.container}>
            {/* Optimizar secciones con animaciones */}
            <motion.div
                className={styles.hero}
                style={{
                    x: xPosition,
                    y: yPosition,
                    scale,
                    translateZ: 0 // Forzar aceleración por hardware
                }}
                transformTemplate={({ scale, x, y }) =>
                    `translateZ(0) translate(${x}, ${y}) scale(${scale})`
                }
                {...motionConfig}
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
                transformTemplate={({ y }) =>
                    `translateZ(0) translate3d(0, ${y}, 0)`
                }
                {...motionConfig}
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
                            style={{
                                x: carouselX,
                                skew: carouselSkew,
                                rotateY: cardRotation
                            }}
                        >
                            {serviceCards.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.serviceCard}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{
                                        transformOrigin: "center center"
                                    }}
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
            <motion.div
                className={styles.section5}
                style={{
                    y: section5Y,
                    opacity: section5Opacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 6
                }}
            >
                <div className={styles.starFieldContainer}>
                    <StarField />
                </div>
                <motion.p
                    className={styles.section5Text}
                    style={{ y: section5TextY }}
                >
                    In a constantly evolving digital world, we transform ideas into fluid and dynamic experiences.
                    We fuse innovation and design to create solutions that adapt naturally to each challenge,
                    driving your business with cutting-edge and frictionless technology.
                </motion.p>
            </motion.div>

            <motion.div
                className={styles.section6}
                style={{
                    y: section6Y,
                    opacity: section6Opacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 7
                }}
            >
                <div className={styles.projectsContainer}>
                    <div className={styles.rotatingBackground}>
                        <div className={`${styles.scrollingBand} ${styles.top}`}>
                            PORTFOLIO SHOWCASE PORTFOLIO SHOWCASE PORTFOLIO SHOWCASE&nbsp;
                            PORTFOLIO SHOWCASE PORTFOLIO SHOWCASE PORTFOLIO SHOWCASE&nbsp;
                            PORTFOLIO SHOWCASE PORTFOLIO SHOWCASE PORTFOLIO SHOWCASE&nbsp;
                            PORTFOLIO SHOWCASE PORTFOLIO SHOWCASE PORTFOLIO SHOWCASE&nbsp;
                            PORTFOLIO SHOWCASE PORTFOLIO SHOWCASE PORTFOLIO SHOWCASE&nbsp;
                        </div>
                        <div className={`${styles.scrollingBand} ${styles.bottom}`}>
                            CREATIVE WORKS CREATIVE WORKS CREATIVE WORKS&nbsp;
                            CREATIVE WORKS CREATIVE WORKS CREATIVE WORKS&nbsp;
                            CREATIVE WORKS CREATIVE WORKS CREATIVE WORKS&nbsp;
                            CREATIVE WORKS CREATIVE WORKS CREATIVE WORKS&nbsp;
                            CREATIVE WORKS CREATIVE WORKS CREATIVE WORKS&nbsp;


                        </div>
                    </div>
                    <h2 className={styles.projectsHeading}>
                        Our Featured Projects
                    </h2>
                </div>
            </motion.div>
            <motion.div
                className={styles.section7}
                style={{
                    y: section7Y,
                    opacity: section7Opacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 8
                }}
            >
                <motion.div
                    className={styles.projectsShowcase}
                    style={{
                        opacity: useTransform(section7FullScreen, [0, 1], [1, 0])
                    }}
                >

                    {projectItems.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.projectCard}
                            style={{ backgroundColor: project.color }}
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    delay: index * 0.2,
                                    duration: 0.8,
                                    ease: "easeOut"
                                }
                            }}
                        >
                            <motion.div
                                className={styles.projectImage}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={project.image} alt={project.title} />
                            </motion.div>
                            <motion.h3
                                className={styles.projectTitle}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: { delay: 0.3 + index * 0.2 }
                                }}
                            >
                                {project.title}
                            </motion.h3>
                            <motion.p
                                className={styles.projectDescription}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: { delay: 0.4 + index * 0.2 }
                                }}
                            >

                            </motion.p>
                            <div className={styles.projectTags}>
                                {project.tags.map((tag, idx) => (
                                    <motion.span
                                        key={idx}
                                        className={styles.tag}
                                        initial={{ scale: 0 }}
                                        whileInView={{
                                            scale: 1,
                                            transition: {
                                                delay: 0.5 + idx * 0.1 + index * 0.2
                                            }
                                        }}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className={styles.projectsFullscreen}
                    style={{
                        opacity: section7FullScreen
                    }}
                >
                    {projectItems.map((project, index) => (
                        <motion.div
                            key={index}
                            className={styles.projectFullView}
                            style={{
                                opacity: useTransform(
                                    projectIndex,
                                    [index - 0.5, index, index + 0.5],
                                    [0, 1, 0]
                                ),
                                scale: useTransform(
                                    projectIndex,
                                    [index - 0.5, index, index + 0.5],
                                    [0.8, 1, 0.8]
                                ),
                                backgroundColor: project.color
                            }}
                        >
                            <div className={styles.projectContent}>
                                <motion.h2>{project.title}</motion.h2>
                                <motion.p>{project.description}</motion.p>
                                <motion.div className={styles.projectImage}>
                                    <img src={project.image} alt={project.title} />
                                </motion.div>
                                <div className={styles.projectTags}>
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className={styles.tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div
                className={styles.section8}
                style={{
                    y: section8Y,
                    translateY: section8Exit, // Add this
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 9
                }}
            >
                <div className={styles.section8Inner}>
                    <motion.div className={styles.leftColumn}>
                        <motion.h1
                            style={{ y: leftTitleY, opacity: leftTitleOpacity }}
                        >
                            Our modes of working
                        </motion.h1>
                    </motion.div>

                    <div className={styles.rightColumn}>
                        {[
                            {
                                title: "Project Basis",
                                text: "The best approach for a one-time project, where the scope is well defined and the deliverables are clear. It is a fixed-price model where the project is delivered within a specific timeline and budget."
                            },
                            {
                                title: "Monthly Retainer",
                                text: "Ideal for ongoing projects that require continuous support and maintenance. It is a flexible model where you can hire our team on a monthly basis to work on your project."
                            },
                            {
                                title: "Consultation",
                                text: "We provide consultation services to help you make informed decisions about your technology stack, architecture, and development process."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.rightItem}
                                style={{
                                    y: rightItems[index],
                                    opacity: rightItemsOpacity[index]
                                }}
                            >
                                <div className={styles.titleContainer}>
                                    <h3>{item.title}</h3>
                                    <motion.span
                                        className={styles.arrow}
                                        whileHover={{ x: 10 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        →
                                    </motion.span>
                                </div>
                                <p>{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div
                className={styles.section9}
                style={{
                    y: section9Y,
                    opacity: section9Opacity, position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 11
                }}
            >
                <div className={styles.wordContainer}>
                    {wordItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.word} ${item.className}`}
                            initial={{
                                rotateX: 90,
                                y: 100,
                                opacity: 0,
                                z: -100
                            }}
                            whileInView={{
                                rotateX: 0,
                                y: 0,
                                opacity: 1,
                                z: 0,
                                transition: {
                                    duration: 1.2,
                                    delay: index * 0.15,
                                    ease: [0.25, 0.1, 0.25, 1],
                                    opacity: { duration: 0.8 }
                                }
                            }}
                        >
                            {item.text}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <motion.div
                className={styles.section10}
                style={{
                    y: section10Y,
                    opacity: section10Opacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: showContent ? 12 : -1, // Only show when active
                    background: '#fff',
                    pointerEvents: showContent ? 'auto' : 'none',
                }}
            >
                <motion.div
                    className={styles.formContainer}
                    style={{
                        opacity: section10Opacity
                    }}
                >
                    <motion.h1
                        className={styles.formTitle}
                        style={{
                            scale: section10TitleScale,
                            rotate: section10TitleRotate,
                            x: section10TitleX,
                            y: section10TitleY,
                            transformOrigin: "left center",
                        }}
                    >
                        Let's<br />Connect
                    </motion.h1>

                    <form className={styles.contactForm}>
                        {formFields.map((field, index) => (
                            <motion.div
                                key={index}
                                className={styles.formGroup}
                                style={{
                                    y: formItemsY[index],
                                    opacity: formItemsOpacity[index],
                                    gridColumn: field.gridColumn
                                }}
                            >
                                <label>{field.label}</label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        rows={5}
                                    />
                                ) : field.type === 'select' ? (
                                    <select required={field.required}>
                                        <option value="">{field.placeholder}</option>
                                        {field.options.map((option, i) => (
                                            <option key={i} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </form>
                </motion.div>
            </motion.div>
            // Update footer section in Home.jsx
            <motion.div className={styles.footerSection}
                style={{
                    y: footerY,
                    opacity: footerOpacity,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 13,
                    background: '#000'
                }}
            >
                <div className={styles.footerInner}>
                    <div className={styles.footerMainContent}>
                        {/* Company Identity */}
                        <div className={styles.footerBrand}>
                            <h2>END</h2>
                            <p className={styles.slogan}>Innovación y tecnología a tu alcance</p>
                            <div className={styles.socialLinks}>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                                <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-behance"></i>
                                </a>
                            </div>
                        </div>

                        {/* Navigation Columns */}
                        <div className={styles.footerNavigation}>
                            <div className={styles.footerColumn}>
                                <h3>Empresa</h3>
                                <a href="#">Sobre nosotros</a>
                                <a href="#">Nuestro equipo</a>
                                <a href="#">Blog</a>
                            </div>
                            <div className={styles.footerColumn}>
                                <h3>Servicios</h3>
                                <a href="#">Desarrollo Web</a>
                                <a href="#">Desarrollo Móvil</a>
                                <a href="#">Consultoría TI</a>
                                <a href="#">UI/UX Design</a>
                            </div>
                            <div className={styles.footerColumn}>
                                <h3>Recursos</h3>
                                <a href="#">Casos de éxito</a>
                                <a href="#">FAQs</a>
                                <a href="#">Documentación</a>
                            </div>
                            <div className={styles.footerColumn}>
                                <h3>Contacto</h3>
                                <a href="#">soporte@end.solutions</a>
                                <a href="#">+51 999 888 777</a>
                                <a href="#">Ubicación</a>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className={styles.footerNewsletter}>
                            <h3>Newsletter</h3>
                            <p>Suscríbete para recibir las últimas noticias y tendencias tecnológicas</p>
                            <div className={styles.newsletterForm}>
                                <input type="email" placeholder="Tu correo electrónico" />
                                <button>Suscribirse</button>
                            </div>
                        </div>
                    </div>

                    {/* Legal Section */}
                    <div className={styles.footerLegal}>
                        <div className={styles.legalLinks}>
                            <a href="#">Términos y condiciones</a>
                            <span>|</span>
                            <a href="#">Política de privacidad</a>
                        </div>
                        <p className={styles.copyright}>
                            © {new Date().getFullYear()} End Solutions. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

    );
}