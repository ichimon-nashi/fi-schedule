// src/lib/types.ts
export interface User {
	id: string;
	employee_id: string;
	full_name: string;
	rank: string;
	base: string;
	email: string;
	filter: string[];
	handicap_level: number;
	authentication_level: number;
	password?: string;
	password_hash?: string;
	created_at?: string;
	updated_at?: string;
}

// Schedule-related types for FI roster
export interface ScheduleEntry {
	id?: string;
	employee_id: string;
	full_name: string;
	rank: string;
	base: string;
	date: string; // YYYY-MM-DD format
	duties: string[];
	year: number;
	created_by?: string;
	created_at?: Date;
	updated_at?: Date;
}

export interface DutyPermission {
	duty: string;
	created_by: string;
}

export interface Duty {
	id?: string;
	name: string;
	color: string;
	created_at?: string;
	updated_at?: string;
}

export type DutyType = "OD" | "SAG" | "教師會" | "訓練" | "課" | "專案" | "休假" | "查核" | "IOSA";

export const DUTY_TYPES: DutyType[] = [
	"OD", 
	"SAG", 
	"教師會", 
	"訓練", 
	"課", 
	"專案", 
	"休假", 
	"查核", 
	"IOSA"
];

// Color scheme for different duties
export const DUTY_COLORS: Record<DutyType, string> = {
	"OD": "#FF6B6B",        // Red
	"SAG": "#4ECDC4",       // Teal
	"教師會": "#3772ff",     // Blue
	"訓練": "#72e0ac",       // Green
	"課": "#f9a03f",         // Orange
	"專案": "#ffc2e2",       // Pink
	"休假": "#d0ada7",       // Light Brown
	"查核": "#f4e285",       // Light Yellow
	"IOSA": "#b892ff"       // Purple
};

export interface CalendarDay {
	date: string;
	day: number;
	month: number;
	year: number;
	isCurrentMonth: boolean;
	isToday: boolean;
	duties: string[];
}

export interface ScheduleFilters {
	year: number;
	month?: number;
	employeeId?: string;
}

export interface ExportData {
	employee_id: string;
	full_name: string;
	rank: string;
	base: string;
	schedule: Record<string, string[]>; // date -> duties mapping
}

export interface AuthContextType {
	token: string | null;
	user: User | null;
	login: (identifier: string, password: string) => Promise<boolean>;
	logout: () => void;
	loading: boolean;
}

export interface JWTPayload {
	userId: string;
	email: string;
	authLevel: number;
	iat?: number;
	exp?: number;
}