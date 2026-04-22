"use client";

import { Menu, ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { SearchModal } from "@/components/site/SearchModal";

import { Navbar, NavbarCenter, NavbarLeft, NavbarRight } from "@/components/ui/navbar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MEGA_SECTIONS } from "@/data/megaNav";

export function Nav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  // Hide nav on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastY = lastScrollYRef.current;

      if (currentScrollY < lastY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastY && currentScrollY > 50) {
        setIsVisible(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut for search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const keepHomepageNav = pathname === "/";

  return (
    <>
      {/* Apple-style curtain */}
      <div className={`nav-curtain ${megaMenuOpen ? 'open' : ''}`} />

      <header
        className={`fixed top-0 z-50 w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className={`absolute inset-0 ${keepHomepageNav ? "backdrop-blur-[12px] bg-white/[0.68]" : "backdrop-blur-[18px] bg-white/[0.88] shadow-[0_8px_30px_rgba(35,16,16,0.08)]"}`} />
        {/* White fill — fades in when mega menu opens */}
        <div className={`absolute inset-0 bg-white transition-opacity duration-300 ease-out ${megaMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute inset-0 border-b ${keepHomepageNav ? "border-black/[0.06]" : "border-black/[0.08]"} transition-opacity duration-300 ease-out ${megaMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
      <div className="relative mx-auto w-full px-4 sm:px-6 md:px-12">
        <Navbar className="py-3">
          <NavbarLeft>
            <Link href="/" className="inline-flex items-center gap-3 py-1.5 transition-all duration-300 ease-in-out focus:outline-none rounded-[10px] hover:bg-black/5">
              <div className="hidden lg:block">
                <Image
                  src="/tiger-horizontal-logo.png"
                  alt="Tiger BioSciences"
                  width={1318}
                  height={355}
                  priority
                  className="h-auto w-[220px] xl:w-[244px]"
                />
              </div>

              <div className="relative size-10 lg:hidden">
                <Image
                  src="/tiger-circle-logo.png"
                  alt="Tiger BioSciences"
                  fill
                  sizes="40px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-start leading-none uppercase lg:hidden">
                <span className="font-[Neuropa] font-medium text-[16px] tracking-[-0.4px] whitespace-nowrap logo-shimmer">Tiger BioSciences</span>
                <span className="font-[Archivo] font-medium text-[8px] tracking-[-0.4px] -mt-0.5 text-[#231010]">&trade;</span>
              </div>
            </Link>
          </NavbarLeft>

          {/* Desktop Navigation with Shadcn NavigationMenu */}
          <NavbarCenter className="hidden lg:flex">
            <NavigationMenu onValueChange={(value) => setMegaMenuOpen(!!value)}>
              <NavigationMenuList>
                {MEGA_SECTIONS.map((section) => (
                  <NavigationMenuItem key={section.id}>
                    <NavigationMenuTrigger className="font-sans text-[13px] font-light tracking-[0.35px] h-[36px] rounded-[10px] transition-[background-color] duration-[0.25s] ease-[ease] text-[#231010] hover:!text-[#231010] hover:bg-black/[0.03]">
                      {section.id === "company" ? "Company" : section.id === "expertise" ? "Expertise" : section.id === "science" ? "Science" : "Products"}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className={`w-full bg-white ${megaMenuOpen ? 'flyout-open' : ''}`} style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
                        <div className="container mx-auto max-w-7xl px-6 md:px-12 py-10 lg:pl-[18rem] xl:pl-[20rem]">
                          <div className="grid grid-cols-[1fr_380px] gap-12">
                            {/* Left side: Navigation groups */}
                            <div className="grid grid-cols-2 gap-x-12 gap-y-8 content-start">
                          {section.groups.map((group, gi) => (
                            <div key={group.title} className="space-y-3">
                              <div className="flyout-item font-sans text-[11px] font-medium tracking-[2px] text-[#231010]/30 uppercase" data-delay={gi * 2 + 1}>
                                {group.title}
                              </div>
                              <ul className="space-y-1">
                                {group.items.map((item, ii) => (
                                  <li key={item.label}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        href={item.href}
                                        className="flyout-item font-body block text-[13.5px] font-light text-[#231010] hover:text-[#231010] px-3 py-1.5 -mx-3 rounded-[8px] hover:bg-black/[0.03] transition-[color,background-color] duration-200 ease-in-out"
                                        data-delay={Math.min(gi * 2 + ii + 2, 10)}
                                      >
                                        {item.label}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Right side: Featured card */}
                        <Link
                          href={section.id === "products" ? "/products" : section.feature.cta.href}
                          className="relative flex min-h-[280px] overflow-hidden rounded-[16px] group bg-[linear-gradient(180deg,#fbf7f2_0%,#f2ebe2_100%)] transition-transform duration-300 hover:scale-[1.01]"
                          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)" }}
                        >
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(140,29,24,0.08),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(35,16,16,0.06),transparent_38%)]" />
                          <div className="relative flex w-full flex-col justify-between p-7">
                            <div className="space-y-4">
                              <span className="font-sans inline-flex items-center rounded-full border border-[#8C1D18]/14 bg-[#8C1D18]/8 px-3 py-1 text-[10px] font-medium tracking-[2px] text-[#8C1D18] uppercase">
                                {section.feature.badge}
                              </span>
                              <div className="h-px w-14 bg-[#231010]/10" />
                              <h3 className="max-w-[14ch] font-display text-[28px] font-light leading-[1.02] tracking-[-0.7px] text-[#231010]">
                                {section.feature.title}
                              </h3>
                              <p className="max-w-[30ch] font-body text-[13px] leading-[1.65] text-[#231010]/68">
                                {section.feature.body}
                              </p>
                            </div>
                            <div className="inline-flex items-center gap-2 font-body text-[13px] font-medium text-[#231010] transition-all duration-200 ease-in-out group-hover:translate-x-1">
                              {section.feature.cta.label} <span aria-hidden>→</span>
                            </div>
                          </div>
                        </Link>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/people" className="font-sans group inline-flex h-[36px] w-max items-center justify-center rounded-[10px] px-4 py-2 text-[12.8px] font-light tracking-[0.35px] transition-[background-color] duration-[0.25s] ease-[ease] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1a44ea] focus-visible:ring-offset-2 text-[#231010] hover:!text-[#231010] hover:bg-black/[0.03]">
                      People
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/press" className="font-sans group inline-flex h-[36px] w-max items-center justify-center rounded-[10px] px-4 py-2 text-[12.8px] font-light tracking-[0.35px] transition-[background-color] duration-[0.25s] ease-[ease] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1a44ea] focus-visible:ring-offset-2 text-[#231010] hover:!text-[#231010] hover:bg-black/[0.03]">
                      Press Room
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className="font-sans group inline-flex h-[36px] w-max items-center justify-center rounded-[10px] px-4 py-2 text-[12.8px] font-light tracking-[0.35px] transition-[background-color] duration-[0.25s] ease-[ease] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1a44ea] focus-visible:ring-offset-2 text-[#231010] hover:!text-[#231010] hover:bg-black/[0.03]">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </NavbarCenter>

          <NavbarRight>
            <div className="flex items-center gap-3">
              {/* Search button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="group inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-[100px] border border-[#231010]/25 bg-[#231010]/5 px-4 py-2 transition-all duration-300 ease-in-out focus:outline-hidden text-[#231010] hover:bg-[#231010]/10"
                aria-label="Search"
              >
                <Search className="size-4" />
                <span className="hidden sm:inline font-sans text-[10.7px] font-light tracking-[0.3px]">Search</span>
              </button>

              {/* Mobile menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-[8px] p-2.5 transition-all duration-200 ease-in-out focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1a44ea] text-[#231010] hover:bg-black/5"
                  >
                    <span className="sr-only">Open main menu</span>
                    <Menu className="size-6" aria-hidden="true" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-md bg-white border-l border-black/[0.04] p-8 overflow-y-auto">
                  <div className="absolute top-6 right-6 z-10">
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 text-[#231010]/40 hover:text-[#231010] transition-colors"
                      aria-label="Close menu"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  <SheetHeader className="border-b-[0.5px] border-black/[0.06] pb-6">
                    <SheetTitle className="font-sans font-light text-[#231010] text-left text-base tracking-tight uppercase">
                      <Link href="/" onClick={() => setMobileMenuOpen(false)} className="">
                        Tiger BioSciences<sup className="text-[0.5em] -top-1.5">™</sup>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <nav className="mt-10">
                    <div className="space-y-6">
                      {MEGA_SECTIONS.map((section) => (
                        <div key={section.id} className="border-b border-black/[0.06] last:border-0">
                          <button
                            onClick={() => setExpandedMobileSection(expandedMobileSection === section.id ? null : section.id)}
                            className="w-full flex items-center justify-between py-4 text-left"
                          >
                            <span className="font-sans text-xl font-light text-[#231010] capitalize">
                              {section.id === "company" ? "Company" : section.id === "expertise" ? "Expertise" : section.id === "science" ? "Science" : "Products"}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-[#231010]/30 transition-transform duration-300 ${
                                expandedMobileSection === section.id ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {expandedMobileSection === section.id && (
                            <div className="pb-6 space-y-6">
                              {section.groups.map((group) => (
                                <div key={group.title} className="space-y-3">
                                  <div className="text-xs font-light tracking-wide text-[#231010]/40 uppercase">
                                    {group.title}
                                  </div>
                                  <div className="space-y-2">
                                    {group.items.map((item) => (
                                      <Link
                                        key={item.label}
                                        href={item.href}
                                        className="block text-base font-light text-[#231010]/70 hover:text-[#231010] transition-colors "
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {item.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                      {/* People link */}
                      <Link
                        href="/people"
                        className="font-sans block py-4 text-xl font-light text-[#231010]/70 hover:text-[#231010] transition-all duration-300 "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        People
                      </Link>

                      {/* Press Room link */}
                      <Link
                        href="/press"
                        className="font-sans block py-4 text-xl font-light text-[#231010]/70 hover:text-[#231010] transition-all duration-300 "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Press Room
                      </Link>

                      <Link
                        href="/contact"
                        className="font-sans block py-4 text-xl font-light text-[#231010]/70 hover:text-[#231010] transition-all duration-300 "
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </NavbarRight>
        </Navbar>
      </div>
    </header>

    {/* Search Modal */}
    <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
