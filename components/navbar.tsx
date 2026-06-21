"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { NavItem } from '@/app/types';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './toggleButton';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = ({ naItems }: { naItems: NavItem[] }) => {
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
                buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close menu on Escape key
    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
                buttonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMenuOpen]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav 
            className="w-full py-2.5 flex md:px-16 px-4 justify-between items-center relative"
            role="navigation"
            aria-label="Main navigation"
        >
            {/* Logo - this is a single link, not in the list */}
            <Link 
                href="/" 
                className="font-mono text-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2"
                aria-label="Parham Pazargadi Homepage"
            >
                <span className="text-cyan-600">&lt;</span> 
                parham_pazargadi 
                <span className="text-cyan-600">/&gt;</span>
            </Link>

            {/* Navigation controls */}
            <div className="flex items-center gap-3">
                {/* Theme toggle */}
                <div aria-label="Toggle theme">
                    <ThemeToggle />
                </div>

                {/* Mobile menu button */}
                <Button
                    ref={buttonRef}
                    variant="outline"
                    size="icon"
                    className="cursor-pointer lg:hidden flex relative"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-menu"
                    aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                >
                    {isMenuOpen ? <XIcon /> : <MenuIcon />}
                </Button>
            </div>

            {/* Desktop Navigation */}
            <ul 
                className="hidden lg:flex items-center gap-7 list-none"
                role="list"
                aria-label="Desktop navigation links"
            >
                {naItems.map((item, index) => {
                    const isActive = path === item.href;
                    return (
                        <li 
                            key={index}
                            className="flex flex-col items-center gap-1 relative"
                            role="listitem"
                        >
                            <Link
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1 ${
                                    isActive ? 'text-cyan-400' : 'text-foreground'
                                }`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {item.label}
                            </Link>
                            {/* Active indicator */}
                            <span 
                                className={`${isActive ? 'w-full' : 'w-0'} h-[2.5px] rounded-full bg-cyan-400 transition-all duration-500`}
                                aria-hidden="true"
                            />
                        </li>
                    );
                })}
            </ul>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                    aria-hidden="true"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div 
                        className="fixed top-0 right-0 h-full w-64 bg-background shadow-lg p-6"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation menu"
                    >
                        <div className="flex justify-end">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="Close menu"
                                className="mb-4"
                            >
                                <XIcon />
                            </Button>
                        </div>

                        <ul 
                            ref={menuRef}
                            id="mobile-menu"
                            className="flex flex-col gap-4 list-none"
                            role="list"
                            aria-label="Mobile navigation links"
                        >
                            {naItems.map((item, index) => {
                                const isActive = path === item.href;
                                return (
                                    <li 
                                        key={index}
                                        role="listitem"
                                    >
                                        <Link
                                            href={item.href}
                                            className={`block py-2 px-4 rounded-lg text-lg font-medium transition-colors hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 ${
                                                isActive 
                                                    ? 'bg-cyan-400/10 text-cyan-400' 
                                                    : 'text-foreground'
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                            aria-current={isActive ? 'page' : undefined}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Skip to main content for mobile */}
                        <div className="mt-6 pt-6 border-t border-border">
                            <Link
                                href="#main-content"
                                className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 rounded px-2 py-1"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Skip to main content
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;