export interface User {
  id: number;
  name: string;
  email: string;
  role: "student" | "admin";
  isActive: boolean;
}

export interface Item {
  id: number;
  title: string;
  description: string;
  location: string;
  reportedBy: number; // User id
  status: ItemStatus;
}

export interface Claim {
  id: number;
  itemId: number;
  claimedBy: number; // User id
  status: ClaimStatus;
  claimedAt: Date;
}

// ===== TYPE ALIASES =====
export type ID = number | string;

export type Coordinate = {
  x: number;
  y: number;
};

export type Formatter = (value: number) => string;

// ===== GENERIC INTERFACE =====
// ApiResponse<T> can wrap ANY data type -- every future GT reuses this
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// ===== UTILITY TYPES =====
// Partial<T> -- every field becomes optional (good for update payloads)
export type ItemUpdate = Partial<Item>;

// Pick<T, K> -- keep ONLY the listed fields
export type ItemPreview = Pick<Item, "id" | "title" | "status">;

// Omit<T, K> -- keep every field EXCEPT the listed ones
export type PublicUser = Omit<User, "email" | "isActive">;

// Record<K, T> -- a fixed set of keys, each mapped to the same value type
export type RoleCount = Record<"student" | "admin", number>;

// ===== ENUMS =====
// Regular enum -- multi-step status lifecycle for an Item (lost -> found -> claimed -> returned)
export enum ItemStatus {
  Lost,
  Found,
  Claimed,
  Returned,
}

// const enum -- inlined at compile time, zero runtime overhead
export const enum ClaimStatus {
  Pending = "pending",
  Verified = "verified",
  Rejected = "rejected",
}