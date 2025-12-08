(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Palura website/app/components/ClickSpark.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Palura website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Palura website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ClickSpark = ({ sparkColor = '#fff', sparkSize = 10, sparkRadius = 15, sparkCount = 8, duration = 400, easing = 'ease-out', extraScale = 1.0, children })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sparksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const startTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClickSpark.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const parent = canvas.parentElement;
            if (!parent) return;
            let resizeTimeout;
            const resizeCanvas = {
                "ClickSpark.useEffect.resizeCanvas": ()=>{
                    const { width, height } = parent.getBoundingClientRect();
                    if (canvas.width !== width || canvas.height !== height) {
                        canvas.width = width;
                        canvas.height = height;
                    }
                }
            }["ClickSpark.useEffect.resizeCanvas"];
            const handleResize = {
                "ClickSpark.useEffect.handleResize": ()=>{
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(resizeCanvas, 100);
                }
            }["ClickSpark.useEffect.handleResize"];
            const ro = new ResizeObserver(handleResize);
            ro.observe(parent);
            resizeCanvas();
            return ({
                "ClickSpark.useEffect": ()=>{
                    ro.disconnect();
                    clearTimeout(resizeTimeout);
                }
            })["ClickSpark.useEffect"];
        }
    }["ClickSpark.useEffect"], []);
    const easeFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ClickSpark.useCallback[easeFunc]": (t)=>{
            switch(easing){
                case 'linear':
                    return t;
                case 'ease-in':
                    return t * t;
                case 'ease-in-out':
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                default:
                    return t * (2 - t);
            }
        }
    }["ClickSpark.useCallback[easeFunc]"], [
        easing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClickSpark.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let animationId;
            const draw = {
                "ClickSpark.useEffect.draw": (timestamp)=>{
                    if (!startTimeRef.current) {
                        startTimeRef.current = timestamp;
                    }
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    sparksRef.current = sparksRef.current.filter({
                        "ClickSpark.useEffect.draw": (spark)=>{
                            const elapsed = timestamp - spark.startTime;
                            if (elapsed >= duration) {
                                return false;
                            }
                            const progress = elapsed / duration;
                            const eased = easeFunc(progress);
                            const distance = eased * sparkRadius * extraScale;
                            const lineLength = sparkSize * (1 - eased);
                            const x1 = spark.x + distance * Math.cos(spark.angle);
                            const y1 = spark.y + distance * Math.sin(spark.angle);
                            const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
                            const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);
                            ctx.strokeStyle = sparkColor;
                            ctx.lineWidth = 2;
                            ctx.beginPath();
                            ctx.moveTo(x1, y1);
                            ctx.lineTo(x2, y2);
                            ctx.stroke();
                            return true;
                        }
                    }["ClickSpark.useEffect.draw"]);
                    animationId = requestAnimationFrame(draw);
                }
            }["ClickSpark.useEffect.draw"];
            animationId = requestAnimationFrame(draw);
            return ({
                "ClickSpark.useEffect": ()=>{
                    cancelAnimationFrame(animationId);
                }
            })["ClickSpark.useEffect"];
        }
    }["ClickSpark.useEffect"], [
        sparkColor,
        sparkSize,
        sparkRadius,
        sparkCount,
        duration,
        easeFunc,
        extraScale
    ]);
    const handleClick = (e)=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const now = performance.now();
        const newSparks = Array.from({
            length: sparkCount
        }, (_, i)=>({
                x,
                y,
                angle: 2 * Math.PI * i / sparkCount,
                startTime: now
            }));
        sparksRef.current.push(...newSparks);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            width: '100%',
            height: '100%'
        },
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    userSelect: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/Palura website/app/components/ClickSpark.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Palura website/app/components/ClickSpark.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ClickSpark, "Co5ZLok9jWEvDtYfE8EPujoRllo=");
_c = ClickSpark;
const __TURBOPACK__default__export__ = ClickSpark;
var _c;
__turbopack_context__.k.register(_c, "ClickSpark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Palura website/app/components/Typewriter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Palura website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Palura website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Palura website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const Typewriter = ({ text, speed = 30, className = '' })=>{
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Typewriter.useEffect": ()=>{
            if (currentIndex < text.length) {
                const timeout = setTimeout({
                    "Typewriter.useEffect.timeout": ()=>{
                        setDisplayedText({
                            "Typewriter.useEffect.timeout": (prev)=>prev + text[currentIndex]
                        }["Typewriter.useEffect.timeout"]);
                        setCurrentIndex({
                            "Typewriter.useEffect.timeout": (prev)=>prev + 1
                        }["Typewriter.useEffect.timeout"]);
                    }
                }["Typewriter.useEffect.timeout"], speed);
                return ({
                    "Typewriter.useEffect": ()=>clearTimeout(timeout)
                })["Typewriter.useEffect"];
            }
        }
    }["Typewriter.useEffect"], [
        currentIndex,
        text,
        speed
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        children: [
            displayedText,
            currentIndex < text.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                animate: {
                    opacity: [
                        1,
                        0
                    ]
                },
                transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse'
                },
                className: "inline-block",
                children: "|"
            }, void 0, false, {
                fileName: "[project]/Palura website/app/components/Typewriter.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Palura website/app/components/Typewriter.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Typewriter, "4p+UW4yKA08vspvaIMFg+MJxO3w=");
_c = Typewriter;
const __TURBOPACK__default__export__ = Typewriter;
var _c;
__turbopack_context__.k.register(_c, "Typewriter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Palura website/app/components/BlurText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Palura website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'motion/react'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Palura website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const buildKeyframes = (from, steps)=>{
    const keys = new Set([
        ...Object.keys(from),
        ...steps.flatMap((s)=>Object.keys(s))
    ]);
    const keyframes = {};
    keys.forEach((k)=>{
        keyframes[k] = [
            from[k],
            ...steps.map((s)=>s[k])
        ];
    });
    return keyframes;
};
const BlurText = ({ text = '', delay = 200, className = '', animateBy = 'words', direction = 'top', threshold = 0.1, rootMargin = '0px', animationFrom, animationTo, easing = (t)=>t, onAnimationComplete, stepDuration = 0.35 })=>{
    _s();
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlurText.useEffect": ()=>{
            if (!ref.current) return;
            const observer = new IntersectionObserver({
                "BlurText.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.unobserve(ref.current);
                    }
                }
            }["BlurText.useEffect"], {
                threshold,
                rootMargin
            });
            observer.observe(ref.current);
            return ({
                "BlurText.useEffect": ()=>observer.disconnect()
            })["BlurText.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["BlurText.useEffect"], [
        threshold,
        rootMargin
    ]);
    const defaultFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BlurText.useMemo[defaultFrom]": ()=>direction === 'top' ? {
                filter: 'blur(10px)',
                opacity: 0,
                y: -50
            } : {
                filter: 'blur(10px)',
                opacity: 0,
                y: 50
            }
    }["BlurText.useMemo[defaultFrom]"], [
        direction
    ]);
    const defaultTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BlurText.useMemo[defaultTo]": ()=>[
                {
                    filter: 'blur(5px)',
                    opacity: 0.5,
                    y: direction === 'top' ? 5 : -5
                },
                {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0
                }
            ]
    }["BlurText.useMemo[defaultTo]"], [
        direction
    ]);
    const fromSnapshot = animationFrom ?? defaultFrom;
    const toSnapshots = animationTo ?? defaultTo;
    const stepCount = toSnapshots.length + 1;
    const totalDuration = stepDuration * (stepCount - 1);
    const times = Array.from({
        length: stepCount
    }, (_, i)=>stepCount === 1 ? 0 : i / (stepCount - 1));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: className,
        style: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        children: elements.map((segment, index)=>{
            const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
            const spanTransition = {
                duration: totalDuration,
                times,
                delay: index * delay / 1000
            };
            spanTransition.ease = easing;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
                className: "inline-block will-change-[transform,filter,opacity]",
                initial: fromSnapshot,
                animate: inView ? animateKeyframes : fromSnapshot,
                transition: spanTransition,
                onAnimationComplete: index === elements.length - 1 ? onAnimationComplete : undefined,
                children: [
                    segment === ' ' ? '\u00A0' : segment,
                    animateBy === 'words' && index < elements.length - 1 && '\u00A0'
                ]
            }, index, true, {
                fileName: "[project]/Palura website/app/components/BlurText.tsx",
                lineNumber: 100,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/Palura website/app/components/BlurText.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BlurText, "IxnOfDOifNR2DM+0TATKkPR86iM=");
_c = BlurText;
const __TURBOPACK__default__export__ = BlurText;
var _c;
__turbopack_context__.k.register(_c, "BlurText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Palura website/app/components/PillNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Palura website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Palura website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Palura website/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Palura website/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const PillNav = ({ logo, logoAlt = 'Logo', items, activeHref, className = '', ease = 'power3.easeOut', baseColor = '#fff', pillColor = '#060010', hoveredPillTextColor = '#060010', pillTextColor, onMobileMenuClick, initialLoadAnimation = true })=>{
    _s();
    const resolvedPillTextColor = pillTextColor ?? baseColor;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const circleRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const tlRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const activeTweenRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const logoImgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoTweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hamburgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileMenuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const navItemsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PillNav.useEffect": ()=>{
            const layout = {
                "PillNav.useEffect.layout": ()=>{
                    circleRefs.current.forEach({
                        "PillNav.useEffect.layout": (circle)=>{
                            if (!circle?.parentElement) return;
                            const pill = circle.parentElement;
                            const rect = pill.getBoundingClientRect();
                            const { width: w, height: h } = rect;
                            const R = (w * w / 4 + h * h) / (2 * h);
                            const D = Math.ceil(2 * R) + 2;
                            const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - w * w / 4))) + 1;
                            const originY = D - delta;
                            circle.style.width = `${D}px`;
                            circle.style.height = `${D}px`;
                            circle.style.bottom = `-${delta}px`;
                            __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(circle, {
                                xPercent: -50,
                                scale: 0,
                                transformOrigin: `50% ${originY}px`
                            });
                            const label = pill.querySelector('.pill-label');
                            const white = pill.querySelector('.pill-label-hover');
                            if (label) __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(label, {
                                y: 0
                            });
                            if (white) __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(white, {
                                y: h + 12,
                                opacity: 0
                            });
                            const index = circleRefs.current.indexOf(circle);
                            if (index === -1) return;
                            tlRefs.current[index]?.kill();
                            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                                paused: true
                            });
                            tl.to(circle, {
                                scale: 1.2,
                                xPercent: -50,
                                duration: 2,
                                ease,
                                overwrite: 'auto'
                            }, 0);
                            if (label) {
                                tl.to(label, {
                                    y: -(h + 8),
                                    duration: 2,
                                    ease,
                                    overwrite: 'auto'
                                }, 0);
                            }
                            if (white) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(white, {
                                    y: Math.ceil(h + 100),
                                    opacity: 0
                                });
                                tl.to(white, {
                                    y: 0,
                                    opacity: 1,
                                    duration: 2,
                                    ease,
                                    overwrite: 'auto'
                                }, 0);
                            }
                            tlRefs.current[index] = tl;
                        }
                    }["PillNav.useEffect.layout"]);
                }
            }["PillNav.useEffect.layout"];
            layout();
            const onResize = {
                "PillNav.useEffect.onResize": ()=>layout()
            }["PillNav.useEffect.onResize"];
            window.addEventListener('resize', onResize);
            if (document.fonts?.ready) {
                document.fonts.ready.then(layout).catch({
                    "PillNav.useEffect": ()=>{}
                }["PillNav.useEffect"]);
            }
            const menu = mobileMenuRef.current;
            if (menu) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu, {
                    visibility: 'hidden',
                    opacity: 0,
                    scaleY: 1
                });
            }
            if (initialLoadAnimation) {
                const logoEl = logoRef.current;
                const navItems = navItemsRef.current;
                if (logoEl) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(logoEl, {
                        scale: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(logoEl, {
                        scale: 1,
                        duration: 0.6,
                        ease
                    });
                }
                if (navItems) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(navItems, {
                        width: 0,
                        overflow: 'hidden'
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(navItems, {
                        width: 'auto',
                        duration: 0.6,
                        ease
                    });
                }
            }
            return ({
                "PillNav.useEffect": ()=>window.removeEventListener('resize', onResize)
            })["PillNav.useEffect"];
        }
    }["PillNav.useEffect"], [
        items,
        ease,
        initialLoadAnimation
    ]);
    const handleEnter = (i)=>{
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
            duration: 0.3,
            ease,
            overwrite: 'auto'
        });
    };
    const handleLeave = (i)=>{
        const tl = tlRefs.current[i];
        if (!tl) return;
        activeTweenRefs.current[i]?.kill();
        activeTweenRefs.current[i] = tl.tweenTo(0, {
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };
    const handleLogoEnter = ()=>{
        const img = logoImgRef.current;
        if (!img) return;
        logoTweenRef.current?.kill();
        __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(img, {
            rotate: 0
        });
        logoTweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(img, {
            rotate: 360,
            duration: 0.2,
            ease,
            overwrite: 'auto'
        });
    };
    const toggleMobileMenu = ()=>{
        const newState = !isMobileMenuOpen;
        setIsMobileMenuOpen(newState);
        const hamburger = hamburgerRef.current;
        const menu = mobileMenuRef.current;
        if (hamburger) {
            const lines = hamburger.querySelectorAll('.hamburger-line');
            if (newState) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[0], {
                    rotation: 45,
                    y: 3,
                    duration: 0.3,
                    ease
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[1], {
                    rotation: -45,
                    y: -3,
                    duration: 0.3,
                    ease
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[0], {
                    rotation: 0,
                    y: 0,
                    duration: 0.3,
                    ease
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(lines[1], {
                    rotation: 0,
                    y: 0,
                    duration: 0.3,
                    ease
                });
            }
        }
        if (menu) {
            if (newState) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu, {
                    visibility: 'visible'
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1
                }, {
                    opacity: 1,
                    y: 0,
                    scaleY: 1,
                    duration: 0.3,
                    ease,
                    transformOrigin: 'top center'
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(menu, {
                    opacity: 0,
                    y: 10,
                    scaleY: 1,
                    duration: 0.2,
                    ease,
                    transformOrigin: 'top center',
                    onComplete: ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(menu, {
                            visibility: 'hidden'
                        });
                    }
                });
            }
        }
        onMobileMenuClick?.();
    };
    const isExternalLink = (href)=>href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#');
    const isRouterLink = (href)=>href && !isExternalLink(href);
    const cssVars = {
        ['--base']: baseColor,
        ['--pill-bg']: pillColor,
        ['--hover-text']: hoveredPillTextColor,
        ['--pill-text']: resolvedPillTextColor
    };
    const renderLogo = ()=>{
        if (typeof logo === 'string') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: logo,
                alt: logoAlt,
                ref: logoImgRef
            }, void 0, false, {
                fileName: "[project]/Palura website/app/components/PillNav.tsx",
                lineNumber: 244,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        return logo || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "pill-logo-text",
            children: "PALURA"
        }, void 0, false, {
            fileName: "[project]/Palura website/app/components/PillNav.tsx",
            lineNumber: 246,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pill-nav-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `pill-nav ${className}`,
                "aria-label": "Primary",
                style: cssVars,
                children: [
                    isRouterLink(items?.[0]?.href) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "pill-logo",
                        href: items[0].href,
                        "aria-label": "Home",
                        onMouseEnter: handleLogoEnter,
                        role: "menuitem",
                        ref: logoRef,
                        children: renderLogo()
                    }, void 0, false, {
                        fileName: "[project]/Palura website/app/components/PillNav.tsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "pill-logo",
                        href: items?.[0]?.href || '#',
                        "aria-label": "Home",
                        onMouseEnter: handleLogoEnter,
                        ref: logoRef,
                        children: renderLogo()
                    }, void 0, false, {
                        fileName: "[project]/Palura website/app/components/PillNav.tsx",
                        lineNumber: 264,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pill-nav-items desktop-only",
                        ref: navItemsRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "pill-list",
                            role: "menubar",
                            children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    role: "none",
                                    children: isRouterLink(item.href) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        role: "menuitem",
                                        href: item.href,
                                        className: `pill${activeHref === item.href ? ' is-active' : ''}`,
                                        "aria-label": item.ariaLabel || item.label,
                                        onMouseEnter: ()=>handleEnter(i),
                                        onMouseLeave: ()=>handleLeave(i),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hover-circle",
                                                "aria-hidden": "true",
                                                ref: (el)=>{
                                                    circleRefs.current[i] = el;
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                                lineNumber: 288,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label-stack",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pill-label",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pill-label-hover",
                                                        "aria-hidden": "true",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                                lineNumber: 295,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                        lineNumber: 280,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        role: "menuitem",
                                        href: item.href,
                                        className: `pill${activeHref === item.href ? ' is-active' : ''}`,
                                        "aria-label": item.ariaLabel || item.label,
                                        onMouseEnter: ()=>handleEnter(i),
                                        onMouseLeave: ()=>handleLeave(i),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "hover-circle",
                                                "aria-hidden": "true",
                                                ref: (el)=>{
                                                    circleRefs.current[i] = el;
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                                lineNumber: 311,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "label-stack",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pill-label",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pill-label-hover",
                                                        "aria-hidden": "true",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                                lineNumber: 318,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                        lineNumber: 303,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, item.href || `item-${i}`, false, {
                                    fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                    lineNumber: 278,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Palura website/app/components/PillNav.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Palura website/app/components/PillNav.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mobile-menu-button mobile-only",
                        onClick: toggleMobileMenu,
                        "aria-label": "Toggle menu",
                        ref: hamburgerRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hamburger-line"
                            }, void 0, false, {
                                fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hamburger-line"
                            }, void 0, false, {
                                fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Palura website/app/components/PillNav.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Palura website/app/components/PillNav.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-menu-popover mobile-only",
                ref: mobileMenuRef,
                style: cssVars,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mobile-menu-list",
                    children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: isRouterLink(item.href) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: `mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`,
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                lineNumber: 347,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Palura__website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                className: `mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`,
                                onClick: ()=>setIsMobileMenuOpen(false),
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/Palura website/app/components/PillNav.tsx",
                                lineNumber: 355,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, item.href || `mobile-item-${i}`, false, {
                            fileName: "[project]/Palura website/app/components/PillNav.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/Palura website/app/components/PillNav.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Palura website/app/components/PillNav.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Palura website/app/components/PillNav.tsx",
        lineNumber: 250,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PillNav, "j4uiNziWn+3m/kaZPDy9YzlOg6w=");
_c = PillNav;
const __TURBOPACK__default__export__ = PillNav;
var _c;
__turbopack_context__.k.register(_c, "PillNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Palura%20website_app_components_4c25bc59._.js.map