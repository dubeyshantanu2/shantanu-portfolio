# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Writing / Blog Section**: Added dedicated section (`#writing`) to showcase engineering articles and technical publications.
- **Medium Article Integration**: Added Shantanu's latest post: *How to Give Your Algorithmic Trading System Common Sense Using TypeSafe AI*.
- **Blog Components**: Created `BlogSection` and `BlogCard` components with terminal aesthetic, platform badge, tags, read times, and external link triggers.
- **Medium Social Links & Icons**: Added official Medium SVG icon and links in Navbar, Hero section, and Footer.

### Fixed
- Fixed ESLint explicit `any` error in `src/app/layout.tsx`.
- Fixed ESLint state-in-effect warning in `src/components/ThemeToggle.tsx`.
- Updated ESLint configuration to ignore standalone utility scripts (`generate_pdf.js`).
