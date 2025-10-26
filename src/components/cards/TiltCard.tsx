"use client";
import React, { useRef, useState } from "react";
import { Card } from "../ui/card";
// No need for ReactDOM.render, this is a component file.

/**
 * Props for the TiltCard component.
 */
interface TiltCardProps {
  /** The content to display inside the card. */
  children: React.ReactNode;
  /** Optional URL for a background image. */
  imageUrl?: string;
  /** Additional CSS classes for the card. */
  className?: string;
}

/**
 * A React component that creates a 3D tilt effect on hover.
 * It can accept custom children or an imageUrl for the background.
 */
export function TiltCard({
  children,
  imageUrl,
  className = "",
}: TiltCardProps) {
  // State to store the card's rotation, typed for x and y numbers
  const [rotation, setRotation] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  // State to track if the mouse is currently hovering over the card
  const [isHovering, setIsHovering] = useState(false);

  // Ref to the card element, typed for an HTMLDivElement
  const cardRef = useRef<HTMLDivElement>(null);

  // Maximum tilt angle in degrees
  const maxTilt = 15;

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset rotation smoothly when mouse leaves
    setRotation({ x: 0, y: 0 });
  };

  // Type the mouse event for the handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Return early if not hovering or ref is not set
    if (!isHovering || !cardRef.current) return;

    // Get card's position and dimensions
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the card's center
    // (mouseX/mouseY) will be from -0.5 to 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Calculate rotation (invert mouseY for natural X rotation)
    const rotateX = -mouseY * maxTilt;
    const rotateY = mouseX * maxTilt;

    setRotation({ x: rotateX, y: rotateY });
  };

  // Dynamic styles for the card's transform and transition
  // Type as React.CSSProperties
  const dynamicStyle: React.CSSProperties = {
    // Apply 3D perspective, rotation, and scale
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${
      rotation.y
    }deg) scale(${isHovering ? 1.05 : 1})`,
    // Apply a fast, linear transition while hovering
    // Apply a slower, easing transition when the mouse leaves
    transition: `transform ${
      isHovering ? "0.1s linear" : "0.5s cubic-bezier(.25,.8,.25,1)"
    }`,
    // Required for child elements to be transformed in 3D space
    transformStyle: "preserve-3d",
  };

  // Dynamic styles for the card's background
  // Type as React.CSSProperties
  const cardBgStyle: React.CSSProperties = imageUrl
    ? {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
      }
    : {};

  // Type the inner style for the content container
  const innerContentStyle: React.CSSProperties = {
    ...cardBgStyle,
    transform: "translateZ(20px)", // Pushes the background slightly forward
  };

  // Type the style for the content wrapper
  const contentWrapperStyle: React.CSSProperties = {
    transform: "translateZ(30px)",
  };

  return (
    // The main card container
    <Card
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={dynamicStyle}
      className={`w-full h-80 min-w-[250px] p-0 m-0 rounded-2xl shadow-2xl ${className}`}
    >
      {/* Inner container for background image and content padding */}
      <div
        style={innerContentStyle}
        className="w-full h-full rounded-2xl flex flex-col justify-center items-center p-6 relative overflow-hidden"
      >
        {/* Adds a dark overlay if an image is used, for text readability */}
        {imageUrl && (
          <div className="absolute inset-0 bg-black/50 rounded-2xl z-0"></div>
        )}

        {/* Content wrapper, pushed further forward for a parallax effect */}
        <div className="relative z-10" style={contentWrapperStyle}>
          {children}
        </div>
      </div>
    </Card>
  );
}
