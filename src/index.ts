import type {
  User,
  Item,
  Claim,
  ApiResponse,
  ItemUpdate,
  ItemPreview,
  PublicUser,
  RoleCount,
} from "../types/index";
import { ItemStatus, ClaimStatus } from "../types/index";

// ===== PRIMITIVE TYPE ANNOTATIONS =====
const projectName: string = "campus-lost-and-found";
const currentYear: number = 2026;
const isFullStack: boolean = true;
const nothing: null = null;
const notSet: undefined = undefined;

function greet(name: string, year: number): string {
  return `Welcome to ${name} -- AY ${year}!`;
}

function logMessage(message: string): void {
  console.log(message);
}

logMessage(greet(projectName, currentYear));

// ===== SPECIAL TYPES =====
let anything: any = "hello";
anything = 42;
anything = true;

let userInput: unknown = "test";
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase());
}

function throwError(message: string): never {
  throw new Error(message);
}

// ===== SAMPLE DATA =====
const student: User = {
  id: 1,
  name: "Juan Luna",
  email: "juan@example.com",
  role: "student",
  isActive: true,
};

const admin: User = {
  id: 2,
  name: "Maria Santos",
  email: "maria.santos@example.com",
  role: "admin",
  isActive: true,
};

const foundItem: Item = {
  id: 1,
  title: "Silver Laptop",
  description: "Found in Room 204, left on a desk after class",
  location: "Room 204",
  reportedBy: student.id,
  status: ItemStatus.Found,
};

const itemClaim: Claim = {
  id: 1,
  itemId: foundItem.id,
  claimedBy: student.id,
  status: ClaimStatus.Pending,
  claimedAt: new Date(),
};

console.log(student);
console.log(foundItem);

// ===== GENERIC FUNCTIONS =====
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

function getById<T extends { id: number }>(
  items: T[],
  id: number
): T | undefined {
  return items.find((item) => item.id === id);
}

const firstItem = getFirst<Item>([foundItem]);
const foundById = getById<Item>([foundItem], 1);

console.log(firstItem?.title);
console.log(foundById?.location);

// ===== GENERIC INTERFACE USAGE =====
const itemResponse: ApiResponse<Item> = {
  success: true,
  data: foundItem,
};

const claimsResponse: ApiResponse<Claim[]> = {
  success: true,
  data: [itemClaim],
};

console.log(itemResponse.data.title);

// ===== USING UTILITY TYPES =====
const patch: ItemUpdate = { status: ItemStatus.Claimed };

const preview: ItemPreview = { id: 1, title: "Silver Laptop", status: ItemStatus.Found };

const publicProfile: PublicUser = { id: 1, name: "Juan Luna", role: "student" };

const roleCount: RoleCount = { student: 45, admin: 3 };

// ===== ReturnType<T> =====
function makeClaim(itemId: number, userId: number) {
  return { id: 1, itemId, claimedBy: userId, claimedAt: new Date() };
}

type NewClaim = ReturnType<typeof makeClaim>;
const newClaim: NewClaim = makeClaim(1, 1);

// ===== USING THE ENUM =====
let status: ItemStatus = ItemStatus.Lost;
console.log(ItemStatus[status]);

status = ItemStatus.Found;
console.log(status === ItemStatus.Found);

const claimStatus: ClaimStatus = ClaimStatus.Pending;
console.log(claimStatus);