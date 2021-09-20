import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api';
import { project as projectData } from 'app/mock-api/analiticas/resumen/data';

@Injectable({
    providedIn: 'root',
})
export class ProjectMockApi {
    private _project: any = projectData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/analiticas/resumen')
            .reply(() => [200, cloneDeep(this._project)]);
    }
}
