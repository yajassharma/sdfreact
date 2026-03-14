"use client";

import { useRef, useEffect, useState, useMemo, useId, FC, PointerEvent } from 'react';

interface CurvedLoopProps {
    marqueeText?: string;
    speed?: number;
    className?: string;
    curveAmount?: number;
    direction?: 'left' | 'right';
    interactive?: boolean;
    useIndianFlagTheme?: boolean;
    showRibbon?: boolean;
    ribbonColor?: string;
}

const CurvedLoop: FC<CurvedLoopProps> = ({
    marqueeText = '',
    speed = 2,
    className,
    curveAmount = 400,
    direction = 'left',
    interactive = true,
    useIndianFlagTheme = false,
    showRibbon = false,
    ribbonColor = "#E6C9A8"
}) => {
    const text = useMemo(() => {
        const hasTrailing = /\s|\u00A0$/.test(marqueeText);
        return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
    }, [marqueeText]);

    const measureRef = useRef<SVGTextElement | null>(null);
    const textPathRef = useRef<SVGTextPathElement | null>(null);
    const pathRef = useRef<SVGPathElement | null>(null);
    const [spacing, setSpacing] = useState(0);
    const [offset, setOffset] = useState(0);
    const uid = useId();
    const pathId = `curve-${uid}`;
    const filterId = `shadow-${uid}`;
    const pathD = `M-100,40 Q500,${40 + curveAmount} 1540,40`;

    const dragRef = useRef(false);
    const lastXRef = useRef(0);
    const dirRef = useRef<'left' | 'right'>(direction);
    const velRef = useRef(0);

    const repeatCount = spacing ? Math.ceil(2400 / spacing) + 2 : 1;
    const ready = spacing > 0;

    useEffect(() => {
        if (measureRef.current) setSpacing(measureRef.current.getComputedTextLength());
    }, [text, className]);

    useEffect(() => {
        if (!spacing) return;
        if (textPathRef.current) {
            const initial = -spacing;
            textPathRef.current.setAttribute('startOffset', initial + 'px');
            setOffset(initial);
        }
    }, [spacing]);

    useEffect(() => {
        if (!spacing || !ready) return;
        let frame = 0;
        const step = () => {
            if (!dragRef.current && textPathRef.current) {
                const delta = dirRef.current === 'right' ? speed : -speed;
                const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
                let newOffset = currentOffset + delta;
                const wrapPoint = spacing;
                if (newOffset <= -wrapPoint) newOffset += wrapPoint;
                if (newOffset > 0) newOffset -= wrapPoint;
                textPathRef.current.setAttribute('startOffset', newOffset + 'px');
                setOffset(newOffset);
            }
            frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [spacing, speed, ready]);

    // Segment helper for Indian Flag Theme
    const renderSegments = () => {
        if (!useIndianFlagTheme) return text;

        // Split by the symbol '𖥕' or any separator
        const parts = marqueeText.split(/(𖥕)/);

        return parts.map((part, i) => {
            if (part === '𖥕') {
                return <tspan key={i} fill="#000080">{part}</tspan>;
            }

            const lowerPart = part.trim().toLowerCase();
            let color = "#FFFFFF"; // Default white

            if (lowerPart.includes('india')) color = "#FF9933"; // Saffron
            else if (lowerPart.includes('generation')) color = "#138808"; // Green
            else if (lowerPart.includes('live')) color = "#FF9933"; // Saffron
            else if (lowerPart.includes('platform')) color = "#138808"; // Green
            else if (lowerPart.includes('streaming')) color = "#FFFFFF"; // White
            else if (lowerPart.includes('next')) color = "#FFFFFF"; // White

            return <tspan key={i} fill={color}>{part}</tspan>;
        });
    };

    const renderRepeatedSegments = () => {
        const segments = renderSegments();
        return Array(repeatCount).fill(0).map((_, i) => (
            <tspan key={i}>{segments}{'\u00A0'}</tspan>
        ));
    };

    const onPointerDown = (e: PointerEvent) => {
        if (!interactive) return;
        dragRef.current = true;
        lastXRef.current = e.clientX;
        velRef.current = 0;
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
        if (!interactive || !dragRef.current || !textPathRef.current) return;
        const dx = e.clientX - lastXRef.current;
        lastXRef.current = e.clientX;
        velRef.current = dx;
        const currentOffset = parseFloat(textPathRef.current.getAttribute('startOffset') || '0');
        let newOffset = currentOffset + dx;
        const wrapPoint = spacing;
        if (newOffset <= -wrapPoint) newOffset += wrapPoint;
        if (newOffset > 0) newOffset -= wrapPoint;
        textPathRef.current.setAttribute('startOffset', newOffset + 'px');
        setOffset(newOffset);
    };

    const endDrag = () => {
        if (!interactive) return;
        dragRef.current = false;
        dirRef.current = velRef.current > 0 ? 'right' : 'left';
    };

    const cursorStyle = interactive ? (dragRef.current ? 'grabbing' : 'grab') : 'auto';

    return (
        <div
            className="flex items-center justify-center w-full min-h-[200px]"
            style={{ visibility: ready ? 'visible' : 'hidden', cursor: cursorStyle }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
        >
            <svg
                className="select-none w-full overflow-hidden block aspect-[1440/120] text-[7vw] md:text-[3rem] font-black uppercase leading-none"
                viewBox="0 0 1440 120"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                        <feOffset dx="2" dy="2" result="offsetblur" />
                        <feFlood floodColor="#000" floodOpacity="0.8" result="color" />
                        <feComposite in="color" in2="offsetblur" operator="in" result="shadow" />
                        <feMerge>
                            <feMergeNode in="shadow" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <path ref={pathRef} id={pathId} d={pathD} fill="none" stroke="transparent" />
                </defs>
                {showRibbon && (
                    <path
                        d={pathD}
                        fill="none"
                        stroke={ribbonColor}
                        strokeWidth="100"
                        strokeLinecap="round"
                        className="opacity-15 blur-md"
                    />
                )}
                <text ref={measureRef} xmlSpace="preserve" style={{ visibility: 'hidden', opacity: 0, pointerEvents: 'none' }}>
                    {text}
                </text>
                {ready && (
                    <text
                        xmlSpace="preserve"
                        fill={useIndianFlagTheme ? undefined : '#ffffff'}
                        filter={`url(#${filterId})`}
                    >
                        <textPath ref={textPathRef} href={`#${pathId}`} startOffset={offset + 'px'} xmlSpace="preserve">
                            {useIndianFlagTheme ? renderRepeatedSegments() : Array(repeatCount).fill(text).join('')}
                        </textPath>
                    </text>
                )}
            </svg>
        </div>
    );
};

export default CurvedLoop;
