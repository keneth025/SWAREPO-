
import { Injectable } from '@angular/core';

export class PGJobstreetPageTracker {
  Id?: number;
  AccessDate: Date | null;
  AccessCount: number;

  constructor(init?: Partial<PGJobstreetPageTracker>) {
    Object.assign(this, init);
    this.AccessCount = this.AccessCount || 0;
  }
}

@Injectable({
  providedIn: 'root'
})
export class JobStreetPageTrackerService {
  private _IsLoaded = false;
  get IsLoaded() { return this._IsLoaded; }

  constructor() {}

  get query() {
    // Replace with actual SharePoint or API call
    return {
      filter: (query: string) => ({
        top: (n: number) => async () => {
          // Simulate fetching from a list
          return []; // Replace with actual data
        }
      })
    };
  }

  toObject(data: any): PGJobstreetPageTracker {
    const { Id, AccessDate, AccessCount } = data;
    return new PGJobstreetPageTracker({
      Id,
      AccessDate: AccessDate ? new Date(AccessDate) : null,
      AccessCount,
    });
  }

  async save(data: PGJobstreetPageTracker) {
    // Replace with actual save logic (e.g., HTTP POST/PUT)
    console.log('Saving tracker data:', data);
  }

  async updateAccessCounter() {
    const currentDate = new Date();
    const tempData = await this.query
      .filter(`AccessDate eq '${currentDate.toISOString().split('T')[0]}'`)
      .top(1)();

    const currentCounter = tempData.map(e => this.toObject(e))[0] || new PGJobstreetPageTracker({ AccessDate: currentDate });
    currentCounter.AccessCount += 1;
    await this.save(currentCounter);
  }
}
