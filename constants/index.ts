import { Company } from "../types";
import json from "./data.json";

export const data: { companies: Company[] } = json as { companies: Company[] };
