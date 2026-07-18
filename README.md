# Campus Lost & Found Tracker

## Project Concept

This project is the TypeScript foundation for a Campus Lost & Found Tracker, where
students can post lost or found items and campus admins can verify claims. Users
report items they've lost or found, and other users can submit a claim on an item,
which an admin then verifies.

The types defined here (interfaces, generics, utility types, and enums) form the
foundation that later modules (Module 2 onward) will build on top of — for example,
using these interfaces as React component props, or as the shape of API responses.

## Types Defined So Far

- `User` — id, name, email, role (`student` | `admin`), isActive
- `Item` — id, title, description, location, reportedBy, status (`ItemStatus`)
- `Claim` — id, itemId, claimedBy, status (`ClaimStatus`), claimedAt
- `ID`, `Coordinate`, `Formatter` — supporting type aliases
- `ApiResponse<T>` — generic interface wrapping any data type in a standard response shape
- `ItemUpdate` (`Partial<Item>`) — optional-field version of Item, for update payloads
- `ItemPreview` (`Pick<Item, "id" | "title" | "status">`) — lightweight preview object
- `PublicUser` (`Omit<User, "email" | "isActive">`) — safe-to-expose public profile
- `RoleCount` (`Record<"student" | "admin", number>`) — dashboard-style counts
- `ItemStatus` — enum, multi-step lifecycle (`Lost`, `Found`, `Claimed`, `Returned`)
- `ClaimStatus` — const enum (`Pending`, `Verified`, `Rejected`)

## How to Install and Run

1. Install dependencies: