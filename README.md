Hedamo Assignment – Frontend UI Implementation
Overview

This repository contains a frontend implementation developed as part of an internship assignment for Hedamo. The goal of the project is to demonstrate frontend craftsmanship, visual polish, and thoughtful interaction design while accurately reflecting Hedamo’s core principle of producer-declared disclosure without verification or endorsement.

The implementation prioritizes clarity, restraint, and institutional tone over feature complexity.

Tech Stack

Framework: React

Build Tool: Vite

Styling: Tailwind CSS

Language: JavaScript (ES6+)

Setup Instructions
Prerequisites

Ensure the following are installed on your system:

Node.js (v18 or higher recommended)

npm (comes with Node.js)

Installation

Clone the repository and install dependencies:

git clone https://github.com/Sumit-Singh94/HedamoAssign.git
cd HedamoAssign
npm install

Run Locally

Start the development server:

npm run dev


The application will be available at:

http://localhost:5173

Project Structure
src/
 ├─ components/
 │   ├─ ProductDetail.jsx
 │   ├─ Skeleton.jsx
 │   └─ EmptyState.jsx
 ├─ data/
 │   └─ products.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css

Implementation Notes

The interface is intentionally simple, focusing on visual hierarchy, spacing consistency, and interaction polish rather than advanced features.

A restrained color palette is used to maintain an institutional and trustworthy aesthetic.

All microcopy and labels are carefully written to avoid language that implies validation, certification, or approval.

Data Assumptions

Product data is mocked locally in src/data/products.js.

Each product includes:

Name

Category

Producer

Status (Draft / Submitted / Published)

Last updated date

Disclosure metadata (declared by, evidence count)

Version history (minimum two versions)

No backend integration is assumed for this assignment.

Disclosure Philosophy

All information presented in the interface is producer-declared.
The system does not verify, certify, approve, or endorse any claims.

A clear disclaimer is displayed in the product detail view to reinforce this boundary.

Notes

Loading and empty states are included to demonstrate handling of common edge cases.

Keyboard-accessible elements follow standard browser interaction patterns.

The implementation is designed to scale visually without changing the underlying disclosure model.
