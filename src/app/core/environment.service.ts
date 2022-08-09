import { Injectable } from "@angular/core";
import { environment } from "@env";

@Injectable({ providedIn: "root" })
export class EnvironmentService {
  getEnvironment(): Record<string, any> {
    return environment;
  }
}
