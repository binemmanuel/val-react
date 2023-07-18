import { useSpringRef, useTransition, animated } from "@react-spring/web";
import { useEffect, useState } from "react";

const Transition = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(0);

	const onClick = () => setCurrentPage((state) => (state + 1) % 3);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
	const transRef = useSpringRef();

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
	const transitions = useTransition(currentPage, {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		ref: transRef,
		keys: null,
		from: { opacity: 0, transform: "translate3d(100%,0,0)" },
		enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
		leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
	});

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
		transRef.start();
	}, [currentPage, transRef]);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return transitions((children, index) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        const child = children[index];
        
        return <animated.div>{child}</animated.div>;
    });
};
